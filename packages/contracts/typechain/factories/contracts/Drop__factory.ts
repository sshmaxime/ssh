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
  "0x610140604081905260006101208190526200001d91600b9162000485565b503480156200002b57600080fd5b5060405162002b7238038062002b728339810160408190526200004e916200052b565b6040518060400160405280600581526020016444524f502360d81b8152506200008286620001c460201b620011881760201c565b60405160200162000095929190620005c6565b6040516020818303038152906040526040518060400160405280600581526020016444524f502360d81b815250620000d887620001c460201b620011881760201c565b604051602001620000eb929190620005c6565b60408051601f1981840301815291905281516200011090600090602085019062000485565b5080516200012690600190602084019062000485565b505050620001436200013d6200026860201b60201c565b6200026c565b600082116200018c5760405162461bcd60e51b815260206004820152601060248201526f494e56414c49445f56455253494f4e5360801b60448201526064015b60405180910390fd5b608085905260a084905260c083905260e08290526001600160a01b03811661010052620001b932620002be565b505050505062000639565b60606000620001de836200033d60201b6200121b1760201c565b60010190506000816001600160401b03811115620002005762000200620005e7565b6040519080825280601f01601f1916602001820160405280156200022b576020820181803683370190505b5090508181016020015b600019016f181899199a1a9b1b9c1cb0b131b232b360811b600a86061a8153600a85049450846200023557509392505050565b3390565b600a80546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b620002c862000427565b6001600160a01b0381166200032f5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b606482015260840162000183565b6200033a816200026c565b50565b6000807a184f03e93ff9f4daa797ed6e38ed64bf6a1f010000000000000000831062000387577a184f03e93ff9f4daa797ed6e38ed64bf6a1f010000000000000000830492506040015b6d04ee2d6d415b85acef81000000008310620003b4576d04ee2d6d415b85acef8100000000830492506020015b662386f26fc100008310620003d357662386f26fc10000830492506010015b6305f5e1008310620003ec576305f5e100830492506008015b61271083106200040157612710830492506004015b6064831062000414576064830492506002015b600a831062000421576001015b92915050565b600a546001600160a01b03163314620004835760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640162000183565b565b8280546200049390620005fd565b90600052602060002090601f016020900481019282620004b7576000855562000502565b82601f10620004d257805160ff191683800117855562000502565b8280016001018555821562000502579182015b8281111562000502578251825591602001919060010190620004e5565b506200051092915062000514565b5090565b5b8082111562000510576000815560010162000515565b600080600080600060a086880312156200054457600080fd5b855160208701516040880151606089015160808a0151939850919650945092506001600160a01b03811681146200057a57600080fd5b809150509295509295909350565b6000815160005b81811015620005ab57602081850181015186830152016200058f565b81811115620005bb576000828601525b509290920192915050565b6000620005df620005d8838662000588565b8462000588565b949350505050565b634e487b7160e01b600052604160045260246000fd5b600181811c908216806200061257607f821691505b6020821081036200063357634e487b7160e01b600052602260045260246000fd5b50919050565b60805160a05160c05160e051610100516124df6200069360003960006101e10152600081816105ff0152610e9401526000818161049d0152610ef60152600081816105430152610e300152600061033501526124df6000f3fe6080604052600436106101cd5760003560e01c80636352211e116100f7578063a22cb46511610095578063e985e9c511610064578063e985e9c514610567578063edc5d158146105b0578063f2fde38b146105d0578063f8b1cb3c146105f057600080fd5b8063a22cb465146104d4578063b88d4fde146104f4578063c87b56dd14610514578063d5abeb011461053457600080fd5b80638da5cb5b116100d15780638da5cb5b1461045b57806395d89b4114610479578063a035b1fe1461048e578063a0712d68146104c157600080fd5b80636352211e1461040657806370a0823114610426578063715018a61461044657600080fd5b806318160ddd1161016f578063361c60361161013e578063361c60361461037957806342842e0e146103995780634f6ccce7146103b957806358326b7a146103d957600080fd5b806318160ddd146102e757806323b872dd146103065780632a778c9b146103265780632f745c591461035957600080fd5b806306fdde03116101ab57806306fdde0314610270578063081812fc14610292578063095ea7b3146102b25780631141d7de146102d257600080fd5b806301852613146101d257806301ffc9a71461021e57806302fe53051461024e575b600080fd5b3480156101de57600080fd5b507f00000000000000000000000000000000000000000000000000000000000000005b6040516001600160a01b0390911681526020015b60405180910390f35b34801561022a57600080fd5b5061023e610239366004611ee0565b610623565b6040519015158152602001610215565b34801561025a57600080fd5b5061026e610269366004611f89565b61064e565b005b34801561027c57600080fd5b5061028561066d565b604051610215919061202a565b34801561029e57600080fd5b506102016102ad36600461203d565b6106ff565b3480156102be57600080fd5b5061026e6102cd36600461206b565b610726565b3480156102de57600080fd5b50610285610840565b3480156102f357600080fd5b506008545b604051908152602001610215565b34801561031257600080fd5b5061026e610321366004612097565b61084f565b34801561033257600080fd5b507f00000000000000000000000000000000000000000000000000000000000000006102f8565b34801561036557600080fd5b506102f861037436600461206b565b610880565b34801561038557600080fd5b5061026e6103943660046120d8565b610916565b3480156103a557600080fd5b5061026e6103b4366004612097565b610b9d565b3480156103c557600080fd5b506102f86103d436600461203d565b610bb8565b3480156103e557600080fd5b506103f96103f436600461203d565b610c4b565b6040516102159190612115565b34801561041257600080fd5b5061020161042136600461203d565b610d18565b34801561043257600080fd5b506102f861044136600461216d565b610d78565b34801561045257600080fd5b5061026e610dfe565b34801561046757600080fd5b50600a546001600160a01b0316610201565b34801561048557600080fd5b50610285610e12565b34801561049a57600080fd5b507f00000000000000000000000000000000000000000000000000000000000000006102f8565b61026e6104cf36600461203d565b610e21565b3480156104e057600080fd5b5061026e6104ef36600461218a565b611022565b34801561050057600080fd5b5061026e61050f3660046121c8565b61102d565b34801561052057600080fd5b5061028561052f36600461203d565b611065565b34801561054057600080fd5b507f00000000000000000000000000000000000000000000000000000000000000006102f8565b34801561057357600080fd5b5061023e610582366004612248565b6001600160a01b03918216600090815260056020908152604080832093909416825291909152205460ff1690565b3480156105bc57600080fd5b5061026e6105cb366004612248565b6110d9565b3480156105dc57600080fd5b5061026e6105eb36600461216d565b61110f565b3480156105fc57600080fd5b507f00000000000000000000000000000000000000000000000000000000000000006102f8565b60006001600160e01b0319821663780e9d6360e01b14806106485750610648826112f3565b92915050565b610656611343565b805161066990600b906020840190611dec565b5050565b60606000805461067c90612276565b80601f01602080910402602001604051908101604052809291908181526020018280546106a890612276565b80156106f55780601f106106ca576101008083540402835291602001916106f5565b820191906000526020600020905b8154815290600101906020018083116106d857829003601f168201915b5050505050905090565b600061070a8261139d565b506000908152600460205260409020546001600160a01b031690565b600061073182610d18565b9050806001600160a01b0316836001600160a01b0316036107a35760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656044820152603960f91b60648201526084015b60405180910390fd5b336001600160a01b03821614806107bf57506107bf8133610582565b6108315760405162461bcd60e51b815260206004820152603d60248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60448201527f6b656e206f776e6572206f7220617070726f76656420666f7220616c6c000000606482015260840161079a565b61083b83836113fc565b505050565b6060600b805461067c90612276565b610859338261146a565b6108755760405162461bcd60e51b815260040161079a906122b0565b61083b8383836114e9565b600061088b83610d78565b82106108ed5760405162461bcd60e51b815260206004820152602b60248201527f455243373231456e756d657261626c653a206f776e657220696e646578206f7560448201526a74206f6620626f756e647360a81b606482015260840161079a565b506001600160a01b03919091166000908152600660209081526040808320938352929052205490565b60085483106109565760405162461bcd60e51b815260206004820152600c60248201526b13d55517d3d197d093d5539160a21b604482015260640161079a565b6040516331a9108f60e11b81526004810184905233903090636352211e90602401602060405180830381865afa158015610994573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109b891906122fd565b6001600160a01b0316146109de5760405162461bcd60e51b815260040161079a9061231a565b6001600160a01b038083166000908152600d60205260409020541680610a94576040516331a9108f60e11b81526004810183905233906001600160a01b03851690636352211e90602401602060405180830381865afa158015610a45573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a6991906122fd565b6001600160a01b031614610a8f5760405162461bcd60e51b815260040161079a9061231a565b610b27565b6040516331a9108f60e11b81526004810183905233906001600160a01b03831690636352211e906024016020604051808303816000875af1158015610add573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b0191906122fd565b6001600160a01b031614610b275760405162461bcd60e51b815260040161079a9061231a565b6000848152600c602052604090206001808201805460ff1916828002179055506002810180546001600160a01b0319166001600160a01b0386161790556003810183905560405185907fe0ff833392b9f001daba1da86ad0f9c9ab3f34ddd5a7dc6f7d3dffee0df8110e90600090a25050505050565b61083b8383836040518060200160405280600081525061102d565b6000610bc360085490565b8210610c265760405162461bcd60e51b815260206004820152602c60248201527f455243373231456e756d657261626c653a20676c6f62616c20696e646578206f60448201526b7574206f6620626f756e647360a01b606482015260840161079a565b60088281548110610c3957610c39612341565b90600052602060002001549050919050565b610c53611e70565b6008548210610c975760405162461bcd60e51b815260206004820152601060248201526f1253959053125117d513d2d15397d25160821b604482015260640161079a565b6000828152600c602090815260409182902082516060810190935280548352600180820154919284019160ff1690811115610cd457610cd46120ff565b6001811115610ce557610ce56120ff565b81526040805180820190915260028301546001600160a01b03168152600390920154602083810191909152015292915050565b6000818152600260205260408120546001600160a01b0316806106485760405162461bcd60e51b8152602060048201526018602482015277115490cdcc8c4e881a5b9d985b1a59081d1bdad95b88125160421b604482015260640161079a565b60006001600160a01b038216610de25760405162461bcd60e51b815260206004820152602960248201527f4552433732313a2061646472657373207a65726f206973206e6f7420612076616044820152683634b21037bbb732b960b91b606482015260840161079a565b506001600160a01b031660009081526003602052604090205490565b610e06611343565b610e10600061165a565b565b60606001805461067c90612276565b6000610e2c60085490565b90507f00000000000000000000000000000000000000000000000000000000000000008110610e925760405162461bcd60e51b815260206004820152601260248201527113505617d4d55414131657d4915050d2115160721b604482015260640161079a565b7f0000000000000000000000000000000000000000000000000000000000000000821115610ef45760405162461bcd60e51b815260206004820152600f60248201526e24a72b20a624a22fab22a929a4a7a760891b604482015260640161079a565b7f00000000000000000000000000000000000000000000000000000000000000003414610f535760405162461bcd60e51b815260206004820152600d60248201526c494e56414c49445f46554e445360981b604482015260640161079a565b610f5d33826116ac565b60408051606081018252838152600060208083018281528451808601865283815280830184905284860152858352600c90915292902081518155915160018084018054939493909160ff19909116908381811115610fbd57610fbd6120ff565b021790555060409182015180516002830180546001600160a01b0319166001600160a01b03909216919091179055602001516003909101555181907f176b02bb2d12439ff7a20b59f402cca16c76f50508b13ef3166a600eb719354a90600090a25050565b6106693383836116c6565b611037338361146a565b6110535760405162461bcd60e51b815260040161079a906122b0565b61105f84848484611794565b50505050565b60606110708261139d565b600061108760408051602081019091526000815290565b905060008151116110a757604051806020016040528060008152506110d2565b806110b184611188565b6040516020016110c2929190612357565b6040516020818303038152906040525b9392505050565b6110e1611343565b6001600160a01b039182166000908152600d6020526040902080546001600160a01b03191691909216179055565b611117611343565b6001600160a01b03811661117c5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b606482015260840161079a565b6111858161165a565b50565b606060006111958361121b565b600101905060008167ffffffffffffffff8111156111b5576111b5611efd565b6040519080825280601f01601f1916602001820160405280156111df576020820181803683370190505b5090508181016020015b600019016f181899199a1a9b1b9c1cb0b131b232b360811b600a86061a8153600a85049450846111e957509392505050565b60008072184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b831061125a5772184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b830492506040015b6d04ee2d6d415b85acef81000000008310611286576d04ee2d6d415b85acef8100000000830492506020015b662386f26fc1000083106112a457662386f26fc10000830492506010015b6305f5e10083106112bc576305f5e100830492506008015b61271083106112d057612710830492506004015b606483106112e2576064830492506002015b600a83106106485760010192915050565b60006001600160e01b031982166380ac58cd60e01b148061132457506001600160e01b03198216635b5e139f60e01b145b8061064857506301ffc9a760e01b6001600160e01b0319831614610648565b600a546001600160a01b03163314610e105760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161079a565b6000818152600260205260409020546001600160a01b03166111855760405162461bcd60e51b8152602060048201526018602482015277115490cdcc8c4e881a5b9d985b1a59081d1bdad95b88125160421b604482015260640161079a565b600081815260046020526040902080546001600160a01b0319166001600160a01b038416908117909155819061143182610d18565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b60008061147683610d18565b9050806001600160a01b0316846001600160a01b031614806114bd57506001600160a01b0380821660009081526005602090815260408083209388168352929052205460ff165b806114e15750836001600160a01b03166114d6846106ff565b6001600160a01b0316145b949350505050565b826001600160a01b03166114fc82610d18565b6001600160a01b0316146115225760405162461bcd60e51b815260040161079a90612386565b6001600160a01b0382166115845760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b606482015260840161079a565b61159183838360016117c7565b826001600160a01b03166115a482610d18565b6001600160a01b0316146115ca5760405162461bcd60e51b815260040161079a90612386565b600081815260046020908152604080832080546001600160a01b03199081169091556001600160a01b0387811680865260038552838620805460001901905590871680865283862080546001019055868652600290945282852080549092168417909155905184937fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b600a80546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b610669828260405180602001604052806000815250611907565b816001600160a01b0316836001600160a01b0316036117275760405162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c657200000000000000604482015260640161079a565b6001600160a01b03838116600081815260056020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b61179f8484846114e9565b6117ab8484848461193a565b61105f5760405162461bcd60e51b815260040161079a906123cb565b6117d384848484611a3b565b60018111156118425760405162461bcd60e51b815260206004820152603560248201527f455243373231456e756d657261626c653a20636f6e7365637574697665207472604482015274185b9cd9995c9cc81b9bdd081cdd5c1c1bdc9d1959605a1b606482015260840161079a565b816001600160a01b03851661189e5761189981600880546000838152600960205260408120829055600182018355919091527ff3f7a9fe364faab93b216da50a3214154f22a0a2b415b23a84c8169e8b636ee30155565b6118c1565b836001600160a01b0316856001600160a01b0316146118c1576118c18582611ac3565b6001600160a01b0384166118dd576118d881611b60565b611900565b846001600160a01b0316846001600160a01b031614611900576119008482611c0f565b5050505050565b6119118383611c53565b61191e600084848461193a565b61083b5760405162461bcd60e51b815260040161079a906123cb565b60006001600160a01b0384163b15611a3057604051630a85bd0160e11b81526001600160a01b0385169063150b7a029061197e90339089908890889060040161241d565b6020604051808303816000875af19250505080156119b9575060408051601f3d908101601f191682019092526119b69181019061245a565b60015b611a16573d8080156119e7576040519150601f19603f3d011682016040523d82523d6000602084013e6119ec565b606091505b508051600003611a0e5760405162461bcd60e51b815260040161079a906123cb565b805181602001fd5b6001600160e01b031916630a85bd0160e11b1490506114e1565b506001949350505050565b600181111561105f576001600160a01b03841615611a81576001600160a01b03841660009081526003602052604081208054839290611a7b90849061248d565b90915550505b6001600160a01b0383161561105f576001600160a01b03831660009081526003602052604081208054839290611ab89084906124a4565b909155505050505050565b60006001611ad084610d78565b611ada919061248d565b600083815260076020526040902054909150808214611b2d576001600160a01b03841660009081526006602090815260408083208584528252808320548484528184208190558352600790915290208190555b5060009182526007602090815260408084208490556001600160a01b039094168352600681528383209183525290812055565b600854600090611b729060019061248d565b60008381526009602052604081205460088054939450909284908110611b9a57611b9a612341565b906000526020600020015490508060088381548110611bbb57611bbb612341565b6000918252602080832090910192909255828152600990915260408082208490558582528120556008805480611bf357611bf36124bc565b6001900381819060005260206000200160009055905550505050565b6000611c1a83610d78565b6001600160a01b039093166000908152600660209081526040808320868452825280832085905593825260079052919091209190915550565b6001600160a01b038216611ca95760405162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f2061646472657373604482015260640161079a565b6000818152600260205260409020546001600160a01b031615611d0e5760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000604482015260640161079a565b611d1c6000838360016117c7565b6000818152600260205260409020546001600160a01b031615611d815760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000604482015260640161079a565b6001600160a01b038216600081815260036020908152604080832080546001019055848352600290915280822080546001600160a01b0319168417905551839291907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b828054611df890612276565b90600052602060002090601f016020900481019282611e1a5760008555611e60565b82601f10611e3357805160ff1916838001178555611e60565b82800160010185558215611e60579182015b82811115611e60578251825591602001919060010190611e45565b50611e6c929150611eb5565b5090565b6040805160608101909152600080825260208201908152602001611eb0604051806040016040528060006001600160a01b03168152602001600081525090565b905290565b5b80821115611e6c5760008155600101611eb6565b6001600160e01b03198116811461118557600080fd5b600060208284031215611ef257600080fd5b81356110d281611eca565b634e487b7160e01b600052604160045260246000fd5b600067ffffffffffffffff80841115611f2e57611f2e611efd565b604051601f8501601f19908116603f01168101908282118183101715611f5657611f56611efd565b81604052809350858152868686011115611f6f57600080fd5b858560208301376000602087830101525050509392505050565b600060208284031215611f9b57600080fd5b813567ffffffffffffffff811115611fb257600080fd5b8201601f81018413611fc357600080fd5b6114e184823560208401611f13565b60005b83811015611fed578181015183820152602001611fd5565b8381111561105f5750506000910152565b60008151808452612016816020860160208601611fd2565b601f01601f19169290920160200192915050565b6020815260006110d26020830184611ffe565b60006020828403121561204f57600080fd5b5035919050565b6001600160a01b038116811461118557600080fd5b6000806040838503121561207e57600080fd5b823561208981612056565b946020939093013593505050565b6000806000606084860312156120ac57600080fd5b83356120b781612056565b925060208401356120c781612056565b929592945050506040919091013590565b6000806000606084860312156120ed57600080fd5b8335925060208401356120c781612056565b634e487b7160e01b600052602160045260246000fd5b81518152602082015160808201906002811061214157634e487b7160e01b600052602160045260246000fd5b80602084015250604083015160018060a01b038151166040840152602081015160608401525092915050565b60006020828403121561217f57600080fd5b81356110d281612056565b6000806040838503121561219d57600080fd5b82356121a881612056565b9150602083013580151581146121bd57600080fd5b809150509250929050565b600080600080608085870312156121de57600080fd5b84356121e981612056565b935060208501356121f981612056565b925060408501359150606085013567ffffffffffffffff81111561221c57600080fd5b8501601f8101871361222d57600080fd5b61223c87823560208401611f13565b91505092959194509250565b6000806040838503121561225b57600080fd5b823561226681612056565b915060208301356121bd81612056565b600181811c9082168061228a57607f821691505b6020821081036122aa57634e487b7160e01b600052602260045260246000fd5b50919050565b6020808252602d908201527f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560408201526c1c881bdc88185c1c1c9bdd9959609a1b606082015260800190565b60006020828403121561230f57600080fd5b81516110d281612056565b6020808252600d908201526c24a72b20a624a22fa7aba722a960991b604082015260600190565b634e487b7160e01b600052603260045260246000fd5b60008351612369818460208801611fd2565b83519083019061237d818360208801611fd2565b01949350505050565b60208082526025908201527f4552433732313a207472616e736665722066726f6d20696e636f72726563742060408201526437bbb732b960d91b606082015260800190565b60208082526032908201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606082015260800190565b6001600160a01b038581168252841660208201526040810183905260806060820181905260009061245090830184611ffe565b9695505050505050565b60006020828403121561246c57600080fd5b81516110d281611eca565b634e487b7160e01b600052601160045260246000fd5b60008282101561249f5761249f612477565b500390565b600082198211156124b7576124b7612477565b500190565b634e487b7160e01b600052603160045260246000fdfea164736f6c634300080e000a";

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
