import Store from "./store";
import Server from "./server";

const { server, io, app } = Server.get();

export class App {
  constructor() {}

  stateInit = async () => {
    await Store.init();
  };

  ioInit = async () => {
    io.on("connection", (socket) => {
      console.log("a user connected");

      socket.on("updateme", () => {
        console.log("ask for update");
        socket.emit("hello", { data: Store.getState() });
      });
    });
  };

  start = async (PORT: number) => {
    try {
      await this.stateInit();
      await this.ioInit();

      await Server.start(PORT);
    } catch (error) {
      console.error(`Error occured: ${error.message}`);
    }
  };
}
