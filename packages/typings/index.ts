//////////////////
/// Primitives ///
//////////////////
export type NFT = {
  contract: string;
  img: string;
  id: number;
  name: string;
};

export type DRIP = {
  dropId: number;
  isMutable: boolean;
  collectionName: string;
  versionId: number;
  contract: string;
  img: string;
  id: number;
};

export type VersionMetadata = {
  imgUrl: string;
  versionColor: string;
  versionName: string;
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
  _address: string;
  id: number;
  maxSupply: number;
  price: string; // wei
  versions: VersionMetadata[];
  currentSupply: number;
};

export type Drops = Drop[];
