import http from "http";
import express, { Request, Response } from "express";
import { Server as SocketIoServer } from "socket.io";
import { env } from "process";
import Store from "./store";

import cors from "cors";
import axios from "axios";
import { AssetsOwned, DRIP, DripsOwned, Drops, NFTs } from "@sshlabs/typings";

const userTestAddress = "0xB7C307C43Fd142a4a38C1563e4e25CDAeEb8C86d";
const FakeNftAddress = "0xd0C3016586C1337f6869cE68D25b08c946B121da";

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

    app.get("/assets/:address", async (req: Request, res: Response): Promise<Response> => {
      const address = req.params.address;

      const preData: { [contractAddress: string]: NFTs } = {};
      const dataToReturn: AssetsOwned = [];

      let isRequestDone = false;
      let offset = 0;
      let limit = 20;

      if (address === userTestAddress) {
        const getTestData = await Store.getOnChainAsset(FakeNftAddress, userTestAddress);
        dataToReturn.push({
          collectionName: getTestData[0].name,
          assets: getTestData,
        });

        return res.status(200).send(dataToReturn);
      }

      while (!isRequestDone) {
        const resq = await axios.get(
          `https://api.opensea.io/api/v1/assets?owner=${address}&offset=${offset}&limit=${limit}`
        );

        for (let asset of resq.data.assets) {
          const contractAddress = asset.asset_contract.address;
          if (!preData[contractAddress]) preData[contractAddress] = [];

          preData[contractAddress].push({
            contract: asset.asset_contract.address,
            img: asset.image_url,
            id: asset.token_id,
            name: asset.collection.name,
          });
        }

        if (resq.data.assets.length !== 20) {
          isRequestDone = true;
        } else {
          offset += limit;
        }
      }

      for (const data in preData) {
        dataToReturn.push({
          collectionName: preData[data][0].name,
          assets: preData[data],
        });
      }

      console.log(dataToReturn);
      return res.status(200).send(dataToReturn);
    });

    app.get("/drops", async (req: Request, res: Response): Promise<Response> => {
      const drops = Store.getState();

      const dataToReturn: Drops = drops;
      return res.status(200).send(dataToReturn);
    });

    app.get("/drip/:dropId/:tokenId", async (req: Request, res: Response): Promise<Response> => {
      const dropId = Number(req.params.dropId);
      const tokenId = Number(req.params.tokenId);

      try {
        const dataToReturn: DRIP = await Store.getDrip(dropId, tokenId);
        return res.status(200).send(dataToReturn);
      } catch {
        console.log("laaa");
        return res.status(400).send();
      }
    });

    app.get("/drip/:address", async (req: Request, res: Response): Promise<Response> => {
      const address = req.params.address;

      const dataToReturn: DripsOwned = await Store.getDripOwnedByAddress(address);

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
