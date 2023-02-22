import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type { CryptopunksInterface, CryptopunksInterfaceInterface } from "../../../../contracts/tokens/CryptopunksInterface.sol/CryptopunksInterface";
type CryptopunksInterfaceConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class CryptopunksInterface__factory extends ContractFactory {
    constructor(...args: CryptopunksInterfaceConstructorParams);
    deploy(token: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<CryptopunksInterface>;
    getDeployTransaction(token: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): CryptopunksInterface;
    connect(signer: Signer): CryptopunksInterface__factory;
    static readonly bytecode = "0x60a060405234801561001057600080fd5b5060405161042c38038061042c83398101604081905261002f91610040565b6001600160a01b0316608052610070565b60006020828403121561005257600080fd5b81516001600160a01b038116811461006957600080fd5b9392505050565b60805161039461009860003960008181609b0152818161013d01526101bc01526103946000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c806306fdde03146100465780636352211e1461006457806395d89b411461008f575b600080fd5b61004e610097565b60405161005b9190610248565b60405180910390f35b61007761007236600461027b565b610124565b6040516001600160a01b03909116815260200161005b565b61004e6101b8565b60607f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166306fdde036040518163ffffffff1660e01b8152600401600060405180830381865afa1580156100f7573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261011f91908101906102aa565b905090565b604051630b02f02d60e31b8152600481018290526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906358178168906024016020604051808303816000875af115801561018e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101b29190610357565b92915050565b60607f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166395d89b416040518163ffffffff1660e01b8152600401600060405180830381865afa1580156100f7573d6000803e3d6000fd5b60005b8381101561023357818101518382015260200161021b565b83811115610242576000848401525b50505050565b6020815260008251806020840152610267816040850160208701610218565b601f01601f19169190910160400192915050565b60006020828403121561028d57600080fd5b5035919050565b634e487b7160e01b600052604160045260246000fd5b6000602082840312156102bc57600080fd5b815167ffffffffffffffff808211156102d457600080fd5b818401915084601f8301126102e857600080fd5b8151818111156102fa576102fa610294565b604051601f8201601f19908116603f0116810190838211818310171561032257610322610294565b8160405282815287602084870101111561033b57600080fd5b61034c836020830160208801610218565b979650505050505050565b60006020828403121561036957600080fd5b81516001600160a01b038116811461038057600080fd5b939250505056fea164736f6c634300080e000a";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "contract ICryptopunks";
            readonly name: "token";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
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
    static createInterface(): CryptopunksInterfaceInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): CryptopunksInterface;
}
export {};