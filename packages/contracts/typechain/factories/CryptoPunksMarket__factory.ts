/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  PayableOverrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  CryptoPunksMarket,
  CryptoPunksMarketInterface,
} from "../CryptoPunksMarket";

const _abi = [
  {
    constant: true,
    inputs: [],
    name: "name",
    outputs: [
      {
        name: "",
        type: "string",
      },
    ],
    payable: false,
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    name: "punksOfferedForSale",
    outputs: [
      {
        name: "isForSale",
        type: "bool",
      },
      {
        name: "punkIndex",
        type: "uint256",
      },
      {
        name: "seller",
        type: "address",
      },
      {
        name: "minValue",
        type: "uint256",
      },
      {
        name: "onlySellTo",
        type: "address",
      },
    ],
    payable: false,
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "punkIndex",
        type: "uint256",
      },
    ],
    name: "enterBidForPunk",
    outputs: [],
    payable: true,
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "punkIndex",
        type: "uint256",
      },
      {
        name: "minPrice",
        type: "uint256",
      },
    ],
    name: "acceptBidForPunk",
    outputs: [],
    payable: false,
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "decimals",
    outputs: [
      {
        name: "",
        type: "uint8",
      },
    ],
    payable: false,
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "addresses",
        type: "address[]",
      },
      {
        name: "indices",
        type: "uint256[]",
      },
    ],
    name: "setInitialOwners",
    outputs: [],
    payable: false,
    type: "function",
  },
  {
    constant: false,
    inputs: [],
    name: "withdraw",
    outputs: [],
    payable: false,
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "imageHash",
    outputs: [
      {
        name: "",
        type: "string",
      },
    ],
    payable: false,
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "nextPunkIndexToAssign",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    name: "punkIndexToAddress",
    outputs: [
      {
        name: "",
        type: "address",
      },
    ],
    payable: false,
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "standard",
    outputs: [
      {
        name: "",
        type: "string",
      },
    ],
    payable: false,
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    name: "punkBids",
    outputs: [
      {
        name: "hasBid",
        type: "bool",
      },
      {
        name: "punkIndex",
        type: "uint256",
      },
      {
        name: "bidder",
        type: "address",
      },
      {
        name: "value",
        type: "uint256",
      },
    ],
    payable: false,
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    type: "function",
  },
  {
    constant: false,
    inputs: [],
    name: "allInitialOwnersAssigned",
    outputs: [],
    payable: false,
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "allPunksAssigned",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "punkIndex",
        type: "uint256",
      },
    ],
    name: "buyPunk",
    outputs: [],
    payable: true,
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "to",
        type: "address",
      },
      {
        name: "punkIndex",
        type: "uint256",
      },
    ],
    name: "transferPunk",
    outputs: [],
    payable: false,
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "symbol",
    outputs: [
      {
        name: "",
        type: "string",
      },
    ],
    payable: false,
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "punkIndex",
        type: "uint256",
      },
    ],
    name: "withdrawBidForPunk",
    outputs: [],
    payable: false,
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "to",
        type: "address",
      },
      {
        name: "punkIndex",
        type: "uint256",
      },
    ],
    name: "setInitialOwner",
    outputs: [],
    payable: false,
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "punkIndex",
        type: "uint256",
      },
      {
        name: "minSalePriceInWei",
        type: "uint256",
      },
      {
        name: "toAddress",
        type: "address",
      },
    ],
    name: "offerPunkForSaleToAddress",
    outputs: [],
    payable: false,
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "punksRemainingToAssign",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "punkIndex",
        type: "uint256",
      },
      {
        name: "minSalePriceInWei",
        type: "uint256",
      },
    ],
    name: "offerPunkForSale",
    outputs: [],
    payable: false,
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "punkIndex",
        type: "uint256",
      },
    ],
    name: "getPunk",
    outputs: [],
    payable: false,
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "",
        type: "address",
      },
    ],
    name: "pendingWithdrawals",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "punkIndex",
        type: "uint256",
      },
    ],
    name: "punkNoLongerForSale",
    outputs: [],
    payable: false,
    type: "function",
  },
  {
    inputs: [],
    payable: true,
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        name: "punkIndex",
        type: "uint256",
      },
    ],
    name: "Assign",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        name: "punkIndex",
        type: "uint256",
      },
    ],
    name: "PunkTransfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "punkIndex",
        type: "uint256",
      },
      {
        indexed: false,
        name: "minValue",
        type: "uint256",
      },
      {
        indexed: true,
        name: "toAddress",
        type: "address",
      },
    ],
    name: "PunkOffered",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "punkIndex",
        type: "uint256",
      },
      {
        indexed: false,
        name: "value",
        type: "uint256",
      },
      {
        indexed: true,
        name: "fromAddress",
        type: "address",
      },
    ],
    name: "PunkBidEntered",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "punkIndex",
        type: "uint256",
      },
      {
        indexed: false,
        name: "value",
        type: "uint256",
      },
      {
        indexed: true,
        name: "fromAddress",
        type: "address",
      },
    ],
    name: "PunkBidWithdrawn",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "punkIndex",
        type: "uint256",
      },
      {
        indexed: false,
        name: "value",
        type: "uint256",
      },
      {
        indexed: true,
        name: "fromAddress",
        type: "address",
      },
      {
        indexed: true,
        name: "toAddress",
        type: "address",
      },
    ],
    name: "PunkBought",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "punkIndex",
        type: "uint256",
      },
    ],
    name: "PunkNoLongerForSale",
    type: "event",
  },
];

