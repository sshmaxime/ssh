import { NFT, NFTs, NFTsByCollection } from "@sshlabs/typings";
import axios from "axios";
import { createHash } from "crypto";

import { CONFIG, isProduction, isStaging } from "../config";

if (isProduction) {
  axios.defaults.headers.common["X-API-KEY"] = CONFIG.api_keys.opensea;
}

const cacheNft: { [hash: string]: NFT } = {};

const sha256 = (x: string) => createHash("sha256").update(x, "utf8").digest("hex");

const endpoint = isProduction
  ? "https://api.opensea.io/api/v1"
  : isStaging
  ? "https://testnets-api.opensea.io/api/v1"
  : "";

const setInCache = (contractAddress: string, tokenId: number, nft: NFT) => {
  cacheNft[sha256(contractAddress + tokenId)] = nft;
};

const getInCache = (contractAddress: string, tokenId: number) => {
  return cacheNft[sha256(contractAddress + tokenId)];
};

const getAsset = async (contractAddress: string, tokenId: number) => {
  const cachedValue = getInCache(contractAddress, tokenId);
  if (cachedValue) return cachedValue;

  console.log(
    "Log: OPENSEA: getAsset contractAddress: [",
    contractAddress,
    "], tokenId: [",
    tokenId,
    "]"
  );

  const asset = (await axios.get(`${endpoint}/asset/${contractAddress}/${tokenId}`)).data;

  const nft: NFT = {
    address: asset.asset_contract.address,
    img: asset.image_url,
    id: asset.token_id,
    name: asset.collection.name,
    symbol: asset.collection.symbol,
  };

  setInCache(contractAddress, tokenId, nft);

  console.log("getAsset -> Done");
  return nft;
};

const getAssetsOwnedByAddress = async (address: string) => {
  console.log("Log: OPENSEA: getAssetsOwnedByAddress address: [", address, "]");
  const dataToReturn: NFTsByCollection = [];
  const preData: { [contractAddress: string]: NFTs } = {};

  let isRequestDone = false;
  const limit = 20;
  let offset = 0;

  while (!isRequestDone) {
    const resq = await axios.get(
      `${endpoint}/assets?owner=${address}&offset=${offset}&limit=${limit}`
    );

    for (let asset of resq.data.assets) {
      const contractAddress = asset.asset_contract.address;
      if (!preData[contractAddress]) preData[contractAddress] = [];

      const tokenId = asset.token_id;
      const nft = {
        address: asset.asset_contract.address,
        img: asset.image_url,
        id: tokenId,
        name: asset.collection.name,
        symbol: asset.collection.symbol,
      };

      setInCache(contractAddress, tokenId, nft);

      preData[contractAddress].push(nft);
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

  console.log("getAssetsOwnedByAddress -> Done");
  return dataToReturn;
};

const OPENSEA = {
  getAsset,
  getAssetsOwnedByAddress,
};

export { OPENSEA };
