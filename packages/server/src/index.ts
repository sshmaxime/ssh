import "dotenv/config";

import { CONFIG } from "./config";

import store from "./store";
import server from "./server";

import "./api";
import "./io";

const start = async (PORT: number) => {
  try {
    await store.init();
    await server.start(PORT);
  } catch (error) {
    console.error(`Error occured: ${error}`);
  }
};

start(CONFIG.server.port);
