import "dotenv/config";

import express, { Application, Request, Response } from "express";
import axios from "axios";
import { env } from "process";
import cors from "cors";

import { Collection, NFTsByCollection, NFT, AssetsOwned } from "@sshlabs/typings";

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

const COLLECTIONS: { [collectionName: string]: Collection } = {
  Sublimes: {
    name: "Sublimes",
    contract: "0x116aebbad1c8226c80f9f0cb4e255540a0f7afd9",
  },
  Isotile: {
    name: "Isotile",
    contract: "0x31eAa2E93D7AFd237F87F30c0Dbd3aDEB9934f1B",
  },
};

const DROPS = [
  {
    name: "#DROP 0",
    collections: [COLLECTIONS.Sublimes],
  },
];

app.get("/drop/:drop", async (req: Request, res: Response): Promise<Response> => {
  const drop = DROPS[req.params.drop];

  return res.status(200).send({
    ...drop,
  });
});

// return AssetsOwned
app.get("/drop/:drop/:address", async (req: Request, res: Response): Promise<Response> => {
  const drop = DROPS[req.params.drop as any as number];
  const address = req.params.address;

  const dataToReturn: AssetsOwned = {
    nfts: [],
    drips: [],
  };

  for (let collection of drop.collections) {
    const resq = await axios.get(
      `https://api.opensea.io/api/v1/assets?owner=${address}&asset_contract_address=${collection.contract}&order_direction=desc&offset=0&limit=50`
    );

    let nfts: NFT[] = [];
    for (let asset of resq.data.assets) {
      nfts.push({
        contract: collection.contract,
        img: asset.image_url,
        id: asset.token_id,
      });
    }

    dataToReturn.nfts.push({
      collectionName: collection.name,
      assets: nfts,
    });
  }

  return res.status(200).send(dataToReturn);
});

app.get("/", async (req: Request, res: Response): Promise<Response> => {
  return res.status(200).send({
    message: "Hello World!",
  });
});

try {
  app.listen(port, (): void => {
    console.log(`Connected successfully on port ${port}`);
  });
} catch (error) {
  console.error(`Error occured: ${error.message}`);
}
