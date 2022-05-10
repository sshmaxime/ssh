export type NFT = {
  contract: string;
  img: string;
  id: number;
};
export type NFTs = NFT[];
export type NFTsByCollection = { [collectionName: string]: NFTs };
export type Collection = {
  name: string;
  contract: string;
};

export type Drop = {
  name: string;
  collections: Collection[];
};

export type Drops = Drop[];
