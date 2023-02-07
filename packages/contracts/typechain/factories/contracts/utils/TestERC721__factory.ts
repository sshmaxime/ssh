/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  TestERC721,
  TestERC721Interface,
} from "../../../contracts/utils/TestERC721";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_symbol",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_price",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Minted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "mint",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "mintTest",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "price",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "tokenByIndex",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "tokenOfOwnerByIndex",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60a06040523480156200001157600080fd5b5060405162001cb738038062001cb78339810160408190526200003491620001e5565b8251839083906200004d90600090602085019062000072565b5080516200006390600190602084019062000072565b50505060805250620002949050565b828054620000809062000258565b90600052602060002090601f016020900481019282620000a45760008555620000ef565b82601f10620000bf57805160ff1916838001178555620000ef565b82800160010185558215620000ef579182015b82811115620000ef578251825591602001919060010190620000d2565b50620000fd92915062000101565b5090565b5b80821115620000fd576000815560010162000102565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200014057600080fd5b81516001600160401b03808211156200015d576200015d62000118565b604051601f8301601f19908116603f0116810190828211818310171562000188576200018862000118565b81604052838152602092508683858801011115620001a557600080fd5b600091505b83821015620001c95785820183015181830184015290820190620001aa565b83821115620001db5760008385830101525b9695505050505050565b600080600060608486031215620001fb57600080fd5b83516001600160401b03808211156200021357600080fd5b62000221878388016200012e565b945060208601519150808211156200023857600080fd5b5062000247868287016200012e565b925050604084015190509250925092565b600181811c908216806200026d57607f821691505b6020821081036200028e57634e487b7160e01b600052602260045260246000fd5b50919050565b608051611a00620002b7600039600081816102d501526105a20152611a006000f3fe6080604052600436106101145760003560e01c80634f6ccce7116100a0578063a035b1fe11610064578063a035b1fe146102c6578063a22cb465146102f9578063b88d4fde14610319578063c87b56dd14610339578063e985e9c51461035957600080fd5b80634f6ccce7146102515780636352211e1461027157806366675aa9146101ca57806370a082311461029157806395d89b41146102b157600080fd5b80631249c58b116100e75780631249c58b146101ca57806318160ddd146101d257806323b872dd146101f15780632f745c591461021157806342842e0e1461023157600080fd5b806301ffc9a71461011957806306fdde031461014e578063081812fc14610170578063095ea7b3146101a8575b600080fd5b34801561012557600080fd5b5061013961013436600461153c565b6103a2565b60405190151581526020015b60405180910390f35b34801561015a57600080fd5b506101636103cd565b60405161014591906115b1565b34801561017c57600080fd5b5061019061018b3660046115c4565b61045f565b6040516001600160a01b039091168152602001610145565b3480156101b457600080fd5b506101c86101c33660046115f9565b610486565b005b6101c86105a0565b3480156101de57600080fd5b506008545b604051908152602001610145565b3480156101fd57600080fd5b506101c861020c366004611623565b610646565b34801561021d57600080fd5b506101e361022c3660046115f9565b610677565b34801561023d57600080fd5b506101c861024c366004611623565b61070d565b34801561025d57600080fd5b506101e361026c3660046115c4565b610728565b34801561027d57600080fd5b5061019061028c3660046115c4565b6107bb565b34801561029d57600080fd5b506101e36102ac36600461165f565b61081b565b3480156102bd57600080fd5b506101636108a1565b3480156102d257600080fd5b507f00000000000000000000000000000000000000000000000000000000000000006101e3565b34801561030557600080fd5b506101c861031436600461167a565b6108b0565b34801561032557600080fd5b506101c86103343660046116cc565b6108bf565b34801561034557600080fd5b506101636103543660046115c4565b6108f7565b34801561036557600080fd5b506101396103743660046117a8565b6001600160a01b03918216600090815260056020908152604080832093909416825291909152205460ff1690565b60006001600160e01b0319821663780e9d6360e01b14806103c757506103c78261096b565b92915050565b6060600080546103dc906117db565b80601f0160208091040260200160405190810160405280929190818152602001828054610408906117db565b80156104555780601f1061042a57610100808354040283529160200191610455565b820191906000526020600020905b81548152906001019060200180831161043857829003601f168201915b5050505050905090565b600061046a826109bb565b506000908152600460205260409020546001600160a01b031690565b6000610491826107bb565b9050806001600160a01b0316836001600160a01b0316036105035760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656044820152603960f91b60648201526084015b60405180910390fd5b336001600160a01b038216148061051f575061051f8133610374565b6105915760405162461bcd60e51b815260206004820152603d60248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60448201527f6b656e206f776e6572206f7220617070726f76656420666f7220616c6c00000060648201526084016104fa565b61059b8383610a1d565b505050565b7f000000000000000000000000000000000000000000000000000000000000000034146106015760405162461bcd60e51b815260206004820152600f60248201526e494e434f52524543545f46554e445360881b60448201526064016104fa565b600061060c60085490565b90506106183382610a8b565b60405181907f176b02bb2d12439ff7a20b59f402cca16c76f50508b13ef3166a600eb719354a90600090a250565b6106503382610aa5565b61066c5760405162461bcd60e51b81526004016104fa90611815565b61059b838383610b24565b60006106828361081b565b82106106e45760405162461bcd60e51b815260206004820152602b60248201527f455243373231456e756d657261626c653a206f776e657220696e646578206f7560448201526a74206f6620626f756e647360a81b60648201526084016104fa565b506001600160a01b03919091166000908152600660209081526040808320938352929052205490565b61059b838383604051806020016040528060008152506108bf565b600061073360085490565b82106107965760405162461bcd60e51b815260206004820152602c60248201527f455243373231456e756d657261626c653a20676c6f62616c20696e646578206f60448201526b7574206f6620626f756e647360a01b60648201526084016104fa565b600882815481106107a9576107a9611862565b90600052602060002001549050919050565b6000818152600260205260408120546001600160a01b0316806103c75760405162461bcd60e51b8152602060048201526018602482015277115490cdcc8c4e881a5b9d985b1a59081d1bdad95b88125160421b60448201526064016104fa565b60006001600160a01b0382166108855760405162461bcd60e51b815260206004820152602960248201527f4552433732313a2061646472657373207a65726f206973206e6f7420612076616044820152683634b21037bbb732b960b91b60648201526084016104fa565b506001600160a01b031660009081526003602052604090205490565b6060600180546103dc906117db565b6108bb338383610c95565b5050565b6108c93383610aa5565b6108e55760405162461bcd60e51b81526004016104fa90611815565b6108f184848484610d63565b50505050565b6060610902826109bb565b600061091960408051602081019091526000815290565b905060008151116109395760405180602001604052806000815250610964565b8061094384610d96565b604051602001610954929190611878565b6040516020818303038152906040525b9392505050565b60006001600160e01b031982166380ac58cd60e01b148061099c57506001600160e01b03198216635b5e139f60e01b145b806103c757506301ffc9a760e01b6001600160e01b03198316146103c7565b6000818152600260205260409020546001600160a01b0316610a1a5760405162461bcd60e51b8152602060048201526018602482015277115490cdcc8c4e881a5b9d985b1a59081d1bdad95b88125160421b60448201526064016104fa565b50565b600081815260046020526040902080546001600160a01b0319166001600160a01b0384169081179091558190610a52826107bb565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6108bb828260405180602001604052806000815250610e29565b600080610ab1836107bb565b9050806001600160a01b0316846001600160a01b03161480610af857506001600160a01b0380821660009081526005602090815260408083209388168352929052205460ff165b80610b1c5750836001600160a01b0316610b118461045f565b6001600160a01b0316145b949350505050565b826001600160a01b0316610b37826107bb565b6001600160a01b031614610b5d5760405162461bcd60e51b81526004016104fa906118a7565b6001600160a01b038216610bbf5760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b60648201526084016104fa565b610bcc8383836001610e5c565b826001600160a01b0316610bdf826107bb565b6001600160a01b031614610c055760405162461bcd60e51b81526004016104fa906118a7565b600081815260046020908152604080832080546001600160a01b03199081169091556001600160a01b0387811680865260038552838620805460001901905590871680865283862080546001019055868652600290945282852080549092168417909155905184937fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b816001600160a01b0316836001600160a01b031603610cf65760405162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c65720000000000000060448201526064016104fa565b6001600160a01b03838116600081815260056020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b610d6e848484610b24565b610d7a84848484610f9c565b6108f15760405162461bcd60e51b81526004016104fa906118ec565b60606000610da38361109d565b600101905060008167ffffffffffffffff811115610dc357610dc36116b6565b6040519080825280601f01601f191660200182016040528015610ded576020820181803683370190505b5090508181016020015b600019016f181899199a1a9b1b9c1cb0b131b232b360811b600a86061a8153600a8504945084610df757509392505050565b610e338383611175565b610e406000848484610f9c565b61059b5760405162461bcd60e51b81526004016104fa906118ec565b610e688484848461130e565b6001811115610ed75760405162461bcd60e51b815260206004820152603560248201527f455243373231456e756d657261626c653a20636f6e7365637574697665207472604482015274185b9cd9995c9cc81b9bdd081cdd5c1c1bdc9d1959605a1b60648201526084016104fa565b816001600160a01b038516610f3357610f2e81600880546000838152600960205260408120829055600182018355919091527ff3f7a9fe364faab93b216da50a3214154f22a0a2b415b23a84c8169e8b636ee30155565b610f56565b836001600160a01b0316856001600160a01b031614610f5657610f568582611396565b6001600160a01b038416610f7257610f6d81611433565b610f95565b846001600160a01b0316846001600160a01b031614610f9557610f9584826114e2565b5050505050565b60006001600160a01b0384163b1561109257604051630a85bd0160e11b81526001600160a01b0385169063150b7a0290610fe090339089908890889060040161193e565b6020604051808303816000875af192505050801561101b575060408051601f3d908101601f191682019092526110189181019061197b565b60015b611078573d808015611049576040519150601f19603f3d011682016040523d82523d6000602084013e61104e565b606091505b5080516000036110705760405162461bcd60e51b81526004016104fa906118ec565b805181602001fd5b6001600160e01b031916630a85bd0160e11b149050610b1c565b506001949350505050565b60008072184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b83106110dc5772184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b830492506040015b6d04ee2d6d415b85acef81000000008310611108576d04ee2d6d415b85acef8100000000830492506020015b662386f26fc10000831061112657662386f26fc10000830492506010015b6305f5e100831061113e576305f5e100830492506008015b612710831061115257612710830492506004015b60648310611164576064830492506002015b600a83106103c75760010192915050565b6001600160a01b0382166111cb5760405162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f206164647265737360448201526064016104fa565b6000818152600260205260409020546001600160a01b0316156112305760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e7465640000000060448201526064016104fa565b61123e600083836001610e5c565b6000818152600260205260409020546001600160a01b0316156112a35760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e7465640000000060448201526064016104fa565b6001600160a01b038216600081815260036020908152604080832080546001019055848352600290915280822080546001600160a01b0319168417905551839291907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b60018111156108f1576001600160a01b03841615611354576001600160a01b0384166000908152600360205260408120805483929061134e9084906119ae565b90915550505b6001600160a01b038316156108f1576001600160a01b0383166000908152600360205260408120805483929061138b9084906119c5565b909155505050505050565b600060016113a38461081b565b6113ad91906119ae565b600083815260076020526040902054909150808214611400576001600160a01b03841660009081526006602090815260408083208584528252808320548484528184208190558352600790915290208190555b5060009182526007602090815260408084208490556001600160a01b039094168352600681528383209183525290812055565b600854600090611445906001906119ae565b6000838152600960205260408120546008805493945090928490811061146d5761146d611862565b90600052602060002001549050806008838154811061148e5761148e611862565b60009182526020808320909101929092558281526009909152604080822084905585825281205560088054806114c6576114c66119dd565b6001900381819060005260206000200160009055905550505050565b60006114ed8361081b565b6001600160a01b039093166000908152600660209081526040808320868452825280832085905593825260079052919091209190915550565b6001600160e01b031981168114610a1a57600080fd5b60006020828403121561154e57600080fd5b813561096481611526565b60005b8381101561157457818101518382015260200161155c565b838111156108f15750506000910152565b6000815180845261159d816020860160208601611559565b601f01601f19169290920160200192915050565b6020815260006109646020830184611585565b6000602082840312156115d657600080fd5b5035919050565b80356001600160a01b03811681146115f457600080fd5b919050565b6000806040838503121561160c57600080fd5b611615836115dd565b946020939093013593505050565b60008060006060848603121561163857600080fd5b611641846115dd565b925061164f602085016115dd565b9150604084013590509250925092565b60006020828403121561167157600080fd5b610964826115dd565b6000806040838503121561168d57600080fd5b611696836115dd565b9150602083013580151581146116ab57600080fd5b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b600080600080608085870312156116e257600080fd5b6116eb856115dd565b93506116f9602086016115dd565b925060408501359150606085013567ffffffffffffffff8082111561171d57600080fd5b818701915087601f83011261173157600080fd5b813581811115611743576117436116b6565b604051601f8201601f19908116603f0116810190838211818310171561176b5761176b6116b6565b816040528281528a602084870101111561178457600080fd5b82602086016020830137600060208483010152809550505050505092959194509250565b600080604083850312156117bb57600080fd5b6117c4836115dd565b91506117d2602084016115dd565b90509250929050565b600181811c908216806117ef57607f821691505b60208210810361180f57634e487b7160e01b600052602260045260246000fd5b50919050565b6020808252602d908201527f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560408201526c1c881bdc88185c1c1c9bdd9959609a1b606082015260800190565b634e487b7160e01b600052603260045260246000fd5b6000835161188a818460208801611559565b83519083019061189e818360208801611559565b01949350505050565b60208082526025908201527f4552433732313a207472616e736665722066726f6d20696e636f72726563742060408201526437bbb732b960d91b606082015260800190565b60208082526032908201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606082015260800190565b6001600160a01b038581168252841660208201526040810183905260806060820181905260009061197190830184611585565b9695505050505050565b60006020828403121561198d57600080fd5b815161096481611526565b634e487b7160e01b600052601160045260246000fd5b6000828210156119c0576119c0611998565b500390565b600082198211156119d8576119d8611998565b500190565b634e487b7160e01b600052603160045260246000fdfea164736f6c634300080e000a";

type TestERC721ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TestERC721ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TestERC721__factory extends ContractFactory {
  constructor(...args: TestERC721ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _name: PromiseOrValue<string>,
    _symbol: PromiseOrValue<string>,
    _price: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<TestERC721> {
    return super.deploy(
      _name,
      _symbol,
      _price,
      overrides || {}
    ) as Promise<TestERC721>;
  }
  override getDeployTransaction(
    _name: PromiseOrValue<string>,
    _symbol: PromiseOrValue<string>,
    _price: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_name, _symbol, _price, overrides || {});
  }
  override attach(address: string): TestERC721 {
    return super.attach(address) as TestERC721;
  }
  override connect(signer: Signer): TestERC721__factory {
    return super.connect(signer) as TestERC721__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TestERC721Interface {
    return new utils.Interface(_abi) as TestERC721Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TestERC721 {
    return new Contract(address, _abi, signerOrProvider) as TestERC721;
  }
}
