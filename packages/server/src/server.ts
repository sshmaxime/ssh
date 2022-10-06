import http from "http";
import express, { Request, Response } from "express";
import { Server as SocketIoServer } from "socket.io";
import { env } from "process";
import Store from "./store";

import cors from "cors";
import axios from "axios";
import { AssetsOwned, Drops, NFTs } from "@sshlabs/typings";

export class Server {
  private server: http.Server;
  private app: express.Express;
  private io: SocketIoServer;

  constructor() {
    this.app = this.createExpressApp();
    this.server = this.createHttpServer();
    this.io = this.createIoServer();
  }

  get = () => {
    return { server: this.server, app: this.app, io: this.io };
  };

  private createExpressApp = () => {
    // Env setup
    const apiKey = env["apiKey"];

    // Axios setup
    axios.defaults.headers.common["X-API-KEY"] = apiKey;

    // Express server
    const app = express();
    app.use(cors({ origin: "http://localhost:3000" }));
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(express.static(__dirname + "/../public"));

    app.get("/drop/:dropId/:address", async (req: Request, res: Response): Promise<Response> => {
      const drop = Store.getDrop(req.params.dropId as any as number);
      const address = req.params.address;

      console.log(drop);

      const dataToReturn: AssetsOwned = [];

      for (let collection of drop.collections) {
        const resq = await axios.get(
          `https://api.opensea.io/api/v1/assets?owner=${address}&asset_contract_address=${collection.contract}&order_direction=desc&offset=0&limit=20`
        );

        let nfts: NFTs = [];
        for (let asset of resq.data.assets) {
          nfts.push({
            contract: collection.contract,
            img: asset.image_url,
            id: asset.token_id,
          });
        }

        dataToReturn.push({
          collectionName: collection.name,
          assets: nfts,
        });
      }
      console.log(dataToReturn);
      return res.status(200).send(dataToReturn);
    });

    app.get("/drops", async (req: Request, res: Response): Promise<Response> => {
      const drops = Store.getState();

      const dataToReturn: Drops = drops;
      console.log("heyy");
      console.log(dataToReturn);
      return res.status(200).send(dataToReturn);
    });

    return app;
  };

  private createHttpServer = () => {
    return http.createServer(this.app);
  };

  private createIoServer = () => {
    return new SocketIoServer(this.server, {
      cors: {
        origin: "http://localhost:3000",
      },
    });
  };

  start = async (PORT: number) => {
    try {
      this.server.listen(PORT, async (): Promise<void> => {
        console.log(`Connected successfully on port ${PORT}`);
      });
    } catch (error) {
      console.error(`Error occured: ${error.message}`);
    }
  };
}

export default new Server();
