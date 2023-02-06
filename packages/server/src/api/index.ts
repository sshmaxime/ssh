import { Request, Response } from "express";

import server from "../server";

import { OPENSEA } from "../clients/opensea";

import store from "../store";
import { isDevelopment } from "../config";
import { getAssetsOwnedByAddress_Mock } from "../clients/mock";

const { app } = server.get();

app.get("/assets/:address", async (req: Request, res: Response): Promise<Response> => {
  const address = req.params.address;
  console.log(`REQUEST: /assets/${address}`);

  if (isDevelopment) {
    return res.status(200).send(await getAssetsOwnedByAddress_Mock(address));
  } else {
    return res.status(200).send(await OPENSEA.getAssetsOwnedByAddress(address));
  }
});

app.get("/drop/:dropId", async (req: Request, res: Response): Promise<Response> => {
  const dropId = Number(req.params.dropId);
  console.log(`REQUEST: /drop/${dropId}`);
  return res.status(200).send(store.getDrop(dropId));
});

app.get("/drip/:dropId/:tokenId", async (req: Request, res: Response): Promise<Response> => {
  const dropId = Number(req.params.dropId);
  const tokenId = Number(req.params.tokenId);
  console.log(`REQUEST: /drip/${dropId}/${tokenId}`);
  return res.status(200).send(await store.getDrip(dropId, tokenId));
});

app.get("/drip/:address", async (req: Request, res: Response): Promise<Response> => {
  const address = req.params.address;
  console.log(`REQUEST: /drip/${address}`);
  return res.status(200).send(await store.getDripOwnedByAddress(address));
});
