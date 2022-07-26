import http from "http";

import express from "express";
import { Server as SocketIoServer } from "socket.io";
import app from "./express";
import State from "./state";

// https://github.com/sindresorhus/on-change

export class Server {
  readonly PORT: number;

  app: express.Express;
  server: http.Server;
  io: SocketIoServer;

  constructor(port: number) {
    this.PORT = port;

    this.app = app;
    this.server = http.createServer(this.app);
    this.io = new SocketIoServer(this.server);
  }

  stateInit = async () => {
    await State.init();
  };

  ioInit = async () => {
    this.io.on("connection", (socket) => {
      console.log("a user connected");
    });
  };

  start = async () => {
    try {
      this.server.listen(this.PORT, async (): Promise<void> => {
        await this.stateInit();

        console.log(`Connected successfully on port ${this.PORT}`);
      });
    } catch (error) {
      console.error(`Error occured: ${error.message}`);
    }
  };
}
