export type Collection = {
  name: string;
  contract: string;
};

export type Drop = {
  name: string;
  collections: Collection[];
};

export type Drops = Drop[];

export type NFTsForDropByAddress = { [collectionName: string]: { id: number; img: string }[] };
