import { Server } from "socket.io";

import { CORS_ORIGIN } from "../config";

export default new Server({
  cors: {
    origin: CORS_ORIGIN,
  },
});
