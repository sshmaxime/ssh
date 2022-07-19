import "dotenv/config";

import { Server } from "./server";

const PORT = 3001;

const server = new Server(PORT);

server.start();
