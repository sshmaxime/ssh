import "dotenv/config";

import express, { Application, Request, Response } from "express";
import axios from "axios";
import { env } from "process";
import cors from "cors";

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

type NFT = {
  contract: string;
  img: string;
  id: number;
};

type NFTs = NFT[];

type NFTsByCollection = { [collectionName: string]: NFTs };

type Collection = {
  name: string;
  contract: string;
};

const COLLECTIONS: { [collectionName: string]: Collection } = {
  Sublimes: {
    name: "Sublimes",
    contract: "0x116aebbad1c8226c80f9f0cb4e255540a0f7afd9",
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

app.get("/drop/:drop/:address", async (req: Request, res: Response): Promise<Response> => {
  const drop = DROPS[req.params.drop as any as number];
  const address = req.params.address;

  let nftsForDropByAddress: NFTsByCollection = {};

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

    nftsForDropByAddress[collection.name] = nfts;
  }

  return res.status(200).send(nftsForDropByAddress);
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
