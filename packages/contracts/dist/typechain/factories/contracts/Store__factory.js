"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Store__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
const ethers_1 = require("ethers");
const _abi = [
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "uint256",
                name: "dropId",
                type: "uint256",
            },
        ],
        name: "DropCreated",
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
        inputs: [
            {
                internalType: "uint256",
                name: "maxSupply",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "mintPrice",
                type: "uint256",
            },
            {
                internalType: "uint8",
                name: "versions",
                type: "uint8",
            },
        ],
        name: "createDrop",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "dropId",
                type: "uint256",
            },
        ],
        name: "drop",
        outputs: [
            {
                internalType: "contract Drop",
                name: "",
                type: "address",
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
        inputs: [],
        name: "renounceOwnership",
        outputs: [],
        stateMutability: "nonpayable",
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
                name: "newOwner",
                type: "address",
            },
        ],
        name: "transferOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
const _bytecode = "0x6080604052600060025534801561001557600080fd5b5061001f33610024565b610074565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b613052806100836000396000f3fe60806040523480156200001157600080fd5b50600436106200006a5760003560e01c80630d88b460146200006f57806318160ddd1462000088578063211d9a53146200009e578063715018a614620000e35780638da5cb5b14620000ed578063f2fde38b14620000ff575b600080fd5b62000086620000803660046200033a565b62000116565b005b6002546040519081526020015b60405180910390f35b620000ca620000af3660046200037b565b6000908152600160205260409020546001600160a01b031690565b6040516001600160a01b03909116815260200162000095565b62000086620001e5565b6000546001600160a01b0316620000ca565b620000866200011036600462000395565b620001fd565b6200012062000280565b600060025490508084848460405162000139906200032c565b9384526020840192909252604083015260ff166060820152608001604051809103906000f08015801562000171573d6000803e3d6000fd5b50600082815260016020526040812080546001600160a01b0319166001600160a01b0393909316929092179091556002805491620001af83620003c7565b909155505060405181907f01a6d33d95d2560a8c53f00317beb1d0364b3ecf2d43f647d2b4671df27f4f4590600090a250505050565b620001ef62000280565b620001fb6000620002dc565b565b6200020762000280565b6001600160a01b038116620002725760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084015b60405180910390fd5b6200027d81620002dc565b50565b6000546001600160a01b03163314620001fb5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640162000269565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b612c5680620003f083390190565b6000806000606084860312156200035057600080fd5b8335925060208401359150604084013560ff811681146200037057600080fd5b809150509250925092565b6000602082840312156200038e57600080fd5b5035919050565b600060208284031215620003a857600080fd5b81356001600160a01b0381168114620003c057600080fd5b9392505050565b600060018201620003e857634e487b7160e01b600052601160045260246000fd5b506001019056fe610120604081905260006101008190526200001d91600b9162000497565b506040805160208101918290526000908190526200003e91600c9162000497565b503480156200004c57600080fd5b5060405162002c5638038062002c568339810160408190526200006f916200053d565b6040518060400160405280600581526020016444524f502360d81b815250620000a385620001d660201b6200127c1760201c565b604051602001620000b6929190620005b2565b6040516020818303038152906040526040518060400160405280600581526020016444524f502360d81b815250620000f986620001d660201b6200127c1760201c565b6040516020016200010c929190620005b2565b60408051601f1981840301815291905281516200013190600090602085019062000497565b5080516200014790600190602084019062000497565b505050620001646200015e6200027a60201b60201c565b6200027e565b60008111620001ad5760405162461bcd60e51b815260206004820152601060248201526f494e56414c49445f56455253494f4e5360801b60448201526064015b60405180910390fd5b608084905260a083905260c082905260e0819052620001cc32620002d0565b5050505062000625565b60606000620001f0836200034f60201b6200130f1760201c565b60010190506000816001600160401b03811115620002125762000212620005d3565b6040519080825280601f01601f1916602001820160405280156200023d576020820181803683370190505b5090508181016020015b600019016f181899199a1a9b1b9c1cb0b131b232b360811b600a86061a8153600a85049450846200024757509392505050565b3390565b600a80546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b620002da62000439565b6001600160a01b038116620003415760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401620001a4565b6200034c816200027e565b50565b6000807a184f03e93ff9f4daa797ed6e38ed64bf6a1f010000000000000000831062000399577a184f03e93ff9f4daa797ed6e38ed64bf6a1f010000000000000000830492506040015b6d04ee2d6d415b85acef81000000008310620003c6576d04ee2d6d415b85acef8100000000830492506020015b662386f26fc100008310620003e557662386f26fc10000830492506010015b6305f5e1008310620003fe576305f5e100830492506008015b61271083106200041357612710830492506004015b6064831062000426576064830492506002015b600a831062000433576001015b92915050565b600a546001600160a01b03163314620004955760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401620001a4565b565b828054620004a590620005e9565b90600052602060002090601f016020900481019282620004c9576000855562000514565b82601f10620004e457805160ff191683800117855562000514565b8280016001018555821562000514579182015b8281111562000514578251825591602001919060010190620004f7565b506200052292915062000526565b5090565b5b8082111562000522576000815560010162000527565b600080600080608085870312156200055457600080fd5b505082516020840151604085015160609095015191969095509092509050565b6000815160005b818110156200059757602081850181015186830152016200057b565b81811115620005a7576000828601525b509290920192915050565b6000620005cb620005c4838662000574565b8462000574565b949350505050565b634e487b7160e01b600052604160045260246000fd5b600181811c90821680620005fe57607f821691505b6020821081036200061f57634e487b7160e01b600052602260045260246000fd5b50919050565b60805160a05160c05160e0516125e262000674600039600081816106540152610fcb015260008181610512015261102d0152600081816105b80152610f670152600061033501526125e26000f3fe6080604052600436106101e35760003560e01c806358326b7a11610102578063a0712d6811610095578063d5abeb0111610064578063d5abeb01146105a9578063e985e9c5146105dc578063f2fde38b14610625578063f8b1cb3c1461064557600080fd5b8063a0712d6814610536578063a22cb46514610549578063b88d4fde14610569578063c87b56dd1461058957600080fd5b806379575294116100d157806379575294146104b05780638da5cb5b146104d057806395d89b41146104ee578063a035b1fe1461050357600080fd5b806358326b7a1461042e5780636352211e1461045b57806370a082311461047b578063715018a61461049b57600080fd5b80632a778c9b1161017a57806338bd05e01161014957806338bd05e0146103b95780633ccfd60b146103d957806342842e0e146103ee5780634f6ccce71461040e57600080fd5b80632a778c9b146103265780632f745c591461035957806330176e1314610379578063361c60361461039957600080fd5b8063095ea7b3116101b6578063095ea7b3146102b057806317f38959146102d257806318160ddd146102e757806323b872dd1461030657600080fd5b806301ffc9a7146101e857806306fdde031461021d57806307fdb4ea1461023f578063081812fc14610290575b600080fd5b3480156101f457600080fd5b50610208610203366004611fe3565b610678565b60405190151581526020015b60405180910390f35b34801561022957600080fd5b506102326106a3565b6040516102149190612058565b34801561024b57600080fd5b5061027861025a366004612080565b6001600160a01b039081166000908152600e60205260409020541690565b6040516001600160a01b039091168152602001610214565b34801561029c57600080fd5b506102786102ab36600461209d565b610735565b3480156102bc57600080fd5b506102d06102cb3660046120b6565b61075c565b005b3480156102de57600080fd5b50610232610876565b3480156102f357600080fd5b506008545b604051908152602001610214565b34801561031257600080fd5b506102d06103213660046120e2565b610885565b34801561033257600080fd5b507f00000000000000000000000000000000000000000000000000000000000000006102f8565b34801561036557600080fd5b506102f86103743660046120b6565b6108b6565b34801561038557600080fd5b506102d06103943660046121af565b61094c565b3480156103a557600080fd5b506102d06103b43660046121f8565b61096b565b3480156103c557600080fd5b506102d06103d436600461221f565b610c4c565b3480156103e557600080fd5b506102d0610c82565b3480156103fa57600080fd5b506102d06104093660046120e2565b610cb9565b34801561041a57600080fd5b506102f861042936600461209d565b610cd4565b34801561043a57600080fd5b5061044e61044936600461209d565b610d67565b604051610214919061226e565b34801561046757600080fd5b5061027861047636600461209d565b610e34565b34801561048757600080fd5b506102f8610496366004612080565b610e94565b3480156104a757600080fd5b506102d0610f1a565b3480156104bc57600080fd5b506102d06104cb3660046121af565b610f2e565b3480156104dc57600080fd5b50600a546001600160a01b0316610278565b3480156104fa57600080fd5b50610232610f49565b34801561050f57600080fd5b507f00000000000000000000000000000000000000000000000000000000000000006102f8565b6102d061054436600461209d565b610f58565b34801561055557600080fd5b506102d06105643660046122c6565b611159565b34801561057557600080fd5b506102d06105843660046122f9565b611164565b34801561059557600080fd5b506102326105a436600461209d565b61119c565b3480156105b557600080fd5b507f00000000000000000000000000000000000000000000000000000000000000006102f8565b3480156105e857600080fd5b506102086105f736600461221f565b6001600160a01b03918216600090815260056020908152604080832093909416825291909152205460ff1690565b34801561063157600080fd5b506102d0610640366004612080565b611203565b34801561065157600080fd5b507f00000000000000000000000000000000000000000000000000000000000000006102f8565b60006001600160e01b0319821663780e9d6360e01b148061069d575061069d826113e7565b92915050565b6060600080546106b290612379565b80601f01602080910402602001604051908101604052809291908181526020018280546106de90612379565b801561072b5780601f106107005761010080835404028352916020019161072b565b820191906000526020600020905b81548152906001019060200180831161070e57829003601f168201915b5050505050905090565b600061074082611437565b506000908152600460205260409020546001600160a01b031690565b600061076782610e34565b9050806001600160a01b0316836001600160a01b0316036107d95760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656044820152603960f91b60648201526084015b60405180910390fd5b336001600160a01b03821614806107f557506107f581336105f7565b6108675760405162461bcd60e51b815260206004820152603d60248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60448201527f6b656e206f776e6572206f7220617070726f76656420666f7220616c6c00000060648201526084016107d0565b6108718383611496565b505050565b6060600b80546106b290612379565b61088f3382611504565b6108ab5760405162461bcd60e51b81526004016107d0906123b3565b610871838383611583565b60006108c183610e94565b82106109235760405162461bcd60e51b815260206004820152602b60248201527f455243373231456e756d657261626c653a206f776e657220696e646578206f7560448201526a74206f6620626f756e647360a81b60648201526084016107d0565b506001600160a01b03919091166000908152600660209081526040808320938352929052205490565b6109546116f4565b805161096790600c906020840190611eef565b5050565b6000838152600d6020526040902060085484106109b95760405162461bcd60e51b815260206004820152600c60248201526b13d55517d3d197d093d5539160a21b60448201526064016107d0565b6040516331a9108f60e11b81526004810185905233903090636352211e90602401602060405180830381865afa1580156109f7573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a1b9190612400565b6001600160a01b031614610a415760405162461bcd60e51b81526004016107d09061241d565b600060018083015460ff1690811115610a5c57610a5c612258565b14610a9b5760405162461bcd60e51b815260206004820152600f60248201526e1053149150511657d3555510551151608a1b60448201526064016107d0565b6001600160a01b038381166000908152600e60205260409020541680610b51576040516331a9108f60e11b81526004810184905233906001600160a01b03861690636352211e90602401602060405180830381865afa158015610b02573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b269190612400565b6001600160a01b031614610b4c5760405162461bcd60e51b81526004016107d09061241d565b610be4565b6040516331a9108f60e11b81526004810184905233906001600160a01b03831690636352211e906024016020604051808303816000875af1158015610b9a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bbe9190612400565b6001600160a01b031614610be45760405162461bcd60e51b81526004016107d09061241d565b6001828101805460ff1916828002179055506002820180546001600160a01b0319166001600160a01b0386161790556003820183905560405185907fe0ff833392b9f001daba1da86ad0f9c9ab3f34ddd5a7dc6f7d3dffee0df8110e90600090a25050505050565b610c546116f4565b6001600160a01b039182166000908152600e6020526040902080546001600160a01b03191691909216179055565b610c8a6116f4565b6040514790339082156108fc029083906000818181858888f19350505050158015610967573d6000803e3d6000fd5b61087183838360405180602001604052806000815250611164565b6000610cdf60085490565b8210610d425760405162461bcd60e51b815260206004820152602c60248201527f455243373231456e756d657261626c653a20676c6f62616c20696e646578206f60448201526b7574206f6620626f756e647360a01b60648201526084016107d0565b60088281548110610d5557610d55612444565b90600052602060002001549050919050565b610d6f611f73565b6008548210610db35760405162461bcd60e51b815260206004820152601060248201526f1253959053125117d513d2d15397d25160821b60448201526064016107d0565b6000828152600d602090815260409182902082516060810190935280548352600180820154919284019160ff1690811115610df057610df0612258565b6001811115610e0157610e01612258565b81526040805180820190915260028301546001600160a01b03168152600390920154602083810191909152015292915050565b6000818152600260205260408120546001600160a01b03168061069d5760405162461bcd60e51b8152602060048201526018602482015277115490cdcc8c4e881a5b9d985b1a59081d1bdad95b88125160421b60448201526064016107d0565b60006001600160a01b038216610efe5760405162461bcd60e51b815260206004820152602960248201527f4552433732313a2061646472657373207a65726f206973206e6f7420612076616044820152683634b21037bbb732b960b91b60648201526084016107d0565b506001600160a01b031660009081526003602052604090205490565b610f226116f4565b610f2c600061174e565b565b610f366116f4565b805161096790600b906020840190611eef565b6060600180546106b290612379565b6000610f6360085490565b90507f00000000000000000000000000000000000000000000000000000000000000008110610fc95760405162461bcd60e51b815260206004820152601260248201527113505617d4d55414131657d4915050d2115160721b60448201526064016107d0565b7f000000000000000000000000000000000000000000000000000000000000000082111561102b5760405162461bcd60e51b815260206004820152600f60248201526e24a72b20a624a22fab22a929a4a7a760891b60448201526064016107d0565b7f0000000000000000000000000000000000000000000000000000000000000000341461108a5760405162461bcd60e51b815260206004820152600d60248201526c494e56414c49445f46554e445360981b60448201526064016107d0565b61109433826117a0565b60408051606081018252838152600060208083018281528451808601865283815280830184905284860152858352600d90915292902081518155915160018084018054939493909160ff199091169083818111156110f4576110f4612258565b021790555060409182015180516002830180546001600160a01b0319166001600160a01b03909216919091179055602001516003909101555181907f176b02bb2d12439ff7a20b59f402cca16c76f50508b13ef3166a600eb719354a90600090a25050565b6109673383836117ba565b61116e3383611504565b61118a5760405162461bcd60e51b81526004016107d0906123b3565b61119684848484611888565b50505050565b60606111a782611437565b60006111b16118bb565b905060008151116111d157604051806020016040528060008152506111fc565b806111db8461127c565b6040516020016111ec92919061245a565b6040516020818303038152906040525b9392505050565b61120b6116f4565b6001600160a01b0381166112705760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016107d0565b6112798161174e565b50565b606060006112898361130f565b600101905060008167ffffffffffffffff8111156112a9576112a9612123565b6040519080825280601f01601f1916602001820160405280156112d3576020820181803683370190505b5090508181016020015b600019016f181899199a1a9b1b9c1cb0b131b232b360811b600a86061a8153600a85049450846112dd57509392505050565b60008072184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b831061134e5772184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b830492506040015b6d04ee2d6d415b85acef8100000000831061137a576d04ee2d6d415b85acef8100000000830492506020015b662386f26fc10000831061139857662386f26fc10000830492506010015b6305f5e10083106113b0576305f5e100830492506008015b61271083106113c457612710830492506004015b606483106113d6576064830492506002015b600a831061069d5760010192915050565b60006001600160e01b031982166380ac58cd60e01b148061141857506001600160e01b03198216635b5e139f60e01b145b8061069d57506301ffc9a760e01b6001600160e01b031983161461069d565b6000818152600260205260409020546001600160a01b03166112795760405162461bcd60e51b8152602060048201526018602482015277115490cdcc8c4e881a5b9d985b1a59081d1bdad95b88125160421b60448201526064016107d0565b600081815260046020526040902080546001600160a01b0319166001600160a01b03841690811790915581906114cb82610e34565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b60008061151083610e34565b9050806001600160a01b0316846001600160a01b0316148061155757506001600160a01b0380821660009081526005602090815260408083209388168352929052205460ff165b8061157b5750836001600160a01b031661157084610735565b6001600160a01b0316145b949350505050565b826001600160a01b031661159682610e34565b6001600160a01b0316146115bc5760405162461bcd60e51b81526004016107d090612489565b6001600160a01b03821661161e5760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b60648201526084016107d0565b61162b83838360016118ca565b826001600160a01b031661163e82610e34565b6001600160a01b0316146116645760405162461bcd60e51b81526004016107d090612489565b600081815260046020908152604080832080546001600160a01b03199081169091556001600160a01b0387811680865260038552838620805460001901905590871680865283862080546001019055868652600290945282852080549092168417909155905184937fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b600a546001600160a01b03163314610f2c5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016107d0565b600a80546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b610967828260405180602001604052806000815250611a0a565b816001600160a01b0316836001600160a01b03160361181b5760405162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c65720000000000000060448201526064016107d0565b6001600160a01b03838116600081815260056020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b611893848484611583565b61189f84848484611a3d565b6111965760405162461bcd60e51b81526004016107d0906124ce565b6060600c80546106b290612379565b6118d684848484611b3e565b60018111156119455760405162461bcd60e51b815260206004820152603560248201527f455243373231456e756d657261626c653a20636f6e7365637574697665207472604482015274185b9cd9995c9cc81b9bdd081cdd5c1c1bdc9d1959605a1b60648201526084016107d0565b816001600160a01b0385166119a15761199c81600880546000838152600960205260408120829055600182018355919091527ff3f7a9fe364faab93b216da50a3214154f22a0a2b415b23a84c8169e8b636ee30155565b6119c4565b836001600160a01b0316856001600160a01b0316146119c4576119c48582611bc6565b6001600160a01b0384166119e0576119db81611c63565b611a03565b846001600160a01b0316846001600160a01b031614611a0357611a038482611d12565b5050505050565b611a148383611d56565b611a216000848484611a3d565b6108715760405162461bcd60e51b81526004016107d0906124ce565b60006001600160a01b0384163b15611b3357604051630a85bd0160e11b81526001600160a01b0385169063150b7a0290611a81903390899088908890600401612520565b6020604051808303816000875af1925050508015611abc575060408051601f3d908101601f19168201909252611ab99181019061255d565b60015b611b19573d808015611aea576040519150601f19603f3d011682016040523d82523d6000602084013e611aef565b606091505b508051600003611b115760405162461bcd60e51b81526004016107d0906124ce565b805181602001fd5b6001600160e01b031916630a85bd0160e11b14905061157b565b506001949350505050565b6001811115611196576001600160a01b03841615611b84576001600160a01b03841660009081526003602052604081208054839290611b7e908490612590565b90915550505b6001600160a01b03831615611196576001600160a01b03831660009081526003602052604081208054839290611bbb9084906125a7565b909155505050505050565b60006001611bd384610e94565b611bdd9190612590565b600083815260076020526040902054909150808214611c30576001600160a01b03841660009081526006602090815260408083208584528252808320548484528184208190558352600790915290208190555b5060009182526007602090815260408084208490556001600160a01b039094168352600681528383209183525290812055565b600854600090611c7590600190612590565b60008381526009602052604081205460088054939450909284908110611c9d57611c9d612444565b906000526020600020015490508060088381548110611cbe57611cbe612444565b6000918252602080832090910192909255828152600990915260408082208490558582528120556008805480611cf657611cf66125bf565b6001900381819060005260206000200160009055905550505050565b6000611d1d83610e94565b6001600160a01b039093166000908152600660209081526040808320868452825280832085905593825260079052919091209190915550565b6001600160a01b038216611dac5760405162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f206164647265737360448201526064016107d0565b6000818152600260205260409020546001600160a01b031615611e115760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e7465640000000060448201526064016107d0565b611e1f6000838360016118ca565b6000818152600260205260409020546001600160a01b031615611e845760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e7465640000000060448201526064016107d0565b6001600160a01b038216600081815260036020908152604080832080546001019055848352600290915280822080546001600160a01b0319168417905551839291907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b828054611efb90612379565b90600052602060002090601f016020900481019282611f1d5760008555611f63565b82601f10611f3657805160ff1916838001178555611f63565b82800160010185558215611f63579182015b82811115611f63578251825591602001919060010190611f48565b50611f6f929150611fb8565b5090565b6040805160608101909152600080825260208201908152602001611fb3604051806040016040528060006001600160a01b03168152602001600081525090565b905290565b5b80821115611f6f5760008155600101611fb9565b6001600160e01b03198116811461127957600080fd5b600060208284031215611ff557600080fd5b81356111fc81611fcd565b60005b8381101561201b578181015183820152602001612003565b838111156111965750506000910152565b60008151808452612044816020860160208601612000565b601f01601f19169290920160200192915050565b6020815260006111fc602083018461202c565b6001600160a01b038116811461127957600080fd5b60006020828403121561209257600080fd5b81356111fc8161206b565b6000602082840312156120af57600080fd5b5035919050565b600080604083850312156120c957600080fd5b82356120d48161206b565b946020939093013593505050565b6000806000606084860312156120f757600080fd5b83356121028161206b565b925060208401356121128161206b565b929592945050506040919091013590565b634e487b7160e01b600052604160045260246000fd5b600067ffffffffffffffff8084111561215457612154612123565b604051601f8501601f19908116603f0116810190828211818310171561217c5761217c612123565b8160405280935085815286868601111561219557600080fd5b858560208301376000602087830101525050509392505050565b6000602082840312156121c157600080fd5b813567ffffffffffffffff8111156121d857600080fd5b8201601f810184136121e957600080fd5b61157b84823560208401612139565b60008060006060848603121561220d57600080fd5b8335925060208401356121128161206b565b6000806040838503121561223257600080fd5b823561223d8161206b565b9150602083013561224d8161206b565b809150509250929050565b634e487b7160e01b600052602160045260246000fd5b81518152602082015160808201906002811061229a57634e487b7160e01b600052602160045260246000fd5b80602084015250604083015160018060a01b038151166040840152602081015160608401525092915050565b600080604083850312156122d957600080fd5b82356122e48161206b565b91506020830135801515811461224d57600080fd5b6000806000806080858703121561230f57600080fd5b843561231a8161206b565b9350602085013561232a8161206b565b925060408501359150606085013567ffffffffffffffff81111561234d57600080fd5b8501601f8101871361235e57600080fd5b61236d87823560208401612139565b91505092959194509250565b600181811c9082168061238d57607f821691505b6020821081036123ad57634e487b7160e01b600052602260045260246000fd5b50919050565b6020808252602d908201527f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560408201526c1c881bdc88185c1c1c9bdd9959609a1b606082015260800190565b60006020828403121561241257600080fd5b81516111fc8161206b565b6020808252600d908201526c24a72b20a624a22fa7aba722a960991b604082015260600190565b634e487b7160e01b600052603260045260246000fd5b6000835161246c818460208801612000565b835190830190612480818360208801612000565b01949350505050565b60208082526025908201527f4552433732313a207472616e736665722066726f6d20696e636f72726563742060408201526437bbb732b960d91b606082015260800190565b60208082526032908201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606082015260800190565b6001600160a01b03858116825284166020820152604081018390526080606082018190526000906125539083018461202c565b9695505050505050565b60006020828403121561256f57600080fd5b81516111fc81611fcd565b634e487b7160e01b600052601160045260246000fd5b6000828210156125a2576125a261257a565b500390565b600082198211156125ba576125ba61257a565b500190565b634e487b7160e01b600052603160045260246000fdfea164736f6c634300080e000aa164736f6c634300080e000a";
const isSuperArgs = (xs) => xs.length > 1;
class Store__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (isSuperArgs(args)) {
            super(...args);
        }
        else {
            super(_abi, _bytecode, args[0]);
        }
    }
    deploy(overrides) {
        return super.deploy(overrides || {});
    }
    getDeployTransaction(overrides) {
        return super.getDeployTransaction(overrides || {});
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
exports.Store__factory = Store__factory;
Store__factory.bytecode = _bytecode;
Store__factory.abi = _abi;
