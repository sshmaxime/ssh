import { NFT, NFTs, NFTsByCollection } from "@sshlabs/typings";
import axios from "axios";

import { CONFIG } from "../config";

axios.defaults.headers.common["X-API-KEY"] = CONFIG.api_keys.opensea;

const getAsset = async (contractAddress: string, tokenId: number) => {
  const asset = (
    await axios.get(`https://api.opensea.io/api/v1/asset/${contractAddress}/${tokenId}`)
  ).data;

  const nft: NFT = {
    address: asset.asset_contract.address,
    img: asset.image_url,
    id: asset.token_id,
    name: asset.collection.name,
    symbol: asset.collection.symbol,
  };

  return nft;
};

const getAssetsOwnedByAddress = async (address: string) => {
  const dataToReturn: NFTsByCollection = [];
  const preData: { [contractAddress: string]: NFTs } = {};

  let isRequestDone = false;
  const limit = 20;
  let offset = 0;

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

  return dataToReturn;
};

const OPENSEA = {
  getAsset,
  getAssetsOwnedByAddress,
};

export { OPENSEA };
