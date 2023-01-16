import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../../common";
export interface ICryptopunksInterface extends utils.Interface {
    functions: {
        "name()": FunctionFragment;
        "punkIndexToAddress(uint256)": FunctionFragment;
        "symbol()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "name" | "punkIndexToAddress" | "symbol"): FunctionFragment;
    encodeFunctionData(functionFragment: "name", values?: undefined): string;
    encodeFunctionData(functionFragment: "punkIndexToAddress", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
    decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "punkIndexToAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
    events: {};
}
export interface ICryptopunks extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ICryptopunksInterface;
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
        name(overrides?: CallOverrides): Promise<[string]>;
        punkIndexToAddress(tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        symbol(overrides?: CallOverrides): Promise<[string]>;
    };
    name(overrides?: CallOverrides): Promise<string>;
    punkIndexToAddress(tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    symbol(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        name(overrides?: CallOverrides): Promise<string>;
        punkIndexToAddress(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        symbol(overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        name(overrides?: CallOverrides): Promise<BigNumber>;
        punkIndexToAddress(tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        symbol(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        name(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        punkIndexToAddress(tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
