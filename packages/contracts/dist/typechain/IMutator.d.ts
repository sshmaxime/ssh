import { ethers, Signer, BigNumber, BigNumberish, PopulatedTransaction, BaseContract, ContractTransaction, Overrides, CallOverrides } from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface IMutatorInterface extends ethers.utils.Interface {
    functions: {
        "ownerOf(uint256)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "ownerOf", values: [BigNumberish]): string;
    decodeFunctionResult(functionFragment: "ownerOf", data: BytesLike): Result;
    events: {};
}
export interface IMutator extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IMutatorInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        ownerOf(arg0: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    ownerOf(arg0: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        ownerOf(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        ownerOf(arg0: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        ownerOf(arg0: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
