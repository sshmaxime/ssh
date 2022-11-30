//////////////////
/// Primitives ///
//////////////////
export type NFT = {
  contract: string;
  img: string;
  id: number;
  name: string;
  symbol: string;
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

export type DropMetadata = {
  id: number;
  model: string;
  versions: { id: number; texture: string; color: string; name: string }[];
};

export type VersionMetadata = {
  imgUrl: string;
  versionColor: string;
  versionName: string;
};

export type NFTs = NFT[];
export type NFTsByCollection = { collectionName: string; collectionSymbol: string; assets: NFTs }[];

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
  symbol: string;
  contract: string;
  img: string;
  price: string;
};

export type Drop = {
  _address: string;
  symbol: string;
  id: number;
  maxSupply: number;
  price: string; // wei
  currentSupply: number;
  defaultItem: Collection;

  metadata: DropMetadata;
};

export type Drops = Drop[];
