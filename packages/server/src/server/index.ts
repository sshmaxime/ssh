import http from "http";
import express from "express";
import { Server as SocketIoServer } from "socket.io";

import io from "./io";
import expressApp from "./express";

export class Server {
  private server: http.Server;
  private app: express.Express;
  private io: SocketIoServer;

  constructor() {
    this.app = expressApp;
    this.server = http.createServer(this.app);
    this.io = io;

    io.attach(this.server);
  }

  get = () => {
    return { server: this.server, app: this.app, io: this.io };
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
