import { Signer, BigNumberish, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { SSHDrop, SSHDropInterface } from "../SSHDrop";
declare type SSHDropConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class SSHDrop__factory extends ContractFactory {
    constructor(...args: SSHDropConstructorParams);
    deploy(id: BigNumberish, _maxSupply: BigNumberish, _price: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<SSHDrop>;
    getDeployTransaction(id: BigNumberish, _maxSupply: BigNumberish, _price: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): SSHDrop;
    connect(signer: Signer): SSHDrop__factory;
    static readonly bytecode = "0x60e06040523480156200001157600080fd5b50604051620027e1380380620027e1833981016040819052620000349162000447565b6040518060400160405280600e81526020016d029a9a4102620a12990222927a8160951b81525062000071846200015660201b620010cf1760201c565b60405160200162000084929190620004b4565b6040516020818303038152906040526040518060400160405280600681526020016544524f50202360d01b815250620000c8856200015660201b620010cf1760201c565b604051602001620000db929190620004b4565b60408051601f19818403018152919052815162000100906000906020850190620003a1565b50805162000116906001906020840190620003a1565b505050620001336200012d6200027660201b60201c565b6200027a565b608083905260a082905260c08190526200014d32620002cc565b505050620005e0565b6060816000036200017e5750506040805180820190915260018152600360fc1b602082015290565b8160005b8115620001ae57806200019581620004e3565b9150620001a69050600a8362000515565b915062000182565b6000816001600160401b03811115620001cb57620001cb6200052c565b6040519080825280601f01601f191660200182016040528015620001f6576020820181803683370190505b5090505b84156200026e576200020e60018362000542565b91506200021d600a866200055c565b6200022a90603062000573565b60f81b8183815181106200024257620002426200058e565b60200101906001600160f81b031916908160001a90535062000266600a8662000515565b9450620001fa565b949350505050565b3390565b600a80546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b600a546001600160a01b031633146200032c5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064015b60405180910390fd5b6001600160a01b038116620003935760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b606482015260840162000323565b6200039e816200027a565b50565b828054620003af90620005a4565b90600052602060002090601f016020900481019282620003d357600085556200041e565b82601f10620003ee57805160ff19168380011785556200041e565b828001600101855582156200041e579182015b828111156200041e57825182559160200191906001019062000401565b506200042c92915062000430565b5090565b5b808211156200042c576000815560010162000431565b6000806000606084860312156200045d57600080fd5b8351925060208401519150604084015190509250925092565b6000815160005b818110156200049957602081850181015186830152016200047d565b81811115620004a9576000828601525b509290920192915050565b60006200026e620004c6838662000476565b8462000476565b634e487b7160e01b600052601160045260246000fd5b600060018201620004f857620004f8620004cd565b5060010190565b634e487b7160e01b600052601260045260246000fd5b600082620005275762000527620004ff565b500490565b634e487b7160e01b600052604160045260246000fd5b600082821015620005575762000557620004cd565b500390565b6000826200056e576200056e620004ff565b500690565b60008219821115620005895762000589620004cd565b500190565b634e487b7160e01b600052603260045260246000fd5b600181811c90821680620005b957607f821691505b602082108103620005da57634e487b7160e01b600052602260045260246000fd5b50919050565b60805160a05160c0516121c36200061e600039600081816104e60152610bc10152600081816105990152610ad5015260006102a001526121c36000f3fe60806040526004361061019c5760003560e01c80636ecd2306116100ec578063a22cb4651161008a578063c8a7512611610064578063c8a751261461056a578063d5abeb011461058a578063e985e9c5146105bd578063f2fde38b1461060657600080fd5b8063a22cb4651461050a578063b88d4fde1461052a578063c87b56dd1461054a57600080fd5b80637f4bc5f2116100c65780637f4bc5f2146104845780638da5cb5b146104a457806395d89b41146104c2578063a035b1fe146104d757600080fd5b80636ecd23061461043c57806370a082311461044f578063715018a61461046f57600080fd5b80632a778c9b1161015957806342842e0e1161013357806342842e0e146103045780634f6ccce7146103245780634fe9f69f146103445780636352211e1461041c57600080fd5b80632a778c9b146102915780632f745c59146102c45780634218d4e5146102e457600080fd5b806301ffc9a7146101a157806306fdde03146101d6578063081812fc146101f8578063095ea7b31461023057806318160ddd1461025257806323b872dd14610271575b600080fd5b3480156101ad57600080fd5b506101c16101bc366004611b50565b610626565b60405190151581526020015b60405180910390f35b3480156101e257600080fd5b506101eb610651565b6040516101cd9190611bc5565b34801561020457600080fd5b50610218610213366004611bd8565b6106e3565b6040516001600160a01b0390911681526020016101cd565b34801561023c57600080fd5b5061025061024b366004611c0d565b61077d565b005b34801561025e57600080fd5b506008545b6040519081526020016101cd565b34801561027d57600080fd5b5061025061028c366004611c37565b61088d565b34801561029d57600080fd5b507f0000000000000000000000000000000000000000000000000000000000000000610263565b3480156102d057600080fd5b506102636102df366004611c0d565b6108be565b3480156102f057600080fd5b506102506102ff366004611d10565b610954565b34801561031057600080fd5b5061025061031f366004611c37565b6109a1565b34801561033057600080fd5b5061026361033f366004611bd8565b6109bc565b34801561035057600080fd5b506103db61035f366004611bd8565b604080516080810182526000808252602082018190529181018290526060810191909152506000908152600c60209081526040918290208251608081018452815460ff8082161515835261010082041693820193909352620100009092046001600160a01b031692820192909252600190910154606082015290565b6040516101cd919081511515815260208083015160ff16908201526040808301516001600160a01b0316908201526060918201519181019190915260800190565b34801561042857600080fd5b50610218610437366004611bd8565b610a4f565b61025061044a366004611d72565b610ac6565b34801561045b57600080fd5b5061026361046a366004611d8d565b610cde565b34801561047b57600080fd5b50610250610d65565b34801561049057600080fd5b506101eb61049f366004611d72565b610d9b565b3480156104b057600080fd5b50600a546001600160a01b0316610218565b3480156104ce57600080fd5b506101eb610e41565b3480156104e357600080fd5b507f0000000000000000000000000000000000000000000000000000000000000000610263565b34801561051657600080fd5b50610250610525366004611da8565b610e50565b34801561053657600080fd5b50610250610545366004611de4565b610f14565b34801561055657600080fd5b506101eb610565366004611bd8565b610f4c565b34801561057657600080fd5b50610250610585366004611e60565b505050565b34801561059657600080fd5b507f0000000000000000000000000000000000000000000000000000000000000000610263565b3480156105c957600080fd5b506101c16105d8366004611e85565b6001600160a01b03918216600090815260056020908152604080832093909416825291909152205460ff1690565b34801561061257600080fd5b50610250610621366004611d8d565b611034565b60006001600160e01b0319821663780e9d6360e01b148061064b575061064b826111d8565b92915050565b60606000805461066090611eb8565b80601f016020809104026020016040519081016040528092919081815260200182805461068c90611eb8565b80156106d95780601f106106ae576101008083540402835291602001916106d9565b820191906000526020600020905b8154815290600101906020018083116106bc57829003601f168201915b5050505050905090565b6000818152600260205260408120546001600160a01b03166107615760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b60648201526084015b60405180910390fd5b506000908152600460205260409020546001600160a01b031690565b600061078882610a4f565b9050806001600160a01b0316836001600160a01b0316036107f55760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656044820152603960f91b6064820152608401610758565b336001600160a01b0382161480610811575061081181336105d8565b6108835760405162461bcd60e51b815260206004820152603860248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760448201527f6e6572206e6f7220617070726f76656420666f7220616c6c00000000000000006064820152608401610758565b6105858383611228565b6108973382611296565b6108b35760405162461bcd60e51b815260040161075890611ef2565b610585838383611389565b60006108c983610cde565b821061092b5760405162461bcd60e51b815260206004820152602b60248201527f455243373231456e756d657261626c653a206f776e657220696e646578206f7560448201526a74206f6620626f756e647360a81b6064820152608401610758565b506001600160a01b03919091166000908152600660209081526040808320938352929052205490565b600a546001600160a01b0316331461097e5760405162461bcd60e51b815260040161075890611f43565b60ff82166000908152600b60209081526040909120825161058592840190611aa1565b61058583838360405180602001604052806000815250610f14565b60006109c760085490565b8210610a2a5760405162461bcd60e51b815260206004820152602c60248201527f455243373231456e756d657261626c653a20676c6f62616c20696e646578206f60448201526b7574206f6620626f756e647360a01b6064820152608401610758565b60088281548110610a3d57610a3d611f78565b90600052602060002001549050919050565b6000818152600260205260408120546001600160a01b03168061064b5760405162461bcd60e51b815260206004820152602960248201527f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460448201526832b73a103a37b5b2b760b91b6064820152608401610758565b6000610ad160085490565b90507f0000000000000000000000000000000000000000000000000000000000000000808210610b385760405162461bcd60e51b815260206004820152601260248201527113505617d4d55414131657d4915050d2115160721b6044820152606401610758565b60408051600080825260208083018085528351902060ff88168352600b909152908390209092610b689201611f8e565b6040516020818303038152906040528051906020012003610bbf5760405162461bcd60e51b815260206004820152601160248201527024a721a7a92922a1aa2fab22a929a4a7a760791b6044820152606401610758565b7f00000000000000000000000000000000000000000000000000000000000000003414610c205760405162461bcd60e51b815260206004820152600f60248201526e494e434f52524543545f46554e445360881b6044820152606401610758565b610c2a3383611534565b60408051608081018252600180825260ff86811660208085019182526000858701818152606087018281528a8352600c909352878220965187549451915161ffff1990951690151561ff0019161761010091909516029390931762010000600160b01b031916620100006001600160a01b0390931692909202919091178455519290910191909155905183917f176b02bb2d12439ff7a20b59f402cca16c76f50508b13ef3166a600eb719354a91a2505050565b60006001600160a01b038216610d495760405162461bcd60e51b815260206004820152602a60248201527f4552433732313a2062616c616e636520717565727920666f7220746865207a65604482015269726f206164647265737360b01b6064820152608401610758565b506001600160a01b031660009081526003602052604090205490565b600a546001600160a01b03163314610d8f5760405162461bcd60e51b815260040161075890611f43565b610d996000611552565b565b60ff81166000908152600b60205260409020805460609190610dbc90611eb8565b80601f0160208091040260200160405190810160405280929190818152602001828054610de890611eb8565b8015610e355780601f10610e0a57610100808354040283529160200191610e35565b820191906000526020600020905b815481529060010190602001808311610e1857829003601f168201915b50505050509050919050565b60606001805461066090611eb8565b336001600160a01b03831603610ea85760405162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c6572000000000000006044820152606401610758565b3360008181526005602090815260408083206001600160a01b03871680855290835292819020805460ff191686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b610f1e3383611296565b610f3a5760405162461bcd60e51b815260040161075890611ef2565b610f46848484846115a4565b50505050565b6000818152600260205260409020546060906001600160a01b0316610fcb5760405162461bcd60e51b815260206004820152602f60248201527f4552433732314d657461646174613a2055524920717565727920666f72206e6f60448201526e3732bc34b9ba32b73a103a37b5b2b760891b6064820152608401610758565b6000610fe260408051602081019091526000815290565b90506000815111611002576040518060200160405280600081525061102d565b8061100c846110cf565b60405160200161101d929190612029565b6040516020818303038152906040525b9392505050565b600a546001600160a01b0316331461105e5760405162461bcd60e51b815260040161075890611f43565b6001600160a01b0381166110c35760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610758565b6110cc81611552565b50565b6060816000036110f65750506040805180820190915260018152600360fc1b602082015290565b8160005b8115611120578061110a8161206e565b91506111199050600a8361209d565b91506110fa565b60008167ffffffffffffffff81111561113b5761113b611c84565b6040519080825280601f01601f191660200182016040528015611165576020820181803683370190505b5090505b84156111d05761117a6001836120b1565b9150611187600a866120c8565b6111929060306120dc565b60f81b8183815181106111a7576111a7611f78565b60200101906001600160f81b031916908160001a9053506111c9600a8661209d565b9450611169565b949350505050565b60006001600160e01b031982166380ac58cd60e01b148061120957506001600160e01b03198216635b5e139f60e01b145b8061064b57506301ffc9a760e01b6001600160e01b031983161461064b565b600081815260046020526040902080546001600160a01b0319166001600160a01b038416908117909155819061125d82610a4f565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6000818152600260205260408120546001600160a01b031661130f5760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b6064820152608401610758565b600061131a83610a4f565b9050806001600160a01b0316846001600160a01b031614806113555750836001600160a01b031661134a846106e3565b6001600160a01b0316145b806111d057506001600160a01b0380821660009081526005602090815260408083209388168352929052205460ff166111d0565b826001600160a01b031661139c82610a4f565b6001600160a01b0316146114045760405162461bcd60e51b815260206004820152602960248201527f4552433732313a207472616e73666572206f6620746f6b656e2074686174206960448201526839903737ba1037bbb760b91b6064820152608401610758565b6001600160a01b0382166114665760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b6064820152608401610758565b6114718383836115d7565b61147c600082611228565b6001600160a01b03831660009081526003602052604081208054600192906114a59084906120b1565b90915550506001600160a01b03821660009081526003602052604081208054600192906114d39084906120dc565b909155505060008181526002602052604080822080546001600160a01b0319166001600160a01b0386811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b61154e82826040518060200160405280600081525061168f565b5050565b600a80546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6115af848484611389565b6115bb848484846116c2565b610f465760405162461bcd60e51b8152600401610758906120f4565b6001600160a01b0383166116325761162d81600880546000838152600960205260408120829055600182018355919091527ff3f7a9fe364faab93b216da50a3214154f22a0a2b415b23a84c8169e8b636ee30155565b611655565b816001600160a01b0316836001600160a01b0316146116555761165583826117c3565b6001600160a01b03821661166c5761058581611860565b826001600160a01b0316826001600160a01b03161461058557610585828261190f565b6116998383611953565b6116a660008484846116c2565b6105855760405162461bcd60e51b8152600401610758906120f4565b60006001600160a01b0384163b156117b857604051630a85bd0160e11b81526001600160a01b0385169063150b7a0290611706903390899088908890600401612146565b6020604051808303816000875af1925050508015611741575060408051601f3d908101601f1916820190925261173e91810190612183565b60015b61179e573d80801561176f576040519150601f19603f3d011682016040523d82523d6000602084013e611774565b606091505b5080516000036117965760405162461bcd60e51b8152600401610758906120f4565b805181602001fd5b6001600160e01b031916630a85bd0160e11b1490506111d0565b506001949350505050565b600060016117d084610cde565b6117da91906120b1565b60008381526007602052604090205490915080821461182d576001600160a01b03841660009081526006602090815260408083208584528252808320548484528184208190558352600790915290208190555b5060009182526007602090815260408084208490556001600160a01b039094168352600681528383209183525290812055565b600854600090611872906001906120b1565b6000838152600960205260408120546008805493945090928490811061189a5761189a611f78565b9060005260206000200154905080600883815481106118bb576118bb611f78565b60009182526020808320909101929092558281526009909152604080822084905585825281205560088054806118f3576118f36121a0565b6001900381819060005260206000200160009055905550505050565b600061191a83610cde565b6001600160a01b039093166000908152600660209081526040808320868452825280832085905593825260079052919091209190915550565b6001600160a01b0382166119a95760405162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f20616464726573736044820152606401610758565b6000818152600260205260409020546001600160a01b031615611a0e5760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e746564000000006044820152606401610758565b611a1a600083836115d7565b6001600160a01b0382166000908152600360205260408120805460019290611a439084906120dc565b909155505060008181526002602052604080822080546001600160a01b0319166001600160a01b03861690811790915590518392907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b828054611aad90611eb8565b90600052602060002090601f016020900481019282611acf5760008555611b15565b82601f10611ae857805160ff1916838001178555611b15565b82800160010185558215611b15579182015b82811115611b15578251825591602001919060010190611afa565b50611b21929150611b25565b5090565b5b80821115611b215760008155600101611b26565b6001600160e01b0319811681146110cc57600080fd5b600060208284031215611b6257600080fd5b813561102d81611b3a565b60005b83811015611b88578181015183820152602001611b70565b83811115610f465750506000910152565b60008151808452611bb1816020860160208601611b6d565b601f01601f19169290920160200192915050565b60208152600061102d6020830184611b99565b600060208284031215611bea57600080fd5b5035919050565b80356001600160a01b0381168114611c0857600080fd5b919050565b60008060408385031215611c2057600080fd5b611c2983611bf1565b946020939093013593505050565b600080600060608486031215611c4c57600080fd5b611c5584611bf1565b9250611c6360208501611bf1565b9150604084013590509250925092565b803560ff81168114611c0857600080fd5b634e487b7160e01b600052604160045260246000fd5b600067ffffffffffffffff80841115611cb557611cb5611c84565b604051601f8501601f19908116603f01168101908282118183101715611cdd57611cdd611c84565b81604052809350858152868686011115611cf657600080fd5b858560208301376000602087830101525050509392505050565b60008060408385031215611d2357600080fd5b611d2c83611c73565b9150602083013567ffffffffffffffff811115611d4857600080fd5b8301601f81018513611d5957600080fd5b611d6885823560208401611c9a565b9150509250929050565b600060208284031215611d8457600080fd5b61102d82611c73565b600060208284031215611d9f57600080fd5b61102d82611bf1565b60008060408385031215611dbb57600080fd5b611dc483611bf1565b915060208301358015158114611dd957600080fd5b809150509250929050565b60008060008060808587031215611dfa57600080fd5b611e0385611bf1565b9350611e1160208601611bf1565b925060408501359150606085013567ffffffffffffffff811115611e3457600080fd5b8501601f81018713611e4557600080fd5b611e5487823560208401611c9a565b91505092959194509250565b600080600060608486031215611e7557600080fd5b83359250611c6360208501611bf1565b60008060408385031215611e9857600080fd5b611ea183611bf1565b9150611eaf60208401611bf1565b90509250929050565b600181811c90821680611ecc57607f821691505b602082108103611eec57634e487b7160e01b600052602260045260246000fd5b50919050565b60208082526031908201527f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f6040820152701ddb995c881b9bdc88185c1c1c9bdd9959607a1b606082015260800190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b634e487b7160e01b600052603260045260246000fd5b600080835481600182811c915080831680611faa57607f831692505b60208084108203611fc957634e487b7160e01b86526022600452602486fd5b818015611fdd5760018114611fee5761201b565b60ff1986168952848901965061201b565b60008a81526020902060005b868110156120135781548b820152908501908301611ffa565b505084890196505b509498975050505050505050565b6000835161203b818460208801611b6d565b83519083019061204f818360208801611b6d565b01949350505050565b634e487b7160e01b600052601160045260246000fd5b60006001820161208057612080612058565b5060010190565b634e487b7160e01b600052601260045260246000fd5b6000826120ac576120ac612087565b500490565b6000828210156120c3576120c3612058565b500390565b6000826120d7576120d7612087565b500690565b600082198211156120ef576120ef612058565b500190565b60208082526032908201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606082015260800190565b6001600160a01b038581168252841660208201526040810183905260806060820181905260009061217990830184611b99565b9695505050505050565b60006020828403121561219557600080fd5b815161102d81611b3a565b634e487b7160e01b600052603160045260246000fdfea164736f6c634300080e000a";
    static readonly abi: ({
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
        name?: undefined;
        outputs?: undefined;
    } | {
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        stateMutability?: undefined;
        outputs?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[];
    static createInterface(): SSHDropInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): SSHDrop;
}
export {};
