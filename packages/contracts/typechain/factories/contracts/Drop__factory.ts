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
import type { PromiseOrValue } from "../../common";
import type { Drop, DropInterface } from "../../contracts/Drop";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_maxSupply",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_price",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_versions",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_defaultItem",
        type: "address",
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
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Mutated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
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
    inputs: [],
    name: "URI",
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
    inputs: [],
    name: "defaultItem",
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
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "drip",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "versionId",
            type: "uint256",
          },
          {
            internalType: "enum DripStatus",
            name: "status",
            type: "uint8",
          },
          {
            components: [
              {
                internalType: "address",
                name: "mutator",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "mutatorId",
                type: "uint256",
              },
            ],
            internalType: "struct DripMutation",
            name: "mutation",
            type: "tuple",
          },
        ],
        internalType: "struct Drip",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "dropId",
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
    name: "maxSupply",
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
        name: "versionId",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenIdToMutate",
        type: "uint256",
      },
      {
        internalType: "contract IERC721",
        name: "contractMutator",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenIdMutator",
        type: "uint256",
      },
    ],
    name: "mutate",
    outputs: [],
    stateMutability: "nonpayable",
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
    inputs: [],
    name: "owner",
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
    inputs: [],
    name: "renounceOwnership",
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
        internalType: "address",
        name: "mutatorContract",
        type: "address",
      },
      {
        internalType: "contract IMutator",
        name: "_IMutator",
        type: "address",
      },
    ],
    name: "setMutator",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "newURI",
        type: "string",
      },
    ],
    name: "setURI",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "versions",
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
];

