//////////////////
/// Primitives ///
//////////////////
export type NFT = {
  contract: string;
  img: string;
  id: number;
};

export type DRIP = {
  isMutable: boolean;
  collectionName: string;
  contract: string;
  img: string;
  id: number;
};

export type NFTs = NFT[];
export type NFTsByCollection = { collectionName: string; assets: NFTs }[];

/////////////////
/// API Types ///
/////////////////
export type AssetsOwned = NFTsByCollection;
export type DripsOwned = DRIP[];

//
//
//
//
//
export type Collection = {
  name: string;
  contract: string;
};

export type Drop = {
  id: number;
  collections: Collection[];
  price: string; // wei
  maxSupply: number;
};

export type Drops = Drop[];
