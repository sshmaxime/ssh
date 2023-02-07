import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { ITokenInterface, ITokenInterfaceInterface } from "../../../contracts/tokens/ITokenInterface";
export declare class ITokenInterface__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "name";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly name: "ownerOf";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "symbol";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): ITokenInterfaceInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ITokenInterface;
}
