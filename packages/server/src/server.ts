import http from "http";
import express, { Request, Response } from "express";
import { Server as SocketIoServer } from "socket.io";
import { env } from "process";

import cors from "cors";
import axios from "axios";

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
