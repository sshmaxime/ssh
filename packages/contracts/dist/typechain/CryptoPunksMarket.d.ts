import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface CryptoPunksMarketInterface extends utils.Interface {
    functions: {
        "name()": FunctionFragment;
        "punksOfferedForSale(uint256)": FunctionFragment;
        "enterBidForPunk(uint256)": FunctionFragment;
        "totalSupply()": FunctionFragment;
        "acceptBidForPunk(uint256,uint256)": FunctionFragment;
        "decimals()": FunctionFragment;
        "setInitialOwners(address[],uint256[])": FunctionFragment;
        "withdraw()": FunctionFragment;
        "imageHash()": FunctionFragment;
        "nextPunkIndexToAssign()": FunctionFragment;
        "punkIndexToAddress(uint256)": FunctionFragment;
        "standard()": FunctionFragment;
        "punkBids(uint256)": FunctionFragment;
        "balanceOf(address)": FunctionFragment;
        "allInitialOwnersAssigned()": FunctionFragment;
        "allPunksAssigned()": FunctionFragment;
        "buyPunk(uint256)": FunctionFragment;
        "transferPunk(address,uint256)": FunctionFragment;
        "symbol()": FunctionFragment;
        "withdrawBidForPunk(uint256)": FunctionFragment;
        "setInitialOwner(address,uint256)": FunctionFragment;
        "offerPunkForSaleToAddress(uint256,uint256,address)": FunctionFragment;
        "punksRemainingToAssign()": FunctionFragment;
        "offerPunkForSale(uint256,uint256)": FunctionFragment;
        "getPunk(uint256)": FunctionFragment;
        "pendingWithdrawals(address)": FunctionFragment;
        "punkNoLongerForSale(uint256)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "name", values?: undefined): string;
    encodeFunctionData(functionFragment: "punksOfferedForSale", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "enterBidForPunk", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "totalSupply", values?: undefined): string;
    encodeFunctionData(functionFragment: "acceptBidForPunk", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
    encodeFunctionData(functionFragment: "setInitialOwners", values: [string[], BigNumberish[]]): string;
    encodeFunctionData(functionFragment: "withdraw", values?: undefined): string;
    encodeFunctionData(functionFragment: "imageHash", values?: undefined): string;
    encodeFunctionData(functionFragment: "nextPunkIndexToAssign", values?: undefined): string;
    encodeFunctionData(functionFragment: "punkIndexToAddress", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "standard", values?: undefined): string;
    encodeFunctionData(functionFragment: "punkBids", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "balanceOf", values: [string]): string;
    encodeFunctionData(functionFragment: "allInitialOwnersAssigned", values?: undefined): string;
    encodeFunctionData(functionFragment: "allPunksAssigned", values?: undefined): string;
    encodeFunctionData(functionFragment: "buyPunk", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "transferPunk", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
    encodeFunctionData(functionFragment: "withdrawBidForPunk", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "setInitialOwner", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "offerPunkForSaleToAddress", values: [BigNumberish, BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "punksRemainingToAssign", values?: undefined): string;
    encodeFunctionData(functionFragment: "offerPunkForSale", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getPunk", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "pendingWithdrawals", values: [string]): string;
    encodeFunctionData(functionFragment: "punkNoLongerForSale", values: [BigNumberish]): string;
    decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "punksOfferedForSale", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "enterBidForPunk", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalSupply", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "acceptBidForPunk", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setInitialOwners", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "imageHash", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "nextPunkIndexToAssign", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "punkIndexToAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "standard", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "punkBids", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "allInitialOwnersAssigned", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "allPunksAssigned", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "buyPunk", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferPunk", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawBidForPunk", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setInitialOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "offerPunkForSaleToAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "punksRemainingToAssign", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "offerPunkForSale", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPunk", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pendingWithdrawals", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "punkNoLongerForSale", data: BytesLike): Result;
    events: {
        "Assign(address,uint256)": EventFragment;
        "Transfer(address,address,uint256)": EventFragment;
        "PunkTransfer(address,address,uint256)": EventFragment;
        "PunkOffered(uint256,uint256,address)": EventFragment;
        "PunkBidEntered(uint256,uint256,address)": EventFragment;
        "PunkBidWithdrawn(uint256,uint256,address)": EventFragment;
        "PunkBought(uint256,uint256,address,address)": EventFragment;
        "PunkNoLongerForSale(uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "Assign"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Transfer"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "PunkTransfer"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "PunkOffered"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "PunkBidEntered"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "PunkBidWithdrawn"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "PunkBought"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "PunkNoLongerForSale"): EventFragment;
}
export type AssignEvent = TypedEvent<[
    string,
    BigNumber
], {
    to: string;
    punkIndex: BigNumber;
}>;
export type AssignEventFilter = TypedEventFilter<AssignEvent>;
export type TransferEvent = TypedEvent<[
    string,
    string,
    BigNumber
], {
    from: string;
    to: string;
    value: BigNumber;
}>;
export type TransferEventFilter = TypedEventFilter<TransferEvent>;
export type PunkTransferEvent = TypedEvent<[
    string,
    string,
    BigNumber
], {
    from: string;
    to: string;
    punkIndex: BigNumber;
}>;
export type PunkTransferEventFilter = TypedEventFilter<PunkTransferEvent>;
export type PunkOfferedEvent = TypedEvent<[
    BigNumber,
    BigNumber,
    string
], {
    punkIndex: BigNumber;
    minValue: BigNumber;
    toAddress: string;
}>;
export type PunkOfferedEventFilter = TypedEventFilter<PunkOfferedEvent>;
export type PunkBidEnteredEvent = TypedEvent<[
    BigNumber,
    BigNumber,
    string
], {
    punkIndex: BigNumber;
    value: BigNumber;
    fromAddress: string;
}>;
export type PunkBidEnteredEventFilter = TypedEventFilter<PunkBidEnteredEvent>;
export type PunkBidWithdrawnEvent = TypedEvent<[
    BigNumber,
    BigNumber,
    string
], {
    punkIndex: BigNumber;
    value: BigNumber;
    fromAddress: string;
}>;
export type PunkBidWithdrawnEventFilter = TypedEventFilter<PunkBidWithdrawnEvent>;
export type PunkBoughtEvent = TypedEvent<[
    BigNumber,
    BigNumber,
    string,
    string
], {
    punkIndex: BigNumber;
    value: BigNumber;
    fromAddress: string;
    toAddress: string;
}>;
export type PunkBoughtEventFilter = TypedEventFilter<PunkBoughtEvent>;
export type PunkNoLongerForSaleEvent = TypedEvent<[
    BigNumber
], {
    punkIndex: BigNumber;
}>;
export type PunkNoLongerForSaleEventFilter = TypedEventFilter<PunkNoLongerForSaleEvent>;
export interface CryptoPunksMarket extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: CryptoPunksMarketInterface;
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
        punksOfferedForSale(arg0: BigNumberish, overrides?: CallOverrides): Promise<[
            boolean,
            BigNumber,
            string,
            BigNumber,
            string
        ] & {
            isForSale: boolean;
            punkIndex: BigNumber;
            seller: string;
            minValue: BigNumber;
            onlySellTo: string;
        }>;
        enterBidForPunk(punkIndex: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;
        acceptBidForPunk(punkIndex: BigNumberish, minPrice: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        decimals(overrides?: CallOverrides): Promise<[number]>;
        setInitialOwners(addresses: string[], indices: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        withdraw(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        imageHash(overrides?: CallOverrides): Promise<[string]>;
        nextPunkIndexToAssign(overrides?: CallOverrides): Promise<[BigNumber]>;
        punkIndexToAddress(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        standard(overrides?: CallOverrides): Promise<[string]>;
        punkBids(arg0: BigNumberish, overrides?: CallOverrides): Promise<[
            boolean,
            BigNumber,
            string,
            BigNumber
        ] & {
            hasBid: boolean;
            punkIndex: BigNumber;
            bidder: string;
            value: BigNumber;
        }>;
        balanceOf(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        allInitialOwnersAssigned(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        allPunksAssigned(overrides?: CallOverrides): Promise<[boolean]>;
        buyPunk(punkIndex: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        transferPunk(to: string, punkIndex: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        symbol(overrides?: CallOverrides): Promise<[string]>;
        withdrawBidForPunk(punkIndex: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setInitialOwner(to: string, punkIndex: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        offerPunkForSaleToAddress(punkIndex: BigNumberish, minSalePriceInWei: BigNumberish, toAddress: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        punksRemainingToAssign(overrides?: CallOverrides): Promise<[BigNumber]>;
        offerPunkForSale(punkIndex: BigNumberish, minSalePriceInWei: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        getPunk(punkIndex: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        pendingWithdrawals(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        punkNoLongerForSale(punkIndex: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    name(overrides?: CallOverrides): Promise<string>;
    punksOfferedForSale(arg0: BigNumberish, overrides?: CallOverrides): Promise<[
        boolean,
        BigNumber,
        string,
        BigNumber,
        string
    ] & {
        isForSale: boolean;
        punkIndex: BigNumber;
        seller: string;
        minValue: BigNumber;
        onlySellTo: string;
    }>;
    enterBidForPunk(punkIndex: BigNumberish, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
    acceptBidForPunk(punkIndex: BigNumberish, minPrice: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    decimals(overrides?: CallOverrides): Promise<number>;
    setInitialOwners(addresses: string[], indices: BigNumberish[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    withdraw(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    imageHash(overrides?: CallOverrides): Promise<string>;
    nextPunkIndexToAssign(overrides?: CallOverrides): Promise<BigNumber>;
    punkIndexToAddress(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;
    standard(overrides?: CallOverrides): Promise<string>;
    punkBids(arg0: BigNumberish, overrides?: CallOverrides): Promise<[
        boolean,
        BigNumber,
        string,
        BigNumber
    ] & {
        hasBid: boolean;
        punkIndex: BigNumber;
        bidder: string;
        value: BigNumber;
    }>;
    balanceOf(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
    allInitialOwnersAssigned(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    allPunksAssigned(overrides?: CallOverrides): Promise<boolean>;
    buyPunk(punkIndex: BigNumberish, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    transferPunk(to: string, punkIndex: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    symbol(overrides?: CallOverrides): Promise<string>;
    withdrawBidForPunk(punkIndex: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setInitialOwner(to: string, punkIndex: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    offerPunkForSaleToAddress(punkIndex: BigNumberish, minSalePriceInWei: BigNumberish, toAddress: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    punksRemainingToAssign(overrides?: CallOverrides): Promise<BigNumber>;
    offerPunkForSale(punkIndex: BigNumberish, minSalePriceInWei: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    getPunk(punkIndex: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    pendingWithdrawals(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
    punkNoLongerForSale(punkIndex: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        name(overrides?: CallOverrides): Promise<string>;
        punksOfferedForSale(arg0: BigNumberish, overrides?: CallOverrides): Promise<[
            boolean,
            BigNumber,
            string,
            BigNumber,
            string
        ] & {
            isForSale: boolean;
            punkIndex: BigNumber;
            seller: string;
            minValue: BigNumber;
            onlySellTo: string;
        }>;
        enterBidForPunk(punkIndex: BigNumberish, overrides?: CallOverrides): Promise<void>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        acceptBidForPunk(punkIndex: BigNumberish, minPrice: BigNumberish, overrides?: CallOverrides): Promise<void>;
        decimals(overrides?: CallOverrides): Promise<number>;
        setInitialOwners(addresses: string[], indices: BigNumberish[], overrides?: CallOverrides): Promise<void>;
        withdraw(overrides?: CallOverrides): Promise<void>;
        imageHash(overrides?: CallOverrides): Promise<string>;
        nextPunkIndexToAssign(overrides?: CallOverrides): Promise<BigNumber>;
        punkIndexToAddress(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;
        standard(overrides?: CallOverrides): Promise<string>;
        punkBids(arg0: BigNumberish, overrides?: CallOverrides): Promise<[
            boolean,
            BigNumber,
            string,
            BigNumber
        ] & {
            hasBid: boolean;
            punkIndex: BigNumber;
            bidder: string;
            value: BigNumber;
        }>;
        balanceOf(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        allInitialOwnersAssigned(overrides?: CallOverrides): Promise<void>;
        allPunksAssigned(overrides?: CallOverrides): Promise<boolean>;
        buyPunk(punkIndex: BigNumberish, overrides?: CallOverrides): Promise<void>;
        transferPunk(to: string, punkIndex: BigNumberish, overrides?: CallOverrides): Promise<void>;
        symbol(overrides?: CallOverrides): Promise<string>;
        withdrawBidForPunk(punkIndex: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setInitialOwner(to: string, punkIndex: BigNumberish, overrides?: CallOverrides): Promise<void>;
        offerPunkForSaleToAddress(punkIndex: BigNumberish, minSalePriceInWei: BigNumberish, toAddress: string, overrides?: CallOverrides): Promise<void>;
        punksRemainingToAssign(overrides?: CallOverrides): Promise<BigNumber>;
        offerPunkForSale(punkIndex: BigNumberish, minSalePriceInWei: BigNumberish, overrides?: CallOverrides): Promise<void>;
        getPunk(punkIndex: BigNumberish, overrides?: CallOverrides): Promise<void>;
        pendingWithdrawals(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        punkNoLongerForSale(punkIndex: BigNumberish, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "Assign(address,uint256)"(to?: string | null, punkIndex?: null): AssignEventFilter;
        Assign(to?: string | null, punkIndex?: null): AssignEventFilter;
        "Transfer(address,address,uint256)"(from?: string | null, to?: string | null, value?: null): TransferEventFilter;
        Transfer(from?: string | null, to?: string | null, value?: null): TransferEventFilter;
        "PunkTransfer(address,address,uint256)"(from?: string | null, to?: string | null, punkIndex?: null): PunkTransferEventFilter;
        PunkTransfer(from?: string | null, to?: string | null, punkIndex?: null): PunkTransferEventFilter;
        "PunkOffered(uint256,uint256,address)"(punkIndex?: BigNumberish | null, minValue?: null, toAddress?: string | null): PunkOfferedEventFilter;
        PunkOffered(punkIndex?: BigNumberish | null, minValue?: null, toAddress?: string | null): PunkOfferedEventFilter;
        "PunkBidEntered(uint256,uint256,address)"(punkIndex?: BigNumberish | null, value?: null, fromAddress?: string | null): PunkBidEnteredEventFilter;
        PunkBidEntered(punkIndex?: BigNumberish | null, value?: null, fromAddress?: string | null): PunkBidEnteredEventFilter;
        "PunkBidWithdrawn(uint256,uint256,address)"(punkIndex?: BigNumberish | null, value?: null, fromAddress?: string | null): PunkBidWithdrawnEventFilter;
        PunkBidWithdrawn(punkIndex?: BigNumberish | null, value?: null, fromAddress?: string | null): PunkBidWithdrawnEventFilter;
        "PunkBought(uint256,uint256,address,address)"(punkIndex?: BigNumberish | null, value?: null, fromAddress?: string | null, toAddress?: string | null): PunkBoughtEventFilter;
        PunkBought(punkIndex?: BigNumberish | null, value?: null, fromAddress?: string | null, toAddress?: string | null): PunkBoughtEventFilter;
        "PunkNoLongerForSale(uint256)"(punkIndex?: BigNumberish | null): PunkNoLongerForSaleEventFilter;
        PunkNoLongerForSale(punkIndex?: BigNumberish | null): PunkNoLongerForSaleEventFilter;
    };
    estimateGas: {
        name(overrides?: CallOverrides): Promise<BigNumber>;
        punksOfferedForSale(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        enterBidForPunk(punkIndex: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        acceptBidForPunk(punkIndex: BigNumberish, minPrice: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        decimals(overrides?: CallOverrides): Promise<BigNumber>;
        setInitialOwners(addresses: string[], indices: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        withdraw(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        imageHash(overrides?: CallOverrides): Promise<BigNumber>;
        nextPunkIndexToAssign(overrides?: CallOverrides): Promise<BigNumber>;
        punkIndexToAddress(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        standard(overrides?: CallOverrides): Promise<BigNumber>;
        punkBids(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        balanceOf(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        allInitialOwnersAssigned(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        allPunksAssigned(overrides?: CallOverrides): Promise<BigNumber>;
        buyPunk(punkIndex: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        transferPunk(to: string, punkIndex: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        symbol(overrides?: CallOverrides): Promise<BigNumber>;
        withdrawBidForPunk(punkIndex: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setInitialOwner(to: string, punkIndex: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        offerPunkForSaleToAddress(punkIndex: BigNumberish, minSalePriceInWei: BigNumberish, toAddress: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        punksRemainingToAssign(overrides?: CallOverrides): Promise<BigNumber>;
        offerPunkForSale(punkIndex: BigNumberish, minSalePriceInWei: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        getPunk(punkIndex: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        pendingWithdrawals(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        punkNoLongerForSale(punkIndex: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        name(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        punksOfferedForSale(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        enterBidForPunk(punkIndex: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        acceptBidForPunk(punkIndex: BigNumberish, minPrice: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        decimals(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setInitialOwners(addresses: string[], indices: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        withdraw(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        imageHash(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        nextPunkIndexToAssign(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        punkIndexToAddress(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        standard(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        punkBids(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        balanceOf(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        allInitialOwnersAssigned(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        allPunksAssigned(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        buyPunk(punkIndex: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        transferPunk(to: string, punkIndex: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        withdrawBidForPunk(punkIndex: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setInitialOwner(to: string, punkIndex: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        offerPunkForSaleToAddress(punkIndex: BigNumberish, minSalePriceInWei: BigNumberish, toAddress: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        punksRemainingToAssign(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        offerPunkForSale(punkIndex: BigNumberish, minSalePriceInWei: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        getPunk(punkIndex: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        pendingWithdrawals(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        punkNoLongerForSale(punkIndex: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