const _bytecode =
  "0x610140604081905260006101208190526200001d91600b9162000485565b503480156200002b57600080fd5b5060405162002bcc38038062002bcc8339810160408190526200004e916200052b565b6040518060400160405280600581526020016444524f502360d81b8152506200008286620001c460201b620011e21760201c565b60405160200162000095929190620005c6565b6040516020818303038152906040526040518060400160405280600581526020016444524f502360d81b815250620000d887620001c460201b620011e21760201c565b604051602001620000eb929190620005c6565b60408051601f1981840301815291905281516200011090600090602085019062000485565b5080516200012690600190602084019062000485565b505050620001436200013d6200026860201b60201c565b6200026c565b600082116200018c5760405162461bcd60e51b815260206004820152601060248201526f494e56414c49445f56455253494f4e5360801b60448201526064015b60405180910390fd5b608085905260a084905260c083905260e08290526001600160a01b03811661010052620001b932620002be565b505050505062000639565b60606000620001de836200033d60201b620012751760201c565b60010190506000816001600160401b03811115620002005762000200620005e7565b6040519080825280601f01601f1916602001820160405280156200022b576020820181803683370190505b5090508181016020015b600019016f181899199a1a9b1b9c1cb0b131b232b360811b600a86061a8153600a85049450846200023557509392505050565b3390565b600a80546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b620002c862000427565b6001600160a01b0381166200032f5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b606482015260840162000183565b6200033a816200026c565b50565b6000807a184f03e93ff9f4daa797ed6e38ed64bf6a1f010000000000000000831062000387577a184f03e93ff9f4daa797ed6e38ed64bf6a1f010000000000000000830492506040015b6d04ee2d6d415b85acef81000000008310620003b4576d04ee2d6d415b85acef8100000000830492506020015b662386f26fc100008310620003d357662386f26fc10000830492506010015b6305f5e1008310620003ec576305f5e100830492506008015b61271083106200040157612710830492506004015b6064831062000414576064830492506002015b600a831062000421576001015b92915050565b600a546001600160a01b03163314620004835760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640162000183565b565b8280546200049390620005fd565b90600052602060002090601f016020900481019282620004b7576000855562000502565b82601f10620004d257805160ff191683800117855562000502565b8280016001018555821562000502579182015b8281111562000502578251825591602001919060010190620004e5565b506200051092915062000514565b5090565b5b8082111562000510576000815560010162000515565b600080600080600060a086880312156200054457600080fd5b855160208701516040880151606089015160808a0151939850919650945092506001600160a01b03811681146200057a57600080fd5b809150509295509295909350565b6000815160005b81811015620005ab57602081850181015186830152016200058f565b81811115620005bb576000828601525b509290920192915050565b6000620005df620005d8838662000588565b8462000588565b949350505050565b634e487b7160e01b600052604160045260246000fd5b600181811c908216806200061257607f821691505b6020821081036200063357634e487b7160e01b600052602260045260246000fd5b50919050565b60805160a05160c05160e051610100516125396200069360003960006101e10152600081816105ff0152610eee01526000818161049d0152610f500152600081816105430152610e8a0152600061033501526125396000f3fe6080604052600436106101cd5760003560e01c80636352211e116100f7578063a22cb46511610095578063e985e9c511610064578063e985e9c514610567578063edc5d158146105b0578063f2fde38b146105d0578063f8b1cb3c146105f057600080fd5b8063a22cb465146104d4578063b88d4fde146104f4578063c87b56dd14610514578063d5abeb011461053457600080fd5b80638da5cb5b116100d15780638da5cb5b1461045b57806395d89b4114610479578063a035b1fe1461048e578063a0712d68146104c157600080fd5b80636352211e1461040657806370a0823114610426578063715018a61461044657600080fd5b806318160ddd1161016f578063361c60361161013e578063361c60361461037957806342842e0e146103995780634f6ccce7146103b957806358326b7a146103d957600080fd5b806318160ddd146102e757806323b872dd146103065780632a778c9b146103265780632f745c591461035957600080fd5b806306fdde03116101ab57806306fdde0314610270578063081812fc14610292578063095ea7b3146102b25780631141d7de146102d257600080fd5b806301852613146101d257806301ffc9a71461021e57806302fe53051461024e575b600080fd5b3480156101de57600080fd5b507f00000000000000000000000000000000000000000000000000000000000000005b6040516001600160a01b0390911681526020015b60405180910390f35b34801561022a57600080fd5b5061023e610239366004611f3a565b610623565b6040519015158152602001610215565b34801561025a57600080fd5b5061026e610269366004611fe3565b61064e565b005b34801561027c57600080fd5b5061028561066d565b6040516102159190612084565b34801561029e57600080fd5b506102016102ad366004612097565b6106ff565b3480156102be57600080fd5b5061026e6102cd3660046120c5565b610726565b3480156102de57600080fd5b50610285610840565b3480156102f357600080fd5b506008545b604051908152602001610215565b34801561031257600080fd5b5061026e6103213660046120f1565b61084f565b34801561033257600080fd5b507f00000000000000000000000000000000000000000000000000000000000000006102f8565b34801561036557600080fd5b506102f86103743660046120c5565b610880565b34801561038557600080fd5b5061026e610394366004612132565b610916565b3480156103a557600080fd5b5061026e6103b43660046120f1565b610bf7565b3480156103c557600080fd5b506102f86103d4366004612097565b610c12565b3480156103e557600080fd5b506103f96103f4366004612097565b610ca5565b604051610215919061216f565b34801561041257600080fd5b50610201610421366004612097565b610d72565b34801561043257600080fd5b506102f86104413660046121c7565b610dd2565b34801561045257600080fd5b5061026e610e58565b34801561046757600080fd5b50600a546001600160a01b0316610201565b34801561048557600080fd5b50610285610e6c565b34801561049a57600080fd5b507f00000000000000000000000000000000000000000000000000000000000000006102f8565b61026e6104cf366004612097565b610e7b565b3480156104e057600080fd5b5061026e6104ef3660046121e4565b61107c565b34801561050057600080fd5b5061026e61050f366004612222565b611087565b34801561052057600080fd5b5061028561052f366004612097565b6110bf565b34801561054057600080fd5b507f00000000000000000000000000000000000000000000000000000000000000006102f8565b34801561057357600080fd5b5061023e6105823660046122a2565b6001600160a01b03918216600090815260056020908152604080832093909416825291909152205460ff1690565b3480156105bc57600080fd5b5061026e6105cb3660046122a2565b611133565b3480156105dc57600080fd5b5061026e6105eb3660046121c7565b611169565b3480156105fc57600080fd5b507f00000000000000000000000000000000000000000000000000000000000000006102f8565b60006001600160e01b0319821663780e9d6360e01b148061064857506106488261134d565b92915050565b61065661139d565b805161066990600b906020840190611e46565b5050565b60606000805461067c906122d0565b80601f01602080910402602001604051908101604052809291908181526020018280546106a8906122d0565b80156106f55780601f106106ca576101008083540402835291602001916106f5565b820191906000526020600020905b8154815290600101906020018083116106d857829003601f168201915b5050505050905090565b600061070a826113f7565b506000908152600460205260409020546001600160a01b031690565b600061073182610d72565b9050806001600160a01b0316836001600160a01b0316036107a35760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656044820152603960f91b60648201526084015b60405180910390fd5b336001600160a01b03821614806107bf57506107bf8133610582565b6108315760405162461bcd60e51b815260206004820152603d60248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60448201527f6b656e206f776e6572206f7220617070726f76656420666f7220616c6c000000606482015260840161079a565b61083b8383611456565b505050565b6060600b805461067c906122d0565b61085933826114c4565b6108755760405162461bcd60e51b815260040161079a9061230a565b61083b838383611543565b600061088b83610dd2565b82106108ed5760405162461bcd60e51b815260206004820152602b60248201527f455243373231456e756d657261626c653a206f776e657220696e646578206f7560448201526a74206f6620626f756e647360a81b606482015260840161079a565b506001600160a01b03919091166000908152600660209081526040808320938352929052205490565b6000838152600c6020526040902060085484106109645760405162461bcd60e51b815260206004820152600c60248201526b13d55517d3d197d093d5539160a21b604482015260640161079a565b6040516331a9108f60e11b81526004810185905233903090636352211e90602401602060405180830381865afa1580156109a2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109c69190612357565b6001600160a01b0316146109ec5760405162461bcd60e51b815260040161079a90612374565b600060018083015460ff1690811115610a0757610a07612159565b14610a465760405162461bcd60e51b815260206004820152600f60248201526e1053149150511657d3555510551151608a1b604482015260640161079a565b6001600160a01b038084166000908152600d60205260409020541680610afc576040516331a9108f60e11b81526004810184905233906001600160a01b03861690636352211e90602401602060405180830381865afa158015610aad573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ad19190612357565b6001600160a01b031614610af75760405162461bcd60e51b815260040161079a90612374565b610b8f565b6040516331a9108f60e11b81526004810184905233906001600160a01b03831690636352211e906024016020604051808303816000875af1158015610b45573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b699190612357565b6001600160a01b031614610b8f5760405162461bcd60e51b815260040161079a90612374565b6001828101805460ff1916828002179055506002820180546001600160a01b0319166001600160a01b0386161790556003820183905560405185907fe0ff833392b9f001daba1da86ad0f9c9ab3f34ddd5a7dc6f7d3dffee0df8110e90600090a25050505050565b61083b83838360405180602001604052806000815250611087565b6000610c1d60085490565b8210610c805760405162461bcd60e51b815260206004820152602c60248201527f455243373231456e756d657261626c653a20676c6f62616c20696e646578206f60448201526b7574206f6620626f756e647360a01b606482015260840161079a565b60088281548110610c9357610c9361239b565b90600052602060002001549050919050565b610cad611eca565b6008548210610cf15760405162461bcd60e51b815260206004820152601060248201526f1253959053125117d513d2d15397d25160821b604482015260640161079a565b6000828152600c602090815260409182902082516060810190935280548352600180820154919284019160ff1690811115610d2e57610d2e612159565b6001811115610d3f57610d3f612159565b81526040805180820190915260028301546001600160a01b03168152600390920154602083810191909152015292915050565b6000818152600260205260408120546001600160a01b0316806106485760405162461bcd60e51b8152602060048201526018602482015277115490cdcc8c4e881a5b9d985b1a59081d1bdad95b88125160421b604482015260640161079a565b60006001600160a01b038216610e3c5760405162461bcd60e51b815260206004820152602960248201527f4552433732313a2061646472657373207a65726f206973206e6f7420612076616044820152683634b21037bbb732b960b91b606482015260840161079a565b506001600160a01b031660009081526003602052604090205490565b610e6061139d565b610e6a60006116b4565b565b60606001805461067c906122d0565b6000610e8660085490565b90507f00000000000000000000000000000000000000000000000000000000000000008110610eec5760405162461bcd60e51b815260206004820152601260248201527113505617d4d55414131657d4915050d2115160721b604482015260640161079a565b7f0000000000000000000000000000000000000000000000000000000000000000821115610f4e5760405162461bcd60e51b815260206004820152600f60248201526e24a72b20a624a22fab22a929a4a7a760891b604482015260640161079a565b7f00000000000000000000000000000000000000000000000000000000000000003414610fad5760405162461bcd60e51b815260206004820152600d60248201526c494e56414c49445f46554e445360981b604482015260640161079a565b610fb73382611706565b60408051606081018252838152600060208083018281528451808601865283815280830184905284860152858352600c90915292902081518155915160018084018054939493909160ff1990911690838181111561101757611017612159565b021790555060409182015180516002830180546001600160a01b0319166001600160a01b03909216919091179055602001516003909101555181907f176b02bb2d12439ff7a20b59f402cca16c76f50508b13ef3166a600eb719354a90600090a25050565b610669338383611720565b61109133836114c4565b6110ad5760405162461bcd60e51b815260040161079a9061230a565b6110b9848484846117ee565b50505050565b60606110ca826113f7565b60006110e160408051602081019091526000815290565b90506000815111611101576040518060200160405280600081525061112c565b8061110b846111e2565b60405160200161111c9291906123b1565b6040516020818303038152906040525b9392505050565b61113b61139d565b6001600160a01b039182166000908152600d6020526040902080546001600160a01b03191691909216179055565b61117161139d565b6001600160a01b0381166111d65760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b606482015260840161079a565b6111df816116b4565b50565b606060006111ef83611275565b600101905060008167ffffffffffffffff81111561120f5761120f611f57565b6040519080825280601f01601f191660200182016040528015611239576020820181803683370190505b5090508181016020015b600019016f181899199a1a9b1b9c1cb0b131b232b360811b600a86061a8153600a850494508461124357509392505050565b60008072184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b83106112b45772184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b830492506040015b6d04ee2d6d415b85acef810000000083106112e0576d04ee2d6d415b85acef8100000000830492506020015b662386f26fc1000083106112fe57662386f26fc10000830492506010015b6305f5e1008310611316576305f5e100830492506008015b612710831061132a57612710830492506004015b6064831061133c576064830492506002015b600a83106106485760010192915050565b60006001600160e01b031982166380ac58cd60e01b148061137e57506001600160e01b03198216635b5e139f60e01b145b8061064857506301ffc9a760e01b6001600160e01b0319831614610648565b600a546001600160a01b03163314610e6a5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161079a565b6000818152600260205260409020546001600160a01b03166111df5760405162461bcd60e51b8152602060048201526018602482015277115490cdcc8c4e881a5b9d985b1a59081d1bdad95b88125160421b604482015260640161079a565b600081815260046020526040902080546001600160a01b0319166001600160a01b038416908117909155819061148b82610d72565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6000806114d083610d72565b9050806001600160a01b0316846001600160a01b0316148061151757506001600160a01b0380821660009081526005602090815260408083209388168352929052205460ff165b8061153b5750836001600160a01b0316611530846106ff565b6001600160a01b0316145b949350505050565b826001600160a01b031661155682610d72565b6001600160a01b03161461157c5760405162461bcd60e51b815260040161079a906123e0565b6001600160a01b0382166115de5760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b606482015260840161079a565b6115eb8383836001611821565b826001600160a01b03166115fe82610d72565b6001600160a01b0316146116245760405162461bcd60e51b815260040161079a906123e0565b600081815260046020908152604080832080546001600160a01b03199081169091556001600160a01b0387811680865260038552838620805460001901905590871680865283862080546001019055868652600290945282852080549092168417909155905184937fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b600a80546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b610669828260405180602001604052806000815250611961565b816001600160a01b0316836001600160a01b0316036117815760405162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c657200000000000000604482015260640161079a565b6001600160a01b03838116600081815260056020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b6117f9848484611543565b61180584848484611994565b6110b95760405162461bcd60e51b815260040161079a90612425565b61182d84848484611a95565b600181111561189c5760405162461bcd60e51b815260206004820152603560248201527f455243373231456e756d657261626c653a20636f6e7365637574697665207472604482015274185b9cd9995c9cc81b9bdd081cdd5c1c1bdc9d1959605a1b606482015260840161079a565b816001600160a01b0385166118f8576118f381600880546000838152600960205260408120829055600182018355919091527ff3f7a9fe364faab93b216da50a3214154f22a0a2b415b23a84c8169e8b636ee30155565b61191b565b836001600160a01b0316856001600160a01b03161461191b5761191b8582611b1d565b6001600160a01b0384166119375761193281611bba565b61195a565b846001600160a01b0316846001600160a01b03161461195a5761195a8482611c69565b5050505050565b61196b8383611cad565b6119786000848484611994565b61083b5760405162461bcd60e51b815260040161079a90612425565b60006001600160a01b0384163b15611a8a57604051630a85bd0160e11b81526001600160a01b0385169063150b7a02906119d8903390899088908890600401612477565b6020604051808303816000875af1925050508015611a13575060408051601f3d908101601f19168201909252611a10918101906124b4565b60015b611a70573d808015611a41576040519150601f19603f3d011682016040523d82523d6000602084013e611a46565b606091505b508051600003611a685760405162461bcd60e51b815260040161079a90612425565b805181602001fd5b6001600160e01b031916630a85bd0160e11b14905061153b565b506001949350505050565b60018111156110b9576001600160a01b03841615611adb576001600160a01b03841660009081526003602052604081208054839290611ad59084906124e7565b90915550505b6001600160a01b038316156110b9576001600160a01b03831660009081526003602052604081208054839290611b129084906124fe565b909155505050505050565b60006001611b2a84610dd2565b611b3491906124e7565b600083815260076020526040902054909150808214611b87576001600160a01b03841660009081526006602090815260408083208584528252808320548484528184208190558352600790915290208190555b5060009182526007602090815260408084208490556001600160a01b039094168352600681528383209183525290812055565b600854600090611bcc906001906124e7565b60008381526009602052604081205460088054939450909284908110611bf457611bf461239b565b906000526020600020015490508060088381548110611c1557611c1561239b565b6000918252602080832090910192909255828152600990915260408082208490558582528120556008805480611c4d57611c4d612516565b6001900381819060005260206000200160009055905550505050565b6000611c7483610dd2565b6001600160a01b039093166000908152600660209081526040808320868452825280832085905593825260079052919091209190915550565b6001600160a01b038216611d035760405162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f2061646472657373604482015260640161079a565b6000818152600260205260409020546001600160a01b031615611d685760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000604482015260640161079a565b611d76600083836001611821565b6000818152600260205260409020546001600160a01b031615611ddb5760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000604482015260640161079a565b6001600160a01b038216600081815260036020908152604080832080546001019055848352600290915280822080546001600160a01b0319168417905551839291907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b828054611e52906122d0565b90600052602060002090601f016020900481019282611e745760008555611eba565b82601f10611e8d57805160ff1916838001178555611eba565b82800160010185558215611eba579182015b82811115611eba578251825591602001919060010190611e9f565b50611ec6929150611f0f565b5090565b6040805160608101909152600080825260208201908152602001611f0a604051806040016040528060006001600160a01b03168152602001600081525090565b905290565b5b80821115611ec65760008155600101611f10565b6001600160e01b0319811681146111df57600080fd5b600060208284031215611f4c57600080fd5b813561112c81611f24565b634e487b7160e01b600052604160045260246000fd5b600067ffffffffffffffff80841115611f8857611f88611f57565b604051601f8501601f19908116603f01168101908282118183101715611fb057611fb0611f57565b81604052809350858152868686011115611fc957600080fd5b858560208301376000602087830101525050509392505050565b600060208284031215611ff557600080fd5b813567ffffffffffffffff81111561200c57600080fd5b8201601f8101841361201d57600080fd5b61153b84823560208401611f6d565b60005b8381101561204757818101518382015260200161202f565b838111156110b95750506000910152565b6000815180845261207081602086016020860161202c565b601f01601f19169290920160200192915050565b60208152600061112c6020830184612058565b6000602082840312156120a957600080fd5b5035919050565b6001600160a01b03811681146111df57600080fd5b600080604083850312156120d857600080fd5b82356120e3816120b0565b946020939093013593505050565b60008060006060848603121561210657600080fd5b8335612111816120b0565b92506020840135612121816120b0565b929592945050506040919091013590565b60008060006060848603121561214757600080fd5b833592506020840135612121816120b0565b634e487b7160e01b600052602160045260246000fd5b81518152602082015160808201906002811061219b57634e487b7160e01b600052602160045260246000fd5b80602084015250604083015160018060a01b038151166040840152602081015160608401525092915050565b6000602082840312156121d957600080fd5b813561112c816120b0565b600080604083850312156121f757600080fd5b8235612202816120b0565b91506020830135801515811461221757600080fd5b809150509250929050565b6000806000806080858703121561223857600080fd5b8435612243816120b0565b93506020850135612253816120b0565b925060408501359150606085013567ffffffffffffffff81111561227657600080fd5b8501601f8101871361228757600080fd5b61229687823560208401611f6d565b91505092959194509250565b600080604083850312156122b557600080fd5b82356122c0816120b0565b91506020830135612217816120b0565b600181811c908216806122e457607f821691505b60208210810361230457634e487b7160e01b600052602260045260246000fd5b50919050565b6020808252602d908201527f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560408201526c1c881bdc88185c1c1c9bdd9959609a1b606082015260800190565b60006020828403121561236957600080fd5b815161112c816120b0565b6020808252600d908201526c24a72b20a624a22fa7aba722a960991b604082015260600190565b634e487b7160e01b600052603260045260246000fd5b600083516123c381846020880161202c565b8351908301906123d781836020880161202c565b01949350505050565b60208082526025908201527f4552433732313a207472616e736665722066726f6d20696e636f72726563742060408201526437bbb732b960d91b606082015260800190565b60208082526032908201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606082015260800190565b6001600160a01b03858116825284166020820152604081018390526080606082018190526000906124aa90830184612058565b9695505050505050565b6000602082840312156124c657600080fd5b815161112c81611f24565b634e487b7160e01b600052601160045260246000fd5b6000828210156124f9576124f96124d1565b500390565b60008219821115612511576125116124d1565b500190565b634e487b7160e01b600052603160045260246000fdfea164736f6c634300080e000a";

type DropConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DropConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Drop__factory extends ContractFactory {
  constructor(...args: DropConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    id: PromiseOrValue<BigNumberish>,
    _maxSupply: PromiseOrValue<BigNumberish>,
    _price: PromiseOrValue<BigNumberish>,
    _versions: PromiseOrValue<BigNumberish>,
    _defaultItem: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Drop> {
    return super.deploy(
      id,
      _maxSupply,
      _price,
      _versions,
      _defaultItem,
      overrides || {}
    ) as Promise<Drop>;
  }
  override getDeployTransaction(
    id: PromiseOrValue<BigNumberish>,
    _maxSupply: PromiseOrValue<BigNumberish>,
    _price: PromiseOrValue<BigNumberish>,
    _versions: PromiseOrValue<BigNumberish>,
    _defaultItem: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      id,
      _maxSupply,
      _price,
      _versions,
      _defaultItem,
      overrides || {}
    );
  }
  override attach(address: string): Drop {
    return super.attach(address) as Drop;
  }
  override connect(signer: Signer): Drop__factory {
    return super.connect(signer) as Drop__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DropInterface {
    return new utils.Interface(_abi) as DropInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Drop {
    return new Contract(address, _abi, signerOrProvider) as Drop;
  }
}
