export declare enum DripStatus {
    VIRGIN = 0,
    MUTATED = 1
}
export declare type Drips = Drip[];
export declare type Drip = {
    drop: Drop;
    id: number;
    version: number;
    img: string;
    status: DripStatus;
    nft?: NFT;
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
export declare type Drops = Drop[];
export declare type Drop = {
    address: string;
    symbol: string;
    id: number;
    maxSupply: number;
    price: string;
    currentSupply: number;
    defaultItem: Collection;
    metadata: DropMetadata;
};
export declare type NFTsByCollection = {
    collectionName: string;
    collectionSymbol: string;
    assets: NFTs;
}[];
export declare type NFTs = NFT[];
export declare type NFT = {
    address: string;
    name: string;
    symbol: string;
    img: string;
    id: number;
};
export declare type Collection = {
    address: string;
    name: string;
    symbol: string;
    img: string;
    price: string;
};
export declare type VersionMetadata = {
    imgUrl: string;
    versionColor: string;
    versionName: string;
};
export declare const ListMockTokens: {
    [name: string]: {
        contract: string;
        owner: string;
        tokens: {
            [tokenId: number]: string;
        };
    };
};
