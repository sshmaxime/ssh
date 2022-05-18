import "dotenv/config";

import express, { Application, Request, Response } from "express";
import axios from "axios";
import { env } from "process";
import cors from "cors";

import { Collection, NFT, AssetsOwned, Drops, DripsOwned, Drop } from "@sshlabs/typings";

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
  CryptoPunks: {
    name: "CryptoPunks",
    contract: "0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB",
  },
  BAYC: {
    name: "BAYC",
    contract: "0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d",
  },
};

const DROPS: Drops = [
  {
    id: 0,
    collections: [
      COLLECTIONS.Sublimes,
      // COLLECTIONS.Isotile,
      // COLLECTIONS.CryptoPunks
      // COLLECTIONS.BAYC
    ],
    type: {
      key: true,
      irl: true,
      threed: true,
    },
  },
];

// @getDrop
//
// return the drop associated with the dropId
app.get("/drop/:dropId", async (req: Request, res: Response): Promise<Response> => {
  const dropId = req.params.dropId;
  const dataToReturn = DROPS[dropId];

  return res.status(200).send(dataToReturn);
});

// @getDripsByAddress
//
// return the drips owned by an address
app.get("/drip/:address", async (req: Request, res: Response): Promise<Response> => {
  const address = req.params.address;
  const dataToReturn: DripsOwned = [];

  return res.status(200).send(dataToReturn);
});

// @getAssetsForDropByAddress
//
// return the elegible assets for the dropId of an address
app.get("/drop/:dropId/:address", async (req: Request, res: Response): Promise<Response> => {
  const drop = DROPS[req.params.dropId as any as number];
  const address = req.params.address;

  const dataToReturn: AssetsOwned = [];

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

    dataToReturn.push({
      collectionName: collection.name,
      assets: nfts,
    });
  }

  return res.status(200).send(dataToReturn);
});

try {
  app.listen(port, (): void => {
    console.log(`Connected successfully on port ${port}`);
  });
} catch (error) {
  console.error(`Error occured: ${error.message}`);
}
