import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { ICryptopunks, ICryptopunksInterface } from "../../../../contracts/tokens/CryptopunksInterface.sol/ICryptopunks";
export declare class ICryptopunks__factory {
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
            readonly name: "tokenId";
            readonly type: "uint256";
        }];
        readonly name: "punkIndexToAddress";
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
    static createInterface(): ICryptopunksInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ICryptopunks;
}
