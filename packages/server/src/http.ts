import { Request, Response } from "express";

import server from "./server";

import { axios } from "./clients";

import store from "./store";
import { NFTsByCollection, Drip, Drips, Drops, NFTs, Drop } from "@sshlabs/typings";
import { ENV } from "./config";

const { app } = server.get();

app.get("/assets/:address", async (req: Request, res: Response): Promise<Response> => {
  const address = req.params.address;
  const dataToReturn: NFTsByCollection = [];

  if (ENV === "TEST") {
    const getTestData = await store.getLocalAssetsTest(address);

    if (getTestData.length === 0) return res.status(200).send([]);

    dataToReturn.push({
      collectionName: getTestData[0].name,
      collectionSymbol: getTestData[0].symbol,
      assets: getTestData,
    });
    return res.status(200).send(dataToReturn);
  }

  const preData: { [contractAddress: string]: NFTs } = {};
  let isRequestDone = false;
  let offset = 0;
  let limit = 20;

  while (!isRequestDone) {
    const resq = await axios.get(
      `https://api.opensea.io/api/v1/assets?owner=${address}&offset=${offset}&limit=${limit}`
    );

    for (let asset of resq.data.assets) {
      const contractAddress = asset.asset_contract.address;
      if (!preData[contractAddress]) preData[contractAddress] = [];

      preData[contractAddress].push({
        address: asset.asset_contract.address,
        img: asset.image_url,
        id: asset.token_id,
        name: asset.collection.name,
        symbol: asset.collection.symbol,
      });
    }

    if (resq.data.assets.length !== 20) {
      isRequestDone = true;
    } else {
      offset += limit;
    }
  }

  for (const data in preData) {
    dataToReturn.push({
      collectionName: preData[data][0].name,
      collectionSymbol: preData[data][0].symbol,
      assets: preData[data],
    });
  }

  return res.status(200).send(dataToReturn);
});

app.get("/drop/:dropId", async (req: Request, res: Response): Promise<Response> => {
  const dropId = Number(req.params.dropId);
  const drops = store.getState();

  const dataToReturn: Drop = drops[dropId];
  return res.status(200).send(dataToReturn);
});

app.get("/drip/:dropId/:tokenId", async (req: Request, res: Response): Promise<Response> => {
  const dropId = Number(req.params.dropId);
  const tokenId = Number(req.params.tokenId);

  try {
    const dataToReturn: Drip = await store.getDrip(dropId, tokenId);
    return res.status(200).send(dataToReturn);
  } catch {
    return res.status(400).send();
  }
});

app.get("/drip/:address", async (req: Request, res: Response): Promise<Response> => {
  const address = req.params.address;

  const dataToReturn: Drips = await store.getDripOwnedByAddress(address);

  return res.status(200).send(dataToReturn);
});
