import { Server } from "socket.io";
import { CONFIG } from "../config";

export default new Server({
  cors: {
    origin: CONFIG.network.cors_origin,
  },
});
