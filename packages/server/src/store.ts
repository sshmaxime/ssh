import { env } from "process";

import { BigNumber, BigNumberish, ethers, Event } from "ethers";
import { SSHStore, SSHDrop, SSHStore__factory, SSHDrop__factory } from "@sshlabs/contracts";

import { DRIP, Drop, Drops, getStatus } from "@sshlabs/typings";
import axios from "axios";
import Server from "./server";

const { parseEther: toEth, formatEther, formatBytes32String } = ethers.utils;

const web3Endpoint = env["web3Endpoint"];

const provider = new ethers.providers.JsonRpcProvider(web3Endpoint);

const SSHStoreAddress = "0x1c9fD50dF7a4f066884b58A05D91e4b55005876A";

export const ContractToCollectionName: { [contractAddress: string]: string } = {
  "0x116aeBbAD1C8226c80f9F0cB4e255540A0F7afD9": "Sublimes",
  "0xD8682bFA6918b0174F287b888e765b9A1b4dc9c3": "The Moon Boyz",
  "0x31eaa2e93d7afd237f87f30c0dbd3adeb9934f1b": "Isotile",
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

    return {
      _address: dropContractAddress,
      id: dropId.toNumber(),
      collections: (await dropContract.whitelist()).map((whitelistAddress) => {
        return {
          name: ContractToCollectionName[whitelistAddress],
          contract: whitelistAddress,
        };
      }),
      price: (await dropContract.price()).toString(),
      maxSupply: (await dropContract.maxSupply()).toNumber(),
      currentSupply: (await dropContract.totalSupply()).toNumber(),
      status: getStatus(await dropContract.status()),
    };
  };

  // init blockchain websockets listeners
  private initBlockchainListeners = async () => {
    // New drop is created
    this.SSHStore.on(this.SSHStore.filters.DropCreated(null), async (dropId) => {
      const dropContractAddress = await this.SSHStore.getDrop(dropId);
      const dropContract = SSHDrop__factory.connect(dropContractAddress, provider);

      this.DROPS.push({
        _address: dropContractAddress,
        id: dropId.toNumber(),
        collections: (await dropContract.whitelist()).map((whitelistAddress) => {
          return {
            name: ContractToCollectionName[whitelistAddress],
            contract: whitelistAddress,
          };
        }),
        price: (await dropContract.price()).toString(),
        maxSupply: (await dropContract.maxSupply()).toNumber(),
        currentSupply: (await dropContract.totalSupply()).toNumber(),
        status: getStatus(await dropContract.status()),
      });
      io.emit("hello", { data: this.getState() });
    });
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

    // event Status
    dropContract.on(dropContract.filters.StatusUpdated(null), async (...args) => {
      const event = args[args.length - 1] as Event;
      if (event.blockNumber <= startBlockNumber) return; // do not react to this event
      // do stuff

      this.DROPS[dropId.toNumber()].status = getStatus(args[0]);
      io.emit("hello", { data: this.getState() });
    });
  };

  getState = () => {
    return this.DROPS;
  };

  getDrop = (dropId: number) => {
    return this.DROPS[dropId];
  };
}

export default new Store();
