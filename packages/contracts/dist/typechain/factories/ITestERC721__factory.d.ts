import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { ITestERC721, ITestERC721Interface } from "../ITestERC721";
export declare class ITestERC721__factory {
    static readonly abi: ({
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        outputs?: undefined;
        stateMutability?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[];
    static createInterface(): ITestERC721Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): ITestERC721;
}
