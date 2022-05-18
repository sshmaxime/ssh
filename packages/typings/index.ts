//////////////////
/// Primitives ///
//////////////////
export type NFT = {
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
export type DripsOwned = NFT[];

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
  type: {
    key: boolean;
    irl: boolean;
    threed: boolean;
  };
};

export type Drops = Drop[];
