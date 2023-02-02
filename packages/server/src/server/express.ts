import express from "express";
import cors from "cors";

import { CONFIG } from "../config";

const app = express();
app.use(cors({ origin: CONFIG.network.cors_origin }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/../public"));

export default app;
