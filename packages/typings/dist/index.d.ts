export declare type NFT = {
    contract: string;
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
export declare function getStatus(input: number): STATUS;
export declare function getStatus(input: STATUS): number;
export declare enum STATUS {
    CREATED = "CREATED",
    MINTABLE = "MINTABLE",
    STANDBY = "STANDBY",
    CUSTOMIZABLE = "CUSTOMIZABLE"
}
export declare type Drop = {
    _address: string;
    id: number;
    collections: Collection[];
    price: string;
    maxSupply: number;
    currentSupply: number;
    status: STATUS;
};
export declare type Drops = Drop[];
