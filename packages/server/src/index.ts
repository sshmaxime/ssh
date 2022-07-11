import "dotenv/config";

import express, { Application, Request, Response } from "express";
import axios from "axios";
import { env } from "process";
import cors from "cors";

import { Collection, NFT, AssetsOwned, Drops, DripsOwned, Drop } from "@sshlabs/typings";
import { Server } from "./server";

// Env setup
const apiKey = env["apiKey"];

// Express server
const app: Application = express();
app.use(cors());
const port = 3001;

// Axios setup
axios.defaults.headers.common["X-API-KEY"] = apiKey;

// Body parsing Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/../public"));

// Set up server instance
const server = new Server();

// @getDrop
//
// return the drop associated with the dropId
app.get("/drop/:dropId", async (req: Request, res: Response): Promise<Response> => {
  const dropId = req.params.dropId as any as number;
  const dataToReturn = server.getDropById(dropId);

  return dataToReturn ? res.status(200).send(dataToReturn) : res.status(404);
});

// @getDripsByAddress
//
// return the drips owned by an address
app.get("/drip/:address", async (req: Request, res: Response): Promise<Response> => {
  const address = req.params.address;
  const rawDripsByAddress = await server.getDripsByAddress(address);

  const dataToReturn: DripsOwned = rawDripsByAddress;

  return res.status(200).send(dataToReturn);
});

// @getAssetsForDropByAddress
//
// return the elegible assets for the dropId of an address
app.get("/drop/:dropId/:address", async (req: Request, res: Response): Promise<Response> => {
  const drop = server.getDropById(req.params.dropId as any as number);
  const address = req.params.address;

  const dataToReturn: AssetsOwned = [];

  for (let collection of drop.collections) {
    const resq = await axios.get(
      `https://api.opensea.io/api/v1/assets?owner=${address}&asset_contract_address=${collection.contract}&order_direction=desc&offset=0&limit=20`
    );

    let nfts: NFT[] = [];
    for (let asset of resq.data.assets) {
      nfts.push({
        contract: collection.contract,
        img: asset.image_url,
        id: Number(asset.token_id),
      });
    }

    dataToReturn.push({
      collectionName: collection.name,
      assets: nfts,
    });
  }

  return res.status(200).send(dataToReturn);
});

try {
  app.listen(port, async (): Promise<void> => {
    await server.init();
    console.log(`Connected successfully on port ${port}`);
  });
} catch (error) {
  console.error(`Error occured: ${error.message}`);
}
