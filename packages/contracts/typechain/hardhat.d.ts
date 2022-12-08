/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomiclabs/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "Ownable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Ownable__factory>;
    getContractFactory(
      name: "ERC721",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721__factory>;
    getContractFactory(
      name: "ERC721Enumerable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721Enumerable__factory>;
    getContractFactory(
      name: "IERC721Enumerable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721Enumerable__factory>;
    getContractFactory(
      name: "IERC721Metadata",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721Metadata__factory>;
    getContractFactory(
      name: "IERC721",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721__factory>;
    getContractFactory(
      name: "IERC721Receiver",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721Receiver__factory>;
    getContractFactory(
      name: "ERC165",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC165__factory>;
    getContractFactory(
      name: "IERC165",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC165__factory>;
    getContractFactory(
      name: "Drop",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Drop__factory>;
    getContractFactory(
      name: "CryptopunksMutator",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.CryptopunksMutator__factory>;
    getContractFactory(
      name: "ICryptopunks",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ICryptopunks__factory>;
    getContractFactory(
      name: "IMutator",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IMutator__factory>;
    getContractFactory(
      name: "CryptoPunksMarket",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.CryptoPunksMarket__factory>;
    getContractFactory(
      name: "Store",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Store__factory>;
    getContractFactory(
      name: "ITestERC721",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ITestERC721__factory>;
    getContractFactory(
      name: "TestERC721",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TestERC721__factory>;

    getContractAt(
      name: "Ownable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Ownable>;
    getContractAt(
      name: "ERC721",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC721>;
    getContractAt(
      name: "ERC721Enumerable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC721Enumerable>;
    getContractAt(
      name: "IERC721Enumerable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721Enumerable>;
    getContractAt(
      name: "IERC721Metadata",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721Metadata>;
    getContractAt(
      name: "IERC721",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721>;
    getContractAt(
      name: "IERC721Receiver",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721Receiver>;
    getContractAt(
      name: "ERC165",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC165>;
    getContractAt(
      name: "IERC165",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC165>;
    getContractAt(
      name: "Drop",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Drop>;
    getContractAt(
      name: "CryptopunksMutator",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.CryptopunksMutator>;
    getContractAt(
      name: "ICryptopunks",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ICryptopunks>;
    getContractAt(
      name: "IMutator",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IMutator>;
    getContractAt(
      name: "CryptoPunksMarket",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.CryptoPunksMarket>;
    getContractAt(
      name: "Store",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Store>;
    getContractAt(
      name: "ITestERC721",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ITestERC721>;
    getContractAt(
      name: "TestERC721",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.TestERC721>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
  }
}
