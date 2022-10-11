export declare type NFT = {
  contract: string;
  name: string;
  img: string;
  id: number;
};
export declare type DRIP = {
  isMutable: boolean;
  collectionName: string;
  contract: string;
  img: string;
  id: number;
};
export declare type NFTs = NFT[];
export declare type NFTsByCollection = {
  collectionName: string;
  assets: NFTs;
}[];
export declare type AssetsOwned = NFTsByCollection;
export declare type DripsOwned = DRIP[];
export declare type Collection = {
  name: string;
  contract: string;
};
export declare type Drop = {
  _address: string;
  id: number;
  maxSupply: number;
  price: string;
  currentSupply: number;
  collections: Collection[];
};
export declare type Drops = Drop[];
