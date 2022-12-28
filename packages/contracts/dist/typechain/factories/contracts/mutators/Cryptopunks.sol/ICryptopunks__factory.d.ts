import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { ICryptopunks, ICryptopunksInterface } from "../../../../contracts/mutators/Cryptopunks.sol/ICryptopunks";
export declare class ICryptopunks__factory {
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
    static createInterface(): ICryptopunksInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ICryptopunks;
}
