import express, { Request, Response } from "express";

import { env } from "process";

import cors from "cors";
import axios from "axios";

// Env setup
const apiKey = env["apiKey"];

// Axios setup
axios.defaults.headers.common["X-API-KEY"] = apiKey;

// Express server
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/../public"));

//
// @hello
//
app.get("/hello", async (req: Request, res: Response): Promise<Response> => {
  return res.status(200).send("Hello");
});

export default app;
