//////////////////
////// DRIP //////
//////////////////
export enum DripStatus {
  VIRGIN,
  MUTATED,
}

export type Drips = Drip[];
export type Drip = {
  drop: Drop;
  //
  id: number;
  version: number;
  img: string;
  status: DripStatus;
  nft?: NFT;
};

//////////////////
////// DROP //////
//////////////////
export type DropMetadata = {
  id: number;
  model: string;
  versions: { id: number; texture: string; color: string; name: string }[];
};

export type Drops = Drop[];
export type Drop = {
  address: string;
  symbol: string;
  id: number;
  maxSupply: number;
  price: string; // wei
  currentSupply: number;
  defaultItem: Collection;
  metadata: DropMetadata;
};

//////////////////
////// NFT ///////
//////////////////
export type NFTsByCollection = { collectionName: string; collectionSymbol: string; assets: NFTs }[];
export type NFTs = NFT[];
export type NFT = {
  address: string;
  name: string;
  symbol: string;
  img: string;
  id: number;
};

//////////////////
/// COLLECTION ///
//////////////////
export type Collection = {
  address: string;
  name: string;
  symbol: string;
  img: string;
  price: string;
};

/////////////////////
/// MISCELLANEOUS ///
/////////////////////
export type VersionMetadata = {
  imgUrl: string;
  versionColor: string;
  versionName: string;
};

////////////////////////////////
////////////////////////////////
////////////////////////////////
////////////////////////////////
////////////////////////////////
////////////////////////////////
////////////////////////////////

export const ListMockTokens: {
  [name: string]: { contract: string; owner: string; tokens: { [tokenId: number]: string } };
} = {
  BoredApe: {
    contract: "0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D",
    owner: "0x619866736a3a101f65cff3a8c3d2602fc54fd749",
    tokens: {
      6456: "https://i.seadn.io/gae/VjYrhHKMV4Z9nGGaHNf0Vr_uO4SMshGsztA3npPCFsSRXGbuebFzwfzcCyV-B-Glss79ZOVUaRSphDoXRHNeyYzVCM2hUgCmy-KuHA?auto=format&w=1920",
      8663: "https://i.seadn.io/gae/SAAmJf3JGObZ_uEmCgCchDk2IZ8FYli6zRqO3e_LL_JX0_OR0ibCXwzWv_tVprDprxMi3BUEbmXnC_5plYPHGVEVau6-XjESHtkC3f4?auto=format&w=1920",
      6982: "https://i.seadn.io/gae/epmnGIc5w5oxtCgkk_MUMwuLEXpY-NwTLgSPY-KpBj3r9zmPvc8jmkmbehhLVR--7C7_NDjdCeXyq7otwZVifhujvtv696pUbGANUw?auto=format&w=1920",
      9045: "https://i.seadn.io/gae/83J0ek078NQTeYSIezXZD9y0bHJV7HDl2zzitJ-1kQP2lxSc1lLIfkkrhT2seZRwdeXMOS829uV_wsgb7BxvE0xkiDsYZlz49WcF?auto=format&w=1920",
      1685: "https://i.seadn.io/gae/B8bbk6WddXZcwsC4DH9_2uBTbBvCEt0vk1sMCJ-p4VpEAs3nfE_2JYGrNswkdjAE2lVscJaiuCiM1jcp5Jo_Uepw4OWfC7vgFsijxNA?auto=format&w=1920",
      5864: "https://i.seadn.io/gae/hu2tg1qF-mD9ygly2h-PmbVJQ_7aosbXfWeJDbW9A4EKBt4EdfTI10USkNiYUd5t1Zky0z08KQzef6q-7Lud_Cin6iXbQDg-7H9U3g?auto=format&w=1920",
      102: "https://i.seadn.io/gae/JWZCZ1Nvwyc2wC1XJn0GrGrFLsFcYPyvgRRkIcoCENAH5xc1M_8yS6iAhc-3dL6dylU1rmw3-0elnGMnp8xWzkRKpi1sItceXTEC7Q?auto=format&w=1920",
      4096: "https://i.seadn.io/gae/IIott-uCMFrlaWKH7Tv597PLGStKcdkXX70IJIOt0nionfUW0cXk6rhuJvYKTyKostZWP65MSDtZ6nBpgin5NO3rYfxysNQpPUeBrik?auto=format&w=1920",
      8872: "https://i.seadn.io/gae/hcot2XZ7qiJW-i7waSSBeRfuJzuM25g8GGGgVLRqNHIrwJO1_QCcHxyIHjlGq_M_mqyX_imzpdo1IV1joPvjIEWuYRk2Azw8BRTXZuA?auto=format&w=1920",
      6268: "https://i.seadn.io/gae/_A40t3HLol1_8UYkAnKGCpkwe4uf3VZClYUesYjecSyB4wLexPCLcpol-jlZJa2fqEVMAJ3CIWSWhETdQWhYCp5taj15iZZYMLKRZQ?auto=format&w=1920",
    },
  },
};
