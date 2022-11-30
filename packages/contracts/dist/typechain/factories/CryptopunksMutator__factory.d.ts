import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { CryptopunksMutator, CryptopunksMutatorInterface } from "../CryptopunksMutator";
type CryptopunksMutatorConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class CryptopunksMutator__factory extends ContractFactory {
    constructor(...args: CryptopunksMutatorConstructorParams);
    deploy(_mutator: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<CryptopunksMutator>;
    getDeployTransaction(_mutator: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): CryptopunksMutator;
    connect(signer: Signer): CryptopunksMutator__factory;
    static readonly bytecode = "0x60a060405234801561001057600080fd5b506040516101d33803806101d383398101604081905261002f91610040565b6001600160a01b0316608052610070565b60006020828403121561005257600080fd5b81516001600160a01b038116811461006957600080fd5b9392505050565b60805161014961008a6000396000607801526101496000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c80636352211e14610030575b600080fd5b61004361003e3660046100f3565b61005f565b6040516001600160a01b03909116815260200160405180910390f35b604051630b02f02d60e31b8152600481018290526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906358178168906024016020604051808303816000875af11580156100c9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906100ed919061010c565b92915050565b60006020828403121561010557600080fd5b5035919050565b60006020828403121561011e57600080fd5b81516001600160a01b038116811461013557600080fd5b939250505056fea164736f6c634300080e000a";
    static readonly abi: ({
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        name?: undefined;
        outputs?: undefined;
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
    })[];
    static createInterface(): CryptopunksMutatorInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): CryptopunksMutator;
}
export {};
