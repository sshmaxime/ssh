import { env } from "process";

import { BigNumber, BigNumberish, ethers, Event } from "ethers";
import {
  SSHStore,
  SSHDrop,
  SSHStore__factory,
  SSHDrop__factory,
  ERC721Enumerable__factory,
} from "@sshlabs/contracts";

import {
  DRIP,
  DripsOwned,
  Drop,
  DropMetadata,
  Drops,
  NFTs,
  VersionMetadata,
} from "@sshlabs/typings";
import axios from "axios";
import Server, { IPFS_GATEWAY } from "./server";

const { parseEther: toEth, formatEther, formatBytes32String } = ethers.utils;

const web3Endpoint = env["web3Endpoint"];

const provider = new ethers.providers.JsonRpcProvider(web3Endpoint);

const SSHStoreAddress = "0x248e0ea2e484d0372470f5b70415c31dbba37fe9";

const IPFS_EXP = "ipfs://";

export const ContractToCollectionName: { [contractAddress: string]: string } = {
  "0x116aeBbAD1C8226c80f9F0cB4e255540A0F7afD9": "Sublimes",
  "0xD8682bFA6918b0174F287b888e765b9A1b4dc9c3": "The Moon Boyz",
  "0xc3f733ca98E0daD0386979Eb96fb1722A1A05E69": "MoonCats",
  "0x31eAa2E93D7AFd237F87F30c0Dbd3aDEB9934f1B": "Isotile",
  "0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB": "CryptoPunks",
  "0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d": "BAYC",
};

const { server, io, app } = Server.get();

export class Store {
  private SSHStore: SSHStore;

  private DROPS: Drops;

  constructor() {
    this.SSHStore = SSHStore__factory.connect(SSHStoreAddress, provider);

    this.DROPS = [];
  }

  // init
  init = async () => {
    await this.snapshot();
    // await this.initBlockchainListeners();
    await this.initDropsListeners();
  };

  private snapshot = async () => {
    const dropSupply = await this.SSHStore.getSupply();

    for (let i = BigNumber.from(0); i.lt(dropSupply); i = i.add(1)) {
      const drop = await this.snapshotDrop(i);
      this.DROPS.push(drop);
    }
  };

  private snapshotDrop = async (dropId: BigNumber): Promise<Drop> => {
    const dropContractAddress = await this.SSHStore.getDrop(dropId);
    const dropContract = SSHDrop__factory.connect(dropContractAddress, provider);

    const metadataUrl = (await dropContract.dropURI()).replace(IPFS_EXP, IPFS_GATEWAY);
    const metadata = (await axios.get(metadataUrl)).data as DropMetadata;

    return {
      _address: dropContractAddress,
      id: dropId.toNumber(),
      symbol: await dropContract.symbol(),
      price: (await dropContract.price()).toString(),
      maxSupply: (await dropContract.maxSupply()).toNumber(),
      currentSupply: (await dropContract.totalSupply()).toNumber(),
      metadata: metadata,
    };
  };

  getOnChainAsset = async (addressContract: string, address: string) => {
    const contract = ERC721Enumerable__factory.connect(addressContract, provider);

    const nbAssets = (await contract.balanceOf(address)).toNumber();
    const NFTs: NFTs = [];

    for (let nb = 0; nb < nbAssets; nb++) {
      const tokenId = (await contract.tokenOfOwnerByIndex(address, nb)).toNumber();

      const a = await axios.get("https://picsum.photos/1000?grayscale");

      NFTs.push({
        contract: addressContract,
        img: a.request.res.req._redirectable._currentUrl,
        id: tokenId,
        name: await contract.name(),
        symbol: await contract.symbol(),
      });
    }
    return NFTs;
  };

  private initDropsListeners = async () => {
    const dropSupply = await this.SSHStore.getSupply();

    for (let i = BigNumber.from(0); i.lt(dropSupply); i = i.add(1)) {
      await this.initDropListeners(i);
    }
  };

  private initDropListeners = async (dropId: BigNumber) => {
    const startBlockNumber = await provider.getBlockNumber();

    const dropContractAddress = await this.SSHStore.getDrop(dropId);
    const dropContract = SSHDrop__factory.connect(dropContractAddress, provider);

    // event Mint
    dropContract.on(dropContract.filters.Minted(null), async (...args) => {
      const event = args[args.length - 1] as Event;
      if (event.blockNumber <= startBlockNumber) return; // do not react to this event
      // do stuff

      this.DROPS[dropId.toNumber()].currentSupply++;
      io.emit("hello", { data: this.getState() });
    });
  };

  getState = () => {
    return this.DROPS;
  };

  getDrop = (dropId: number) => {
    return this.DROPS[dropId];
  };

  getDrip = async (dropId: number, tokenId: number): Promise<DRIP> => {
    const dropContractAddress = await this.SSHStore.getDrop(dropId);
    const dropContract = SSHDrop__factory.connect(dropContractAddress, provider);
    const drip = await dropContract.getDropItem(tokenId);

    const a = await axios.get("https://picsum.photos/1000?grayscale");

    return {
      dropId: (await dropContract.dropId()).toNumber(),
      collectionName: await dropContract.symbol(),
      isMutable: drip.isMutable,
      versionId: drip.versionId.toNumber(),
      contract: dropContract.address,
      img: a.request.res.req._redirectable._currentUrl, // TODO
      id: tokenId,
    };
  };

  getDripOwnedByAddress = async (address: string) => {
    const dropSupply = (await this.SSHStore.getSupply()).toNumber();

    const dripsByAddress: DRIP[] = [];
    for (let i = 0; i < dropSupply; i++) {
      const dropContractAddress = await this.SSHStore.getDrop(i);
      const dropContract = SSHDrop__factory.connect(dropContractAddress, provider);

      const balanceDripOfAddress = (await dropContract.balanceOf(address)).toNumber();
      const addressTokenIds: number[] = [];
      for (let dripIndex = 0; dripIndex < balanceDripOfAddress; dripIndex++) {
        const tokenId = (await dropContract.tokenOfOwnerByIndex(address, dripIndex)).toNumber();
        const drip = await dropContract.getDropItem(tokenId);

        const tokenURI = await dropContract.tokenURI(tokenId);

        dripsByAddress.push({
          dropId: (await dropContract.dropId()).toNumber(),
          isMutable: drip.isMutable,
          collectionName: await dropContract.symbol(),
          versionId: drip.versionId.toNumber(),
          contract: dropContract.address,
          img: "https://via.placeholder.com/150", // TODO
          id: tokenId,
        });
        addressTokenIds.push(tokenId);
      }
    }
    return dripsByAddress;
  };
}

export default new Store();
