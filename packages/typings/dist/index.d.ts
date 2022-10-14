export declare type NFT = {
    contract: string;
    img: string;
    id: number;
    name: string;
};
export declare type DRIP = {
    dropId: number;
    isMutable: boolean;
    collectionName: string;
    versionId: number;
    contract: string;
    img: string;
    id: number;
};
export declare type VersionMetadata = {
    imgUrl: string;
    versionColor: string;
    versionName: string;
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
    versions: VersionMetadata[];
    currentSupply: number;
};
export declare type Drops = Drop[];
