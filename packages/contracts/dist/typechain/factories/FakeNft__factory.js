"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.FakeNft__factory = void 0;
const ethers_1 = require("ethers");
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
        inputs: [
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "mint",
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
                name: "_data",
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
const _bytecode = "0x60806040523480156200001157600080fd5b5060405162001a8338038062001a838339810160408190526200003491620001e1565b8151829082906200004d9060009060208501906200006e565b508051620000639060019060208401906200006e565b505050505062000287565b8280546200007c906200024b565b90600052602060002090601f016020900481019282620000a05760008555620000eb565b82601f10620000bb57805160ff1916838001178555620000eb565b82800160010185558215620000eb579182015b82811115620000eb578251825591602001919060010190620000ce565b50620000f9929150620000fd565b5090565b5b80821115620000f95760008155600101620000fe565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200013c57600080fd5b81516001600160401b038082111562000159576200015962000114565b604051601f8301601f19908116603f0116810190828211818310171562000184576200018462000114565b81604052838152602092508683858801011115620001a157600080fd5b600091505b83821015620001c55785820183015181830184015290820190620001a6565b83821115620001d75760008385830101525b9695505050505050565b60008060408385031215620001f557600080fd5b82516001600160401b03808211156200020d57600080fd5b6200021b868387016200012a565b935060208501519150808211156200023257600080fd5b5062000241858286016200012a565b9150509250929050565b600181811c908216806200026057607f821691505b6020821081036200028157634e487b7160e01b600052602260045260246000fd5b50919050565b6117ec80620002976000396000f3fe608060405234801561001057600080fd5b506004361061010b5760003560e01c80634f6ccce7116100a2578063a0712d6811610071578063a0712d6814610219578063a22cb4651461022c578063b88d4fde1461023f578063c87b56dd14610252578063e985e9c51461026557600080fd5b80634f6ccce7146101d85780636352211e146101eb57806370a08231146101fe57806395d89b411461021157600080fd5b806318160ddd116100de57806318160ddd1461018d57806323b872dd1461019f5780632f745c59146101b257806342842e0e146101c557600080fd5b806301ffc9a71461011057806306fdde0314610138578063081812fc1461014d578063095ea7b314610178575b600080fd5b61012361011e366004611312565b6102a1565b60405190151581526020015b60405180910390f35b6101406102cc565b60405161012f9190611387565b61016061015b36600461139a565b61035e565b6040516001600160a01b03909116815260200161012f565b61018b6101863660046113cf565b6103f8565b005b6008545b60405190815260200161012f565b61018b6101ad3660046113f9565b61050d565b6101916101c03660046113cf565b61053e565b61018b6101d33660046113f9565b6105d4565b6101916101e636600461139a565b6105ef565b6101606101f936600461139a565b610682565b61019161020c366004611435565b6106f9565b610140610780565b61018b61022736600461139a565b61078f565b61018b61023a366004611450565b61079c565b61018b61024d3660046114a2565b610860565b61014061026036600461139a565b610898565b61012361027336600461157e565b6001600160a01b03918216600090815260056020908152604080832093909416825291909152205460ff1690565b60006001600160e01b0319821663780e9d6360e01b14806102c657506102c682610980565b92915050565b6060600080546102db906115b1565b80601f0160208091040260200160405190810160405280929190818152602001828054610307906115b1565b80156103545780601f1061032957610100808354040283529160200191610354565b820191906000526020600020905b81548152906001019060200180831161033757829003601f168201915b5050505050905090565b6000818152600260205260408120546001600160a01b03166103dc5760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b60648201526084015b60405180910390fd5b506000908152600460205260409020546001600160a01b031690565b600061040382610682565b9050806001600160a01b0316836001600160a01b0316036104705760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656044820152603960f91b60648201526084016103d3565b336001600160a01b038216148061048c575061048c8133610273565b6104fe5760405162461bcd60e51b815260206004820152603860248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760448201527f6e6572206e6f7220617070726f76656420666f7220616c6c000000000000000060648201526084016103d3565b61050883836109d0565b505050565b6105173382610a3e565b6105335760405162461bcd60e51b81526004016103d3906115eb565b610508838383610b35565b6000610549836106f9565b82106105ab5760405162461bcd60e51b815260206004820152602b60248201527f455243373231456e756d657261626c653a206f776e657220696e646578206f7560448201526a74206f6620626f756e647360a81b60648201526084016103d3565b506001600160a01b03919091166000908152600660209081526040808320938352929052205490565b61050883838360405180602001604052806000815250610860565b60006105fa60085490565b821061065d5760405162461bcd60e51b815260206004820152602c60248201527f455243373231456e756d657261626c653a20676c6f62616c20696e646578206f60448201526b7574206f6620626f756e647360a01b60648201526084016103d3565b600882815481106106705761067061163c565b90600052602060002001549050919050565b6000818152600260205260408120546001600160a01b0316806102c65760405162461bcd60e51b815260206004820152602960248201527f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460448201526832b73a103a37b5b2b760b91b60648201526084016103d3565b60006001600160a01b0382166107645760405162461bcd60e51b815260206004820152602a60248201527f4552433732313a2062616c616e636520717565727920666f7220746865207a65604482015269726f206164647265737360b01b60648201526084016103d3565b506001600160a01b031660009081526003602052604090205490565b6060600180546102db906115b1565b6107993382610ce0565b50565b336001600160a01b038316036107f45760405162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c65720000000000000060448201526064016103d3565b3360008181526005602090815260408083206001600160a01b03871680855290835292819020805460ff191686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b61086a3383610a3e565b6108865760405162461bcd60e51b81526004016103d3906115eb565b61089284848484610cfe565b50505050565b6000818152600260205260409020546060906001600160a01b03166109175760405162461bcd60e51b815260206004820152602f60248201527f4552433732314d657461646174613a2055524920717565727920666f72206e6f60448201526e3732bc34b9ba32b73a103a37b5b2b760891b60648201526084016103d3565b600061092e60408051602081019091526000815290565b9050600081511161094e5760405180602001604052806000815250610979565b8061095884610d31565b604051602001610969929190611652565b6040516020818303038152906040525b9392505050565b60006001600160e01b031982166380ac58cd60e01b14806109b157506001600160e01b03198216635b5e139f60e01b145b806102c657506301ffc9a760e01b6001600160e01b03198316146102c6565b600081815260046020526040902080546001600160a01b0319166001600160a01b0384169081179091558190610a0582610682565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6000818152600260205260408120546001600160a01b0316610ab75760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b60648201526084016103d3565b6000610ac283610682565b9050806001600160a01b0316846001600160a01b03161480610afd5750836001600160a01b0316610af28461035e565b6001600160a01b0316145b80610b2d57506001600160a01b0380821660009081526005602090815260408083209388168352929052205460ff165b949350505050565b826001600160a01b0316610b4882610682565b6001600160a01b031614610bb05760405162461bcd60e51b815260206004820152602960248201527f4552433732313a207472616e73666572206f6620746f6b656e2074686174206960448201526839903737ba1037bbb760b91b60648201526084016103d3565b6001600160a01b038216610c125760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b60648201526084016103d3565b610c1d838383610e32565b610c286000826109d0565b6001600160a01b0383166000908152600360205260408120805460019290610c51908490611697565b90915550506001600160a01b0382166000908152600360205260408120805460019290610c7f9084906116ae565b909155505060008181526002602052604080822080546001600160a01b0319166001600160a01b0386811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b610cfa828260405180602001604052806000815250610eea565b5050565b610d09848484610b35565b610d1584848484610f1d565b6108925760405162461bcd60e51b81526004016103d3906116c6565b606081600003610d585750506040805180820190915260018152600360fc1b602082015290565b8160005b8115610d825780610d6c81611718565b9150610d7b9050600a83611747565b9150610d5c565b60008167ffffffffffffffff811115610d9d57610d9d61148c565b6040519080825280601f01601f191660200182016040528015610dc7576020820181803683370190505b5090505b8415610b2d57610ddc600183611697565b9150610de9600a8661175b565b610df49060306116ae565b60f81b818381518110610e0957610e0961163c565b60200101906001600160f81b031916908160001a905350610e2b600a86611747565b9450610dcb565b6001600160a01b038316610e8d57610e8881600880546000838152600960205260408120829055600182018355919091527ff3f7a9fe364faab93b216da50a3214154f22a0a2b415b23a84c8169e8b636ee30155565b610eb0565b816001600160a01b0316836001600160a01b031614610eb057610eb0838261101e565b6001600160a01b038216610ec757610508816110bb565b826001600160a01b0316826001600160a01b03161461050857610508828261116a565b610ef483836111ae565b610f016000848484610f1d565b6105085760405162461bcd60e51b81526004016103d3906116c6565b60006001600160a01b0384163b1561101357604051630a85bd0160e11b81526001600160a01b0385169063150b7a0290610f6190339089908890889060040161176f565b6020604051808303816000875af1925050508015610f9c575060408051601f3d908101601f19168201909252610f99918101906117ac565b60015b610ff9573d808015610fca576040519150601f19603f3d011682016040523d82523d6000602084013e610fcf565b606091505b508051600003610ff15760405162461bcd60e51b81526004016103d3906116c6565b805181602001fd5b6001600160e01b031916630a85bd0160e11b149050610b2d565b506001949350505050565b6000600161102b846106f9565b6110359190611697565b600083815260076020526040902054909150808214611088576001600160a01b03841660009081526006602090815260408083208584528252808320548484528184208190558352600790915290208190555b5060009182526007602090815260408084208490556001600160a01b039094168352600681528383209183525290812055565b6008546000906110cd90600190611697565b600083815260096020526040812054600880549394509092849081106110f5576110f561163c565b9060005260206000200154905080600883815481106111165761111661163c565b600091825260208083209091019290925582815260099091526040808220849055858252812055600880548061114e5761114e6117c9565b6001900381819060005260206000200160009055905550505050565b6000611175836106f9565b6001600160a01b039093166000908152600660209081526040808320868452825280832085905593825260079052919091209190915550565b6001600160a01b0382166112045760405162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f206164647265737360448201526064016103d3565b6000818152600260205260409020546001600160a01b0316156112695760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e7465640000000060448201526064016103d3565b61127560008383610e32565b6001600160a01b038216600090815260036020526040812080546001929061129e9084906116ae565b909155505060008181526002602052604080822080546001600160a01b0319166001600160a01b03861690811790915590518392907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b6001600160e01b03198116811461079957600080fd5b60006020828403121561132457600080fd5b8135610979816112fc565b60005b8381101561134a578181015183820152602001611332565b838111156108925750506000910152565b6000815180845261137381602086016020860161132f565b601f01601f19169290920160200192915050565b602081526000610979602083018461135b565b6000602082840312156113ac57600080fd5b5035919050565b80356001600160a01b03811681146113ca57600080fd5b919050565b600080604083850312156113e257600080fd5b6113eb836113b3565b946020939093013593505050565b60008060006060848603121561140e57600080fd5b611417846113b3565b9250611425602085016113b3565b9150604084013590509250925092565b60006020828403121561144757600080fd5b610979826113b3565b6000806040838503121561146357600080fd5b61146c836113b3565b91506020830135801515811461148157600080fd5b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b600080600080608085870312156114b857600080fd5b6114c1856113b3565b93506114cf602086016113b3565b925060408501359150606085013567ffffffffffffffff808211156114f357600080fd5b818701915087601f83011261150757600080fd5b8135818111156115195761151961148c565b604051601f8201601f19908116603f011681019083821181831017156115415761154161148c565b816040528281528a602084870101111561155a57600080fd5b82602086016020830137600060208483010152809550505050505092959194509250565b6000806040838503121561159157600080fd5b61159a836113b3565b91506115a8602084016113b3565b90509250929050565b600181811c908216806115c557607f821691505b6020821081036115e557634e487b7160e01b600052602260045260246000fd5b50919050565b60208082526031908201527f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f6040820152701ddb995c881b9bdc88185c1c1c9bdd9959607a1b606082015260800190565b634e487b7160e01b600052603260045260246000fd5b6000835161166481846020880161132f565b83519083019061167881836020880161132f565b01949350505050565b634e487b7160e01b600052601160045260246000fd5b6000828210156116a9576116a9611681565b500390565b600082198211156116c1576116c1611681565b500190565b60208082526032908201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606082015260800190565b60006001820161172a5761172a611681565b5060010190565b634e487b7160e01b600052601260045260246000fd5b60008261175657611756611731565b500490565b60008261176a5761176a611731565b500690565b6001600160a01b03858116825284166020820152604081018390526080606082018190526000906117a29083018461135b565b9695505050505050565b6000602082840312156117be57600080fd5b8151610979816112fc565b634e487b7160e01b600052603160045260246000fdfea164736f6c634300080e000a";
const isSuperArgs = (xs) => xs.length > 1;
class FakeNft__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (isSuperArgs(args)) {
            super(...args);
        }
        else {
            super(_abi, _bytecode, args[0]);
        }
    }
    deploy(_name, _symbol, overrides) {
        return super.deploy(_name, _symbol, overrides || {});
    }
    getDeployTransaction(_name, _symbol, overrides) {
        return super.getDeployTransaction(_name, _symbol, overrides || {});
    }
    attach(address) {
        return super.attach(address);
    }
    connect(signer) {
        return super.connect(signer);
    }
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.FakeNft__factory = FakeNft__factory;
FakeNft__factory.bytecode = _bytecode;
FakeNft__factory.abi = _abi;
