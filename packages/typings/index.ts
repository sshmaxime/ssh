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

export function getStatus(input: number): STATUS;
export function getStatus(input: STATUS): number;

export function getStatus(input: number | STATUS): number | STATUS {
  if (typeof input === "number") {
    if (input === 0) return STATUS.CREATED;
    else if (input === 1) return STATUS.MINTABLE;
    else if (input === 2) return STATUS.STANDBY;
    else if (input === 3) return STATUS.CUSTOMIZABLE;
    else return -1;
  } else {
    if (input === STATUS.CREATED) return 0;
    else if (input === STATUS.MINTABLE) return 1;
    else if (input === STATUS.STANDBY) return 2;
    else if (input === STATUS.CUSTOMIZABLE) return 3;
    else return -1;
  }
}

export enum STATUS {
  CREATED = "CREATED", // 0
  MINTABLE = "MINTABLE", // 1
  STANDBY = "STANDBY", // 2
  CUSTOMIZABLE = "CUSTOMIZABLE", // 3
}

export type Drop = {
  _address: string;
  id: number;
  collections: Collection[];
  price: string; // wei
  maxSupply: number;
  currentSupply: number;
  status: STATUS;
};

export type Drops = Drop[];
