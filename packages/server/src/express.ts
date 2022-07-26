import express, { Request, Response } from "express";

import { env } from "process";

import cors from "cors";
import axios from "axios";
import State from "./state";

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

// // @getDrop
// //
// // return the drop associated with the dropId
// app.get("/drop/:dropId", async (req: Request, res: Response): Promise<Response> => {
//   const dropId = req.params.dropId as any as number;
//   const dataToReturn = State.getDrop(dropId);

//   return dataToReturn !== null ? res.status(200).send(dataToReturn) : res.status(404).send();
// });

export default app;