const _bytecode =
  "0x60c0604090815260608190527f616333396166343739333131396565343662626666333531643863623662356660809081527f323364613630323232313236616464343236386532363131393961323932316260a05262000064916000919062000186565b5060408051808201909152600b8082527f43727970746f50756e6b730000000000000000000000000000000000000000006020909201918252620000ab9160029162000186565b50600060078190556008805460ff191690556009555b60018054600160a060020a03191633600160a060020a0316179055612710600681905560095560408051808201909152600b8082527f43525950544f50554e4b5300000000000000000000000000000000000000000060209092019182526200012d9160039162000186565b506040805180820190915260028082527fcfbe0000000000000000000000000000000000000000000000000000000000006020909201918252620001749160049162000186565b506005805460ff191690555b62000230565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10620001c957805160ff1916838001178555620001f9565b82800160010185558215620001f9579182015b82811115620001f9578251825591602001919060010190620001dc565b5b50620002089291506200020c565b5090565b6200022d91905b8082111562000208576000815560010162000213565b5090565b90565b611b3980620002406000396000f3006060604052361561015c5763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166306fdde03811461015e578063088f11f3146101ee578063091dbfd21461023a57806318160ddd1461024757806323165b7514610269578063313ce5671461028157806339c5dde6146102a75780633ccfd60b1461033457806351605d801461034657806352f29a25146103d657806358178168146103f85780635a3b7e42146104275780636e743fa9146104b757806370a08231146104fa5780637ecedac9146105285780638126c38a1461053a5780638264fe981461055e5780638b72a2ec1461056b57806395d89b411461058c578063979bc6381461061c578063a75a904914610631578063bf31196f14610652578063c0d6ce6314610676578063c44193c314610698578063c81d1d5b146106b0578063f3f43703146106c5578063f6eeff1e146106f3575bfe5b341561016657fe5b61016e610708565b6040805160208082528351818301528351919283929083019185019080838382156101b4575b8051825260208311156101b457601f199092019160209182019101610194565b505050905090810190601f1680156101e05780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34156101f657fe5b610201600435610796565b6040805195151586526020860194909452600160a060020a03928316858501526060850191909152166080830152519081900360a00190f35b6102456004356107d4565b005b341561024f57fe5b610257610959565b60408051918252519081900360200190f35b341561027157fe5b61024560043560243561095f565b005b341561028957fe5b610291610cbf565b6040805160ff9092168252519081900360200190f35b34156102af57fe5b610245600480803590602001908201803590602001908080602002602001604051908101604052809392919081815260200183836020028082843750506040805187358901803560208181028481018201909552818452989a998901989297509082019550935083925085019084908082843750949650610cc895505050505050565b005b341561033c57fe5b610245610d40565b005b341561034e57fe5b61016e610d9b565b6040805160208082528351818301528351919283929083019185019080838382156101b4575b8051825260208311156101b457601f199092019160209182019101610194565b505050905090810190601f1680156101e05780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34156103de57fe5b610257610e29565b60408051918252519081900360200190f35b341561040057fe5b61040b600435610e2f565b60408051600160a060020a039092168252519081900360200190f35b341561042f57fe5b61016e610e4a565b6040805160208082528351818301528351919283929083019185019080838382156101b4575b8051825260208311156101b457601f199092019160209182019101610194565b505050905090810190601f1680156101e05780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34156104bf57fe5b6104ca600435610ed5565b6040805194151585526020850193909352600160a060020a03909116838301526060830152519081900360800190f35b341561050257fe5b610257600160a060020a0360043516610f0c565b60408051918252519081900360200190f35b341561053057fe5b610245610f1e565b005b341561054257fe5b61054a610f4a565b604080519115158252519081900360200190f35b610245600435610f53565b005b341561057357fe5b610245600160a060020a03600435166024356111c0565b005b341561059457fe5b61016e6113b5565b6040805160208082528351818301528351919283929083019185019080838382156101b4575b8051825260208311156101b457601f199092019160209182019101610194565b505050905090810190601f1680156101e05780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561062457fe5b610245600435611443565b005b341561063957fe5b610245600160a060020a03600435166024356115c6565b005b341561065a57fe5b610245600435602435600160a060020a03604435166116f3565b005b341561067e57fe5b61025761180c565b60408051918252519081900360200190f35b34156106a057fe5b610245600435602435611812565b005b34156106b857fe5b610245600435611927565b005b34156106cd57fe5b610257600160a060020a03600435166119f9565b60408051918252519081900360200190f35b34156106fb57fe5b610245600435611a0b565b005b6003805460408051602060026001851615610100026000190190941693909304601f8101849004840282018401909252818152929183018282801561078e5780601f106107635761010080835404028352916020019161078e565b820191906000526020600020905b81548152906001019060200180831161077157829003601f168201915b505050505081565b600c602052600090815260409020805460018201546002830154600384015460049094015460ff909316939192600160a060020a0391821692911685565b600061271082106107e55760006000fd5b60085460ff1615156107f75760006000fd5b6000828152600a6020526040902054600160a060020a0316151561081b5760006000fd5b6000828152600a602052604090205433600160a060020a03908116911614156108445760006000fd5b3415156108515760006000fd5b506000818152600d60205260409020600381015434116108715760006000fd5b6000816003015411156108a75760038101546002820154600160a060020a03166000908152600e60205260409020805490910190555b604080516080810182526001808252602080830186815233600160a060020a03908116858701818152346060880181815260008c8152600d88528a90209851895460ff191690151517895594519688019690965551600287018054600160a060020a0319169190931617909155905160039094019390935583519182529251919285927f5b859394fabae0c1ba88baffe67e751ab5248d2e879028b8c8d6897b0519f56a9281900390910190a35b5050565b60065481565b6000808061271085106109725760006000fd5b60085460ff1615156109845760006000fd5b6000858152600a602052604090205433600160a060020a039081169116146109ac5760006000fd5b6000858152600d60205260409020600381015433945090925015156109d15760006000fd5b83826003015410156109e35760006000fd5b6002820180546000878152600a602090815260408083208054600160a060020a031916600160a060020a03958616179055878416808452600b83528184208054600019019055855485168452928190208054600190810190915594548151958652905193169391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a360a0604051908101604052806000151581526020018681526020018360020160009054906101000a9004600160a060020a0316600160a060020a03168152602001600081526020016000600160a060020a0316815250600c600087815260200190815260200160002060008201518160000160006101000a81548160ff0219169083151502179055506020820151816001015560408201518160020160006101000a815481600160a060020a030219169083600160a060020a031602179055506060820151816003015560808201518160040160006101000a815481600160a060020a030219169083600160a060020a03160217905550905050816003015490506080604051908101604052806000151581526020018681526020016000600160a060020a031681526020016000815250600d600087815260200190815260200160002060008201518160000160006101000a81548160ff0219169083151502179055506020820151816001015560408201518160020160006101000a815481600160a060020a030219169083600160a060020a031602179055506060820151816003015590505080600e600085600160a060020a0316600160a060020a03168152602001908152602001600020600082825401925050819055508160020160009054906101000a9004600160a060020a0316600160a060020a031683600160a060020a0316867f58e5d5a525e3b40bc15abaa38b5882678db1ee68befd2f60bafe3a7fd06db9e385600301546040518082815260200191505060405180910390a45b5050505050565b60055460ff1681565b600154600090819033600160a060020a03908116911614610ce95760006000fd5b5050815160005b81811015610d3957610d308482815181101515610d0957fe5b906020019060200201518483815181101515610d2157fe5b906020019060200201516115c6565b5b600101610cf0565b5b50505050565b60085460009060ff161515610d555760006000fd5b50600160a060020a0333166000818152600e6020526040808220805490839055905190929183156108fc02918491818181858888f193505050501515610d9757fe5b5b50565b6000805460408051602060026001851615610100026000190190941693909304601f8101849004840282018401909252818152929183018282801561078e5780601f106107635761010080835404028352916020019161078e565b820191906000526020600020905b81548152906001019060200180831161077157829003601f168201915b505050505081565b60075481565b600a60205260009081526040902054600160a060020a031681565b6002805460408051602060018416156101000260001901909316849004601f8101849004840282018401909252818152929183018282801561078e5780601f106107635761010080835404028352916020019161078e565b820191906000526020600020905b81548152906001019060200180831161077157829003601f168201915b505050505081565b600d60205260009081526040902080546001820154600283015460039093015460ff909216929091600160a060020a039091169084565b600b6020526000908152604090205481565b60015433600160a060020a03908116911614610f3a5760006000fd5b6008805460ff191660011790555b565b60085460ff1681565b6008546000908190819060ff161515610f6c5760006000fd5b6000848152600c6020526040902092506127108410610f8b5760006000fd5b825460ff161515610f9c5760006000fd5b6004830154600160a060020a031615801590610fc95750600483015433600160a060020a03908116911614155b15610fd45760006000fd5b8260030154341015610fe65760006000fd5b6000848152600a60205260409020546002840154600160a060020a039081169116146110125760006000fd5b60028301546000858152600a602090815260408083208054600160a060020a031916600160a060020a033381169182179092559416808452600b8352818420805460001901905584845292819020805460019081019091558151908152905192955085927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef929181900390910190a36110aa84611a0b565b600160a060020a038083166000818152600e602090815260409182902080543490810190915582519081529151339094169388927f58e5d5a525e3b40bc15abaa38b5882678db1ee68befd2f60bafe3a7fd06db9e392908290030190a4506000838152600d60205260409020600281015433600160a060020a0390811691161415610d395760038181015433600160a060020a039081166000908152600e60209081526040808320805490950190945583516080810185528281528082018a8152818601848152606083018581528c8652600d909452959093209051815460ff1916901515178155915160018301559251600282018054600160a060020a031916919093161790915590519101555b5b50505050565b60085460009060ff1615156111d55760006000fd5b6000828152600a602052604090205433600160a060020a039081169116146111fd5760006000fd5b612710821061120c5760006000fd5b6000828152600c602052604090205460ff161561122c5761122c82611a0b565b5b6000828152600a602090815260408083208054600160a060020a031916600160a060020a0388811691821790925533909116808552600b845282852080546000190190558185529382902080546001908101909155825190815291519093927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef928290030190a382600160a060020a031633600160a060020a03167f05af636b70da6819000c49f85b21fa82081c632069bb626f30932034099107d8846040518082815260200191505060405180910390a3506000818152600d602052604090206002810154600160a060020a03848116911614156113af57600381810154600160a060020a038581166000908152600e6020908152604080832080549095019094558351608081018552828152808201888152818601848152606083018581528a8652600d909452959093209051815460ff1916901515178155915160018301559251600282018054600160a060020a031916919093161790915590519101555b5b505050565b6004805460408051602060026001851615610100026000190190941693909304601f8101849004840282018401909252818152929183018282801561078e5780601f106107635761010080835404028352916020019161078e565b820191906000526020600020905b81548152906001019060200180831161077157829003601f168201915b505050505081565b60008061271083106114555760006000fd5b60085460ff1615156114675760006000fd5b6000838152600a6020526040902054600160a060020a0316151561148b5760006000fd5b6000838152600a602052604090205433600160a060020a03908116911614156114b45760006000fd5b6000838152600d60205260409020600281015490925033600160a060020a039081169116146114e35760006000fd5b60038201546040805191825251600160a060020a0333169185917f6f30e1ee4d81dcc7a8a478577f65d2ed2edb120565960ac45fe7c50551c879329181900360200190a3506003818101546040805160808101825260008082526020808301888152838501838152606085018481528a8552600d9093528584209451855460ff19169015151785559051600185015551600284018054600160a060020a031916600160a060020a0392831617905590519290950191909155905191923316916108fc84150291849190818181858888f1935050505015156113af57fe5b5b505050565b60015433600160a060020a039081169116146115e25760006000fd5b60085460ff16156115f35760006000fd5b61271081106116025760006000fd5b6000818152600a6020526040902054600160a060020a03838116911614610955576000818152600a6020526040902054600160a060020a031615611671576000818152600a6020908152604080832054600160a060020a03168352600b9091529020805460001901905561167c565b600980546000190190555b6000818152600a602090815260408083208054600160a060020a031916600160a060020a038716908117909155808452600b83529281902080546001019055805184815290517f8a0e37b73a0d9c82e205d4d1a3ff3d0b57ce5f4d7bccf6bac03336dc101cb7ba929181900390910190a25b5b5050565b60085460ff1615156117055760006000fd5b6000838152600a602052604090205433600160a060020a0390811691161461172d5760006000fd5b612710831061173c5760006000fd5b6040805160a0810182526001808252602080830187815233600160a060020a03908116858701908152606086018981528883166080880181815260008d8152600c88528a90209851895460ff19169015151789559451968801969096559051600287018054600160a060020a03199081169285169290921790559051600387015591516004909501805490921694169390931790925582518581529251909286927f3c7b682d5da98001a9b8cbda6c647d2c63d698a4184fd1d55e2ce7b66f5d21eb92918290030190a35b505050565b60095481565b60085460ff1615156118245760006000fd5b6000828152600a602052604090205433600160a060020a0390811691161461184c5760006000fd5b612710821061185b5760006000fd5b6040805160a0810182526001808252602080830186815233600160a060020a03908116858701908152606086018881526000608088018181528b8252600c87528982209851895460ff19169015151789559451968801969096559051600287018054600160a060020a03199081169285169290921790559051600387015591516004909501805490921694169390931790925582518481529251909285927f3c7b682d5da98001a9b8cbda6c647d2c63d698a4184fd1d55e2ce7b66f5d21eb92918290030190a35b5050565b60085460ff1615156119395760006000fd5b60095415156119485760006000fd5b6000818152600a6020526040902054600160a060020a03161561196b5760006000fd5b612710811061197a5760006000fd5b6000818152600a602090815260408083208054600160a060020a03191633600160a060020a0316908117909155808452600b8352928190208054600101905560098054600019019055805184815290517f8a0e37b73a0d9c82e205d4d1a3ff3d0b57ce5f4d7bccf6bac03336dc101cb7ba929181900390910190a25b50565b600e6020526000908152604090205481565b60085460ff161515611a1d5760006000fd5b6000818152600a602052604090205433600160a060020a03908116911614611a455760006000fd5b6127108110611a545760006000fd5b6040805160a08101825260008082526020808301858152600160a060020a033381168587019081526060860185815260808701868152898752600c9095528786209651875490151560ff199091161787559251600187015551600286018054918316600160a060020a03199283161790559151600386015591516004909401805494909216931692909217909155905182917fb0e0a660b4e50f26f0b7ce75c24655fc76cc66e3334a54ff410277229fa10bd491a25b505600a165627a7a723058208c1b23a1ae952f9d16db1d144523ce5cfb871d75e7a6489310bc86b8978c8de10029";

type CryptoPunksMarketConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CryptoPunksMarketConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class CryptoPunksMarket__factory extends ContractFactory {
  constructor(...args: CryptoPunksMarketConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<CryptoPunksMarket> {
    return super.deploy(overrides || {}) as Promise<CryptoPunksMarket>;
  }
  getDeployTransaction(
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): CryptoPunksMarket {
    return super.attach(address) as CryptoPunksMarket;
  }
  connect(signer: Signer): CryptoPunksMarket__factory {
    return super.connect(signer) as CryptoPunksMarket__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CryptoPunksMarketInterface {
    return new utils.Interface(_abi) as CryptoPunksMarketInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CryptoPunksMarket {
    return new Contract(address, _abi, signerOrProvider) as CryptoPunksMarket;
  }
}
