export declare type NFT = {
    contract: string;
    img: string;
    id: number;
    name: string;
    symbol: string;
};
export declare enum DripStatus {
    VIRGIN = 0,
    MUTATED = 1
}
export declare type DripMutation = {
    mutator: string;
    mutatorId: number;
};
export declare type DRIP = {
    dropId: number;
    status: DripStatus;
    mutation: DripMutation;
    collectionName: string;
    versionId: number;
    contract: string;
    img: string;
    id: number;
};
export declare type DropMetadata = {
    id: number;
    model: string;
    versions: {
        id: number;
        texture: string;
        color: string;
        name: string;
    }[];
};
export declare type VersionMetadata = {
    imgUrl: string;
    versionColor: string;
    versionName: string;
};
export declare type NFTs = NFT[];
export declare type NFTsByCollection = {
    collectionName: string;
    collectionSymbol: string;
    assets: NFTs;
}[];
export declare type AssetsOwned = NFTsByCollection;
export declare type DripsOwned = DRIP[];
export declare type Collection = {
    name: string;
    symbol: string;
    contract: string;
    img: string;
    price: string;
};
export declare type Drop = {
    _address: string;
    symbol: string;
    id: number;
    maxSupply: number;
    price: string;
    currentSupply: number;
    defaultItem: Collection;
    metadata: DropMetadata;
};
export declare type Drops = Drop[];
