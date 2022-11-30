/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { TestERC721, TestERC721Interface } from "../TestERC721";

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
    stateMutability: "pure",
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
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162001c5c38038062001c5c8339810160408190526200003491620001e1565b8151829082906200004d9060009060208501906200006e565b508051620000639060019060208401906200006e565b505050505062000287565b8280546200007c906200024b565b90600052602060002090601f016020900481019282620000a05760008555620000eb565b82601f10620000bb57805160ff1916838001178555620000eb565b82800160010185558215620000eb579182015b82811115620000eb578251825591602001919060010190620000ce565b50620000f9929150620000fd565b5090565b5b80821115620000f95760008155600101620000fe565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200013c57600080fd5b81516001600160401b038082111562000159576200015962000114565b604051601f8301601f19908116603f0116810190828211818310171562000184576200018462000114565b81604052838152602092508683858801011115620001a157600080fd5b600091505b83821015620001c55785820183015181830184015290820190620001a6565b83821115620001d75760008385830101525b9695505050505050565b60008060408385031215620001f557600080fd5b82516001600160401b03808211156200020d57600080fd5b6200021b868387016200012a565b935060208501519150808211156200023257600080fd5b5062000241858286016200012a565b9150509250929050565b600181811c908216806200026057607f821691505b6020821081036200028157634e487b7160e01b600052602260045260246000fd5b50919050565b6119c580620002976000396000f3fe6080604052600436106101095760003560e01c80634f6ccce711610095578063a035b1fe11610064578063a035b1fe146102bb578063a22cb465146102d6578063b88d4fde146102f6578063c87b56dd14610316578063e985e9c51461033657600080fd5b80634f6ccce7146102465780636352211e1461026657806370a082311461028657806395d89b41146102a657600080fd5b80631249c58b116100dc5780631249c58b146101bf57806318160ddd146101c757806323b872dd146101e65780632f745c591461020657806342842e0e1461022657600080fd5b806301ffc9a71461010e57806306fdde0314610143578063081812fc14610165578063095ea7b31461019d575b600080fd5b34801561011a57600080fd5b5061012e610129366004611501565b61037f565b60405190151581526020015b60405180910390f35b34801561014f57600080fd5b506101586103aa565b60405161013a9190611576565b34801561017157600080fd5b50610185610180366004611589565b61043c565b6040516001600160a01b03909116815260200161013a565b3480156101a957600080fd5b506101bd6101b83660046115be565b610463565b005b6101bd61057d565b3480156101d357600080fd5b506008545b60405190815260200161013a565b3480156101f257600080fd5b506101bd6102013660046115e8565b61060b565b34801561021257600080fd5b506101d86102213660046115be565b61063c565b34801561023257600080fd5b506101bd6102413660046115e8565b6106d2565b34801561025257600080fd5b506101d8610261366004611589565b6106ed565b34801561027257600080fd5b50610185610281366004611589565b610780565b34801561029257600080fd5b506101d86102a1366004611624565b6107e0565b3480156102b257600080fd5b50610158610866565b3480156102c757600080fd5b5067016345785d8a00006101d8565b3480156102e257600080fd5b506101bd6102f136600461163f565b610875565b34801561030257600080fd5b506101bd610311366004611691565b610884565b34801561032257600080fd5b50610158610331366004611589565b6108bc565b34801561034257600080fd5b5061012e61035136600461176d565b6001600160a01b03918216600090815260056020908152604080832093909416825291909152205460ff1690565b60006001600160e01b0319821663780e9d6360e01b14806103a457506103a482610930565b92915050565b6060600080546103b9906117a0565b80601f01602080910402602001604051908101604052809291908181526020018280546103e5906117a0565b80156104325780601f1061040757610100808354040283529160200191610432565b820191906000526020600020905b81548152906001019060200180831161041557829003601f168201915b5050505050905090565b600061044782610980565b506000908152600460205260409020546001600160a01b031690565b600061046e82610780565b9050806001600160a01b0316836001600160a01b0316036104e05760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656044820152603960f91b60648201526084015b60405180910390fd5b336001600160a01b03821614806104fc57506104fc8133610351565b61056e5760405162461bcd60e51b815260206004820152603d60248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60448201527f6b656e206f776e6572206f7220617070726f76656420666f7220616c6c00000060648201526084016104d7565b61057883836109e2565b505050565b67016345785d8a000034146105c65760405162461bcd60e51b815260206004820152600f60248201526e494e434f52524543545f46554e445360881b60448201526064016104d7565b60006105d160085490565b90506105dd3382610a50565b60405181907f176b02bb2d12439ff7a20b59f402cca16c76f50508b13ef3166a600eb719354a90600090a250565b6106153382610a6a565b6106315760405162461bcd60e51b81526004016104d7906117da565b610578838383610ae9565b6000610647836107e0565b82106106a95760405162461bcd60e51b815260206004820152602b60248201527f455243373231456e756d657261626c653a206f776e657220696e646578206f7560448201526a74206f6620626f756e647360a81b60648201526084016104d7565b506001600160a01b03919091166000908152600660209081526040808320938352929052205490565b61057883838360405180602001604052806000815250610884565b60006106f860085490565b821061075b5760405162461bcd60e51b815260206004820152602c60248201527f455243373231456e756d657261626c653a20676c6f62616c20696e646578206f60448201526b7574206f6620626f756e647360a01b60648201526084016104d7565b6008828154811061076e5761076e611827565b90600052602060002001549050919050565b6000818152600260205260408120546001600160a01b0316806103a45760405162461bcd60e51b8152602060048201526018602482015277115490cdcc8c4e881a5b9d985b1a59081d1bdad95b88125160421b60448201526064016104d7565b60006001600160a01b03821661084a5760405162461bcd60e51b815260206004820152602960248201527f4552433732313a2061646472657373207a65726f206973206e6f7420612076616044820152683634b21037bbb732b960b91b60648201526084016104d7565b506001600160a01b031660009081526003602052604090205490565b6060600180546103b9906117a0565b610880338383610c5a565b5050565b61088e3383610a6a565b6108aa5760405162461bcd60e51b81526004016104d7906117da565b6108b684848484610d28565b50505050565b60606108c782610980565b60006108de60408051602081019091526000815290565b905060008151116108fe5760405180602001604052806000815250610929565b8061090884610d5b565b60405160200161091992919061183d565b6040516020818303038152906040525b9392505050565b60006001600160e01b031982166380ac58cd60e01b148061096157506001600160e01b03198216635b5e139f60e01b145b806103a457506301ffc9a760e01b6001600160e01b03198316146103a4565b6000818152600260205260409020546001600160a01b03166109df5760405162461bcd60e51b8152602060048201526018602482015277115490cdcc8c4e881a5b9d985b1a59081d1bdad95b88125160421b60448201526064016104d7565b50565b600081815260046020526040902080546001600160a01b0319166001600160a01b0384169081179091558190610a1782610780565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b610880828260405180602001604052806000815250610dee565b600080610a7683610780565b9050806001600160a01b0316846001600160a01b03161480610abd57506001600160a01b0380821660009081526005602090815260408083209388168352929052205460ff165b80610ae15750836001600160a01b0316610ad68461043c565b6001600160a01b0316145b949350505050565b826001600160a01b0316610afc82610780565b6001600160a01b031614610b225760405162461bcd60e51b81526004016104d79061186c565b6001600160a01b038216610b845760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b60648201526084016104d7565b610b918383836001610e21565b826001600160a01b0316610ba482610780565b6001600160a01b031614610bca5760405162461bcd60e51b81526004016104d79061186c565b600081815260046020908152604080832080546001600160a01b03199081169091556001600160a01b0387811680865260038552838620805460001901905590871680865283862080546001019055868652600290945282852080549092168417909155905184937fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b816001600160a01b0316836001600160a01b031603610cbb5760405162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c65720000000000000060448201526064016104d7565b6001600160a01b03838116600081815260056020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b610d33848484610ae9565b610d3f84848484610f61565b6108b65760405162461bcd60e51b81526004016104d7906118b1565b60606000610d6883611062565b600101905060008167ffffffffffffffff811115610d8857610d8861167b565b6040519080825280601f01601f191660200182016040528015610db2576020820181803683370190505b5090508181016020015b600019016f181899199a1a9b1b9c1cb0b131b232b360811b600a86061a8153600a8504945084610dbc57509392505050565b610df8838361113a565b610e056000848484610f61565b6105785760405162461bcd60e51b81526004016104d7906118b1565b610e2d848484846112d3565b6001811115610e9c5760405162461bcd60e51b815260206004820152603560248201527f455243373231456e756d657261626c653a20636f6e7365637574697665207472604482015274185b9cd9995c9cc81b9bdd081cdd5c1c1bdc9d1959605a1b60648201526084016104d7565b816001600160a01b038516610ef857610ef381600880546000838152600960205260408120829055600182018355919091527ff3f7a9fe364faab93b216da50a3214154f22a0a2b415b23a84c8169e8b636ee30155565b610f1b565b836001600160a01b0316856001600160a01b031614610f1b57610f1b858261135b565b6001600160a01b038416610f3757610f32816113f8565b610f5a565b846001600160a01b0316846001600160a01b031614610f5a57610f5a84826114a7565b5050505050565b60006001600160a01b0384163b1561105757604051630a85bd0160e11b81526001600160a01b0385169063150b7a0290610fa5903390899088908890600401611903565b6020604051808303816000875af1925050508015610fe0575060408051601f3d908101601f19168201909252610fdd91810190611940565b60015b61103d573d80801561100e576040519150601f19603f3d011682016040523d82523d6000602084013e611013565b606091505b5080516000036110355760405162461bcd60e51b81526004016104d7906118b1565b805181602001fd5b6001600160e01b031916630a85bd0160e11b149050610ae1565b506001949350505050565b60008072184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b83106110a15772184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b830492506040015b6d04ee2d6d415b85acef810000000083106110cd576d04ee2d6d415b85acef8100000000830492506020015b662386f26fc1000083106110eb57662386f26fc10000830492506010015b6305f5e1008310611103576305f5e100830492506008015b612710831061111757612710830492506004015b60648310611129576064830492506002015b600a83106103a45760010192915050565b6001600160a01b0382166111905760405162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f206164647265737360448201526064016104d7565b6000818152600260205260409020546001600160a01b0316156111f55760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e7465640000000060448201526064016104d7565b611203600083836001610e21565b6000818152600260205260409020546001600160a01b0316156112685760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e7465640000000060448201526064016104d7565b6001600160a01b038216600081815260036020908152604080832080546001019055848352600290915280822080546001600160a01b0319168417905551839291907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b60018111156108b6576001600160a01b03841615611319576001600160a01b03841660009081526003602052604081208054839290611313908490611973565b90915550505b6001600160a01b038316156108b6576001600160a01b0383166000908152600360205260408120805483929061135090849061198a565b909155505050505050565b60006001611368846107e0565b6113729190611973565b6000838152600760205260409020549091508082146113c5576001600160a01b03841660009081526006602090815260408083208584528252808320548484528184208190558352600790915290208190555b5060009182526007602090815260408084208490556001600160a01b039094168352600681528383209183525290812055565b60085460009061140a90600190611973565b6000838152600960205260408120546008805493945090928490811061143257611432611827565b90600052602060002001549050806008838154811061145357611453611827565b600091825260208083209091019290925582815260099091526040808220849055858252812055600880548061148b5761148b6119a2565b6001900381819060005260206000200160009055905550505050565b60006114b2836107e0565b6001600160a01b039093166000908152600660209081526040808320868452825280832085905593825260079052919091209190915550565b6001600160e01b0319811681146109df57600080fd5b60006020828403121561151357600080fd5b8135610929816114eb565b60005b83811015611539578181015183820152602001611521565b838111156108b65750506000910152565b6000815180845261156281602086016020860161151e565b601f01601f19169290920160200192915050565b602081526000610929602083018461154a565b60006020828403121561159b57600080fd5b5035919050565b80356001600160a01b03811681146115b957600080fd5b919050565b600080604083850312156115d157600080fd5b6115da836115a2565b946020939093013593505050565b6000806000606084860312156115fd57600080fd5b611606846115a2565b9250611614602085016115a2565b9150604084013590509250925092565b60006020828403121561163657600080fd5b610929826115a2565b6000806040838503121561165257600080fd5b61165b836115a2565b91506020830135801515811461167057600080fd5b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b600080600080608085870312156116a757600080fd5b6116b0856115a2565b93506116be602086016115a2565b925060408501359150606085013567ffffffffffffffff808211156116e257600080fd5b818701915087601f8301126116f657600080fd5b8135818111156117085761170861167b565b604051601f8201601f19908116603f011681019083821181831017156117305761173061167b565b816040528281528a602084870101111561174957600080fd5b82602086016020830137600060208483010152809550505050505092959194509250565b6000806040838503121561178057600080fd5b611789836115a2565b9150611797602084016115a2565b90509250929050565b600181811c908216806117b457607f821691505b6020821081036117d457634e487b7160e01b600052602260045260246000fd5b50919050565b6020808252602d908201527f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560408201526c1c881bdc88185c1c1c9bdd9959609a1b606082015260800190565b634e487b7160e01b600052603260045260246000fd5b6000835161184f81846020880161151e565b83519083019061186381836020880161151e565b01949350505050565b60208082526025908201527f4552433732313a207472616e736665722066726f6d20696e636f72726563742060408201526437bbb732b960d91b606082015260800190565b60208082526032908201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606082015260800190565b6001600160a01b03858116825284166020820152604081018390526080606082018190526000906119369083018461154a565b9695505050505050565b60006020828403121561195257600080fd5b8151610929816114eb565b634e487b7160e01b600052601160045260246000fd5b6000828210156119855761198561195d565b500390565b6000821982111561199d5761199d61195d565b500190565b634e487b7160e01b600052603160045260246000fdfea164736f6c634300080e000a";

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

  deploy(
    _name: string,
    _symbol: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<TestERC721> {
    return super.deploy(_name, _symbol, overrides || {}) as Promise<TestERC721>;
  }
  getDeployTransaction(
    _name: string,
    _symbol: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_name, _symbol, overrides || {});
  }
  attach(address: string): TestERC721 {
    return super.attach(address) as TestERC721;
  }
  connect(signer: Signer): TestERC721__factory {
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
