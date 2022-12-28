import "dotenv/config";

import store from "./store";
import server from "./server";

import { PORT } from "./config";

import "./http";
import "./io";

const start = async (PORT: number) => {
  try {
    await store.init();
    await server.start(PORT);
  } catch (error) {
    console.error(`Error occured: ${error.message}`);
  }
};

start(PORT);
