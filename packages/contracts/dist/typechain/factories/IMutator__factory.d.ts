import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IMutator, IMutatorInterface } from "../IMutator";
export declare class IMutator__factory {
    static readonly abi: {
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
    }[];
    static createInterface(): IMutatorInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IMutator;
}
