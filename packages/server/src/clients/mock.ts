import { provider } from "../web3";
import { ERC721Enumerable__factory } from "@sshlabs/contracts";
import { ListMockTokens, NFTs, NFTsByCollection } from "@sshlabs/typings";

export const getAssetsOwnedByAddress_Mock = async (address: string) => {
  const NFTs: NFTs = [];
  const dataToReturn: NFTsByCollection = [];

  for (const listName in ListMockTokens) {
    const list = ListMockTokens[listName];

    const contract = ERC721Enumerable__factory.connect(list.contract, provider);
    const nbAssets = (await contract.balanceOf(address)).toNumber();

    for (let nb = 0; nb < nbAssets; nb++) {
      const tokenId = (await contract.tokenOfOwnerByIndex(address, nb)).toNumber();

      NFTs.push({
        address: list.contract,
        img: list.tokens[tokenId],
        id: tokenId,
        name: await contract.name(),
        symbol: await contract.symbol(),
      });
    }
  }

  if (!NFTs.length) return [];

  dataToReturn.push({
    collectionName: NFTs[0].name,
    collectionSymbol: NFTs[0].symbol,
    assets: NFTs,
  });

  return dataToReturn;
};
