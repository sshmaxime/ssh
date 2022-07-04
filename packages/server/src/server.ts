import { env } from "process";

import { BigNumber, ethers } from "ethers";
import {
  SSHStore,
  SSHDrop,
  SSHStore__factory,
  SSHDrop__factory,
} from "@sshlabs/contracts/typechain";

import { Drops } from "@sshlabs/typings";

const { parseEther: toEth, formatEther, formatBytes32String } = ethers.utils;

const web3Endpoint = env["web3Endpoint"];

const provider = new ethers.providers.JsonRpcProvider(web3Endpoint);

const SSHStoreAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

export const ContractToCollectionName: { [contractAddress: string]: string } = {
  "0x116aebbad1c8226c80f9f0cb4e255540a0f7afd9": "Sublimes",
  "0x31eaa2e93d7afd237f87f30c0dbd3adeb9934f1b": "Isotile",
  "0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB": "CryptoPunks",
  "0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d": "BAYC",
  "0xd8682bfa6918b0174f287b888e765b9a1b4dc9c3": "The Moon Boyz",
};

export class Server {
  private contracts: {
    SSHStore: SSHStore;
  };

  private db: {
    DROPS: Drops;
  };

  constructor() {
    this.contracts = {
      SSHStore: SSHStore__factory.connect(SSHStoreAddress, provider),
    };

    this.db = {
      DROPS: [],
    };
  }

  private initDb = async () => {
    const dropSupply = await this.contracts.SSHStore.getSupply();
    for (let i = BigNumber.from(0); i.lt(dropSupply); i = i.add(1)) {
      const dropContractAddress = await this.contracts.SSHStore.getDrop(i);
      const dropContract = SSHDrop__factory.connect(dropContractAddress, provider);

      this.db.DROPS.push({
        id: i.toNumber(),
        collections: [],
        type: {
          key: true,
          irl: true,
          threed: true,
        },
        //
        maxSupply: (await dropContract.maxSupply()).toNumber(),
        price: (await dropContract.price()).toString(),
      });
    }
  };

  init = async () => {
    await this.initDb();
  };

  getDropById = (dropId: number) => {
    return this.db.DROPS[dropId];
  };

  getDripsByAddress = async (address: string) => {
    const dropSupply = await this.contracts.SSHStore.getSupply();
    console.log(dropSupply);

    const dripsByDrop: BigNumber[][] = [];
    for (let i = BigNumber.from(0); i.lt(dropSupply); i = i.add(1)) {
      const dropContractAddress = await this.contracts.SSHStore.getDrop(i);
      const dropContract = SSHDrop__factory.connect(dropContractAddress, provider);

      const balanceDripOfAddress = await dropContract.balanceOf(address);
      const addressTokenIds: BigNumber[] = [];
      for (
        let dripIndex = BigNumber.from(0);
        dripIndex.lt(balanceDripOfAddress);
        dripIndex = dripIndex.add(1)
      ) {
        const tokenId = await dropContract.tokenOfOwnerByIndex(address, dripIndex);
        addressTokenIds.push(tokenId);
      }
      dripsByDrop.push(addressTokenIds);
    }

    return dripsByDrop;
  };
}
