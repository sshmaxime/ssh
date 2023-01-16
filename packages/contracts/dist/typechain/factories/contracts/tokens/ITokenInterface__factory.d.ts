import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { ITokenInterface, ITokenInterfaceInterface } from "../../../contracts/tokens/ITokenInterface";
export declare class ITokenInterface__factory {
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
    static createInterface(): ITokenInterfaceInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ITokenInterface;
}
