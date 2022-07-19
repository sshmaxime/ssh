import { env } from "process";

import { BigNumber, ethers } from "ethers";
import { SSHStore, SSHDrop, SSHStore__factory, SSHDrop__factory } from "@sshlabs/contracts";

import { DRIP, Drops, getStatus } from "@sshlabs/typings";
import axios from "axios";

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

export class Server {
  SSHStore: SSHStore;

  private db: {
    DROPS: Drops;
  };

  constructor() {
    this.SSHStore = SSHStore__factory.connect(SSHStoreAddress, provider);

    this.db = {
      DROPS: [],
    };
  }

  // init
  init = async () => {
    await this.snapshot();
    await this.initBlockchainListeners();
  };

  private snapshot = async () => {
    const dropSupply = await this.SSHStore.getSupply();

    for (let i = BigNumber.from(0); i.lt(dropSupply); i = i.add(1)) {
      const dropContractAddress = await this.SSHStore.getDrop(i);
      const dropContract = SSHDrop__factory.connect(dropContractAddress, provider);

      this.db.DROPS.push({
        _address: dropContractAddress,
        id: i.toNumber(),
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
    }
  };

  // init blockchain websockets listeners
  private initBlockchainListeners = async () => {
    // New drop is created
    this.SSHStore.on(this.SSHStore.filters.DropCreated(null), async (dropId) => {
      const dropContractAddress = await this.SSHStore.getDrop(dropId);
      const dropContract = SSHDrop__factory.connect(dropContractAddress, provider);

      this.db.DROPS.push({
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
    });
  };
}
