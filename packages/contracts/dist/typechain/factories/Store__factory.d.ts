import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Store, StoreInterface } from "../Store";
type StoreConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class Store__factory extends ContractFactory {
    constructor(...args: StoreConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<Store>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): Store;
    connect(signer: Signer): Store__factory;
    static readonly bytecode = "0x6080604052600060025534801561001557600080fd5b5061001f33610024565b610074565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b612f26806100836000396000f3fe60806040523480156200001157600080fd5b50600436106200006a5760003560e01c806318160ddd146200006f578063211d9a5314620000855780636da538ae14620000ca578063715018a614620000e35780638da5cb5b14620000ed578063f2fde38b14620000ff575b600080fd5b6002546040519081526020015b60405180910390f35b620000b1620000963660046200034d565b6000908152600160205260409020546001600160a01b031690565b6040516001600160a01b0390911681526020016200007c565b620000e1620000db36600462000384565b62000116565b005b620000e1620001f8565b6000546001600160a01b0316620000b1565b620000e162000110366004620003d6565b62000210565b6200012062000293565b6000600254905080858585856040516200013a906200033f565b9485526020850193909352604084019190915260ff1660608301526001600160a01b0316608082015260a001604051809103906000f08015801562000183573d6000803e3d6000fd5b50600082815260016020526040812080546001600160a01b0319166001600160a01b0393909316929092179091556002805491620001c183620003fb565b909155505060405181907f01a6d33d95d2560a8c53f00317beb1d0364b3ecf2d43f647d2b4671df27f4f4590600090a25050505050565b6200020262000293565b6200020e6000620002ef565b565b6200021a62000293565b6001600160a01b038116620002855760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084015b60405180910390fd5b6200029081620002ef565b50565b6000546001600160a01b031633146200020e5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016200027c565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b612af6806200042483390190565b6000602082840312156200036057600080fd5b5035919050565b80356001600160a01b03811681146200037f57600080fd5b919050565b600080600080608085870312156200039b57600080fd5b8435935060208501359250604085013560ff81168114620003bb57600080fd5b9150620003cb6060860162000367565b905092959194509250565b600060208284031215620003e957600080fd5b620003f48262000367565b9392505050565b6000600182016200041c57634e487b7160e01b600052601160045260246000fd5b506001019056fe610140604081905260006101208190526200001d91600b9162000440565b503480156200002b57600080fd5b5060405162002af638038062002af68339810160408190526200004e91620004e6565b6040518060400160405280600581526020016444524f502360d81b81525062000082866200017b60201b620011581760201c565b6040516020016200009592919062000581565b6040516020818303038152906040526040518060400160405280600581526020016444524f502360d81b815250620000d8876200017b60201b620011581760201c565b604051602001620000eb92919062000581565b60408051601f1981840301815291905281516200011090600090602085019062000440565b5080516200012690600190602084019062000440565b505050620001436200013d6200021f60201b60201c565b62000223565b608085905260a084905260c083905260e08290526001600160a01b03811661010052620001703262000275565b5050505050620005f4565b606060006200019583620002f860201b620011eb1760201c565b60010190506000816001600160401b03811115620001b757620001b7620005a2565b6040519080825280601f01601f191660200182016040528015620001e2576020820181803683370190505b5090508181016020015b600019016f181899199a1a9b1b9c1cb0b131b232b360811b600a86061a8153600a8504945084620001ec57509392505050565b3390565b600a80546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6200027f620003e2565b6001600160a01b038116620002ea5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084015b60405180910390fd5b620002f58162000223565b50565b6000807a184f03e93ff9f4daa797ed6e38ed64bf6a1f010000000000000000831062000342577a184f03e93ff9f4daa797ed6e38ed64bf6a1f010000000000000000830492506040015b6d04ee2d6d415b85acef810000000083106200036f576d04ee2d6d415b85acef8100000000830492506020015b662386f26fc1000083106200038e57662386f26fc10000830492506010015b6305f5e1008310620003a7576305f5e100830492506008015b6127108310620003bc57612710830492506004015b60648310620003cf576064830492506002015b600a8310620003dc576001015b92915050565b600a546001600160a01b031633146200043e5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401620002e1565b565b8280546200044e90620005b8565b90600052602060002090601f016020900481019282620004725760008555620004bd565b82601f106200048d57805160ff1916838001178555620004bd565b82800160010185558215620004bd579182015b82811115620004bd578251825591602001919060010190620004a0565b50620004cb929150620004cf565b5090565b5b80821115620004cb5760008155600101620004d0565b600080600080600060a08688031215620004ff57600080fd5b855160208701516040880151606089015160808a0151939850919650945092506001600160a01b03811681146200053557600080fd5b809150509295509295909350565b6000815160005b818110156200056657602081850181015186830152016200054a565b8181111562000576576000828601525b509290920192915050565b60006200059a62000593838662000543565b8462000543565b949350505050565b634e487b7160e01b600052604160045260246000fd5b600181811c90821680620005cd57607f821691505b602082108103620005ee57634e487b7160e01b600052602260045260246000fd5b50919050565b60805160a05160c05160e051610100516124af6200064760003960006101d601526000610e600152600081816104920152610ec40152600081816105380152610dfc0152600061032a01526124af6000f3fe6080604052600436106101c25760003560e01c806358326b7a116100f7578063a0712d6811610095578063d5abeb0111610064578063d5abeb0114610529578063e985e9c51461055c578063edc5d158146105a5578063f2fde38b146105c557600080fd5b8063a0712d68146104b6578063a22cb465146104c9578063b88d4fde146104e9578063c87b56dd1461050957600080fd5b8063715018a6116100d1578063715018a61461043b5780638da5cb5b1461045057806395d89b411461046e578063a035b1fe1461048357600080fd5b806358326b7a146103ce5780636352211e146103fb57806370a082311461041b57600080fd5b806318160ddd116101645780632f745c591161013e5780632f745c591461034e578063361c60361461036e57806342842e0e1461038e5780634f6ccce7146103ae57600080fd5b806318160ddd146102dc57806323b872dd146102fb5780632a778c9b1461031b57600080fd5b806306fdde03116101a057806306fdde0314610265578063081812fc14610287578063095ea7b3146102a75780631141d7de146102c757600080fd5b806301852613146101c757806301ffc9a71461021357806302fe530514610243575b600080fd5b3480156101d357600080fd5b507f00000000000000000000000000000000000000000000000000000000000000005b6040516001600160a01b0390911681526020015b60405180910390f35b34801561021f57600080fd5b5061023361022e366004611eb0565b6105e5565b604051901515815260200161020a565b34801561024f57600080fd5b5061026361025e366004611f59565b610610565b005b34801561027157600080fd5b5061027a61062f565b60405161020a9190611ffa565b34801561029357600080fd5b506101f66102a236600461200d565b6106c1565b3480156102b357600080fd5b506102636102c236600461203b565b6106e8565b3480156102d357600080fd5b5061027a610802565b3480156102e857600080fd5b506008545b60405190815260200161020a565b34801561030757600080fd5b50610263610316366004612067565b610811565b34801561032757600080fd5b507f00000000000000000000000000000000000000000000000000000000000000006102ed565b34801561035a57600080fd5b506102ed61036936600461203b565b610842565b34801561037a57600080fd5b506102636103893660046120a8565b6108d8565b34801561039a57600080fd5b506102636103a9366004612067565b610b68565b3480156103ba57600080fd5b506102ed6103c936600461200d565b610b83565b3480156103da57600080fd5b506103ee6103e936600461200d565b610c16565b60405161020a91906120e5565b34801561040757600080fd5b506101f661041636600461200d565b610ce4565b34801561042757600080fd5b506102ed61043636600461213d565b610d44565b34801561044757600080fd5b50610263610dca565b34801561045c57600080fd5b50600a546001600160a01b03166101f6565b34801561047a57600080fd5b5061027a610dde565b34801561048f57600080fd5b507f00000000000000000000000000000000000000000000000000000000000000006102ed565b6102636104c436600461200d565b610ded565b3480156104d557600080fd5b506102636104e436600461215a565b610ff2565b3480156104f557600080fd5b50610263610504366004612198565b610ffd565b34801561051557600080fd5b5061027a61052436600461200d565b611035565b34801561053557600080fd5b507f00000000000000000000000000000000000000000000000000000000000000006102ed565b34801561056857600080fd5b50610233610577366004612218565b6001600160a01b03918216600090815260056020908152604080832093909416825291909152205460ff1690565b3480156105b157600080fd5b506102636105c0366004612218565b6110a9565b3480156105d157600080fd5b506102636105e036600461213d565b6110df565b60006001600160e01b0319821663780e9d6360e01b148061060a575061060a826112c3565b92915050565b610618611313565b805161062b90600b906020840190611dbc565b5050565b60606000805461063e90612246565b80601f016020809104026020016040519081016040528092919081815260200182805461066a90612246565b80156106b75780601f1061068c576101008083540402835291602001916106b7565b820191906000526020600020905b81548152906001019060200180831161069a57829003601f168201915b5050505050905090565b60006106cc8261136d565b506000908152600460205260409020546001600160a01b031690565b60006106f382610ce4565b9050806001600160a01b0316836001600160a01b0316036107655760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656044820152603960f91b60648201526084015b60405180910390fd5b336001600160a01b038216148061078157506107818133610577565b6107f35760405162461bcd60e51b815260206004820152603d60248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60448201527f6b656e206f776e6572206f7220617070726f76656420666f7220616c6c000000606482015260840161075c565b6107fd83836113cc565b505050565b6060600b805461063e90612246565b61081b338261143a565b6108375760405162461bcd60e51b815260040161075c90612280565b6107fd8383836114b9565b600061084d83610d44565b82106108af5760405162461bcd60e51b815260206004820152602b60248201527f455243373231456e756d657261626c653a206f776e657220696e646578206f7560448201526a74206f6620626f756e647360a81b606482015260840161075c565b506001600160a01b03919091166000908152600660209081526040808320938352929052205490565b60085483106109215760405162461bcd60e51b81526020600482015260156024820152741513d2d1538812510813d5550813d1881093d55391605a1b604482015260640161075c565b6040516331a9108f60e11b81526004810184905233903090636352211e90602401602060405180830381865afa15801561095f573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061098391906122cd565b6001600160a01b0316146109a95760405162461bcd60e51b815260040161075c906122ea565b6001600160a01b038083166000908152600d60205260409020541680610a5f576040516331a9108f60e11b81526004810183905233906001600160a01b03851690636352211e90602401602060405180830381865afa158015610a10573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a3491906122cd565b6001600160a01b031614610a5a5760405162461bcd60e51b815260040161075c906122ea565b610af2565b6040516331a9108f60e11b81526004810183905233906001600160a01b03831690636352211e906024016020604051808303816000875af1158015610aa8573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610acc91906122cd565b6001600160a01b031614610af25760405162461bcd60e51b815260040161075c906122ea565b6000848152600c602052604090206001808201805460ff1916828002179055506002810180546001600160a01b0319166001600160a01b0386161790556003810183905560405185907fe0ff833392b9f001daba1da86ad0f9c9ab3f34ddd5a7dc6f7d3dffee0df8110e90600090a25050505050565b6107fd83838360405180602001604052806000815250610ffd565b6000610b8e60085490565b8210610bf15760405162461bcd60e51b815260206004820152602c60248201527f455243373231456e756d657261626c653a20676c6f62616c20696e646578206f60448201526b7574206f6620626f756e647360a01b606482015260840161075c565b60088281548110610c0457610c04612311565b90600052602060002001549050919050565b610c1e611e40565b6008548210610c635760405162461bcd60e51b8152602060048201526011602482015270125390d3d4949150d517d513d2d1539251607a1b604482015260640161075c565b6000828152600c602090815260409182902082516060810190935280548352600180820154919284019160ff1690811115610ca057610ca06120cf565b6001811115610cb157610cb16120cf565b81526040805180820190915260028301546001600160a01b03168152600390920154602083810191909152015292915050565b6000818152600260205260408120546001600160a01b03168061060a5760405162461bcd60e51b8152602060048201526018602482015277115490cdcc8c4e881a5b9d985b1a59081d1bdad95b88125160421b604482015260640161075c565b60006001600160a01b038216610dae5760405162461bcd60e51b815260206004820152602960248201527f4552433732313a2061646472657373207a65726f206973206e6f7420612076616044820152683634b21037bbb732b960b91b606482015260840161075c565b506001600160a01b031660009081526003602052604090205490565b610dd2611313565b610ddc600061162a565b565b60606001805461063e90612246565b6000610df860085490565b90507f00000000000000000000000000000000000000000000000000000000000000008110610e5e5760405162461bcd60e51b815260206004820152601260248201527113505617d4d55414131657d4915050d2115160721b604482015260640161075c565b7f0000000000000000000000000000000000000000000000000000000000000000821115610ec25760405162461bcd60e51b815260206004820152601160248201527024a721a7a92922a1aa2fab22a929a4a7a760791b604482015260640161075c565b7f00000000000000000000000000000000000000000000000000000000000000003414610f235760405162461bcd60e51b815260206004820152600f60248201526e494e434f52524543545f46554e445360881b604482015260640161075c565b610f2d338261167c565b60408051606081018252838152600060208083018281528451808601865283815280830184905284860152858352600c90915292902081518155915160018084018054939493909160ff19909116908381811115610f8d57610f8d6120cf565b021790555060409182015180516002830180546001600160a01b0319166001600160a01b03909216919091179055602001516003909101555181907f176b02bb2d12439ff7a20b59f402cca16c76f50508b13ef3166a600eb719354a90600090a25050565b61062b338383611696565b611007338361143a565b6110235760405162461bcd60e51b815260040161075c90612280565b61102f84848484611764565b50505050565b60606110408261136d565b600061105760408051602081019091526000815290565b9050600081511161107757604051806020016040528060008152506110a2565b8061108184611158565b604051602001611092929190612327565b6040516020818303038152906040525b9392505050565b6110b1611313565b6001600160a01b039182166000908152600d6020526040902080546001600160a01b03191691909216179055565b6110e7611313565b6001600160a01b03811661114c5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b606482015260840161075c565b6111558161162a565b50565b60606000611165836111eb565b600101905060008167ffffffffffffffff81111561118557611185611ecd565b6040519080825280601f01601f1916602001820160405280156111af576020820181803683370190505b5090508181016020015b600019016f181899199a1a9b1b9c1cb0b131b232b360811b600a86061a8153600a85049450846111b957509392505050565b60008072184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b831061122a5772184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b830492506040015b6d04ee2d6d415b85acef81000000008310611256576d04ee2d6d415b85acef8100000000830492506020015b662386f26fc10000831061127457662386f26fc10000830492506010015b6305f5e100831061128c576305f5e100830492506008015b61271083106112a057612710830492506004015b606483106112b2576064830492506002015b600a831061060a5760010192915050565b60006001600160e01b031982166380ac58cd60e01b14806112f457506001600160e01b03198216635b5e139f60e01b145b8061060a57506301ffc9a760e01b6001600160e01b031983161461060a565b600a546001600160a01b03163314610ddc5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161075c565b6000818152600260205260409020546001600160a01b03166111555760405162461bcd60e51b8152602060048201526018602482015277115490cdcc8c4e881a5b9d985b1a59081d1bdad95b88125160421b604482015260640161075c565b600081815260046020526040902080546001600160a01b0319166001600160a01b038416908117909155819061140182610ce4565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b60008061144683610ce4565b9050806001600160a01b0316846001600160a01b0316148061148d57506001600160a01b0380821660009081526005602090815260408083209388168352929052205460ff165b806114b15750836001600160a01b03166114a6846106c1565b6001600160a01b0316145b949350505050565b826001600160a01b03166114cc82610ce4565b6001600160a01b0316146114f25760405162461bcd60e51b815260040161075c90612356565b6001600160a01b0382166115545760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b606482015260840161075c565b6115618383836001611797565b826001600160a01b031661157482610ce4565b6001600160a01b03161461159a5760405162461bcd60e51b815260040161075c90612356565b600081815260046020908152604080832080546001600160a01b03199081169091556001600160a01b0387811680865260038552838620805460001901905590871680865283862080546001019055868652600290945282852080549092168417909155905184937fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b600a80546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b61062b8282604051806020016040528060008152506118d7565b816001600160a01b0316836001600160a01b0316036116f75760405162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c657200000000000000604482015260640161075c565b6001600160a01b03838116600081815260056020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b61176f8484846114b9565b61177b8484848461190a565b61102f5760405162461bcd60e51b815260040161075c9061239b565b6117a384848484611a0b565b60018111156118125760405162461bcd60e51b815260206004820152603560248201527f455243373231456e756d657261626c653a20636f6e7365637574697665207472604482015274185b9cd9995c9cc81b9bdd081cdd5c1c1bdc9d1959605a1b606482015260840161075c565b816001600160a01b03851661186e5761186981600880546000838152600960205260408120829055600182018355919091527ff3f7a9fe364faab93b216da50a3214154f22a0a2b415b23a84c8169e8b636ee30155565b611891565b836001600160a01b0316856001600160a01b031614611891576118918582611a93565b6001600160a01b0384166118ad576118a881611b30565b6118d0565b846001600160a01b0316846001600160a01b0316146118d0576118d08482611bdf565b5050505050565b6118e18383611c23565b6118ee600084848461190a565b6107fd5760405162461bcd60e51b815260040161075c9061239b565b60006001600160a01b0384163b15611a0057604051630a85bd0160e11b81526001600160a01b0385169063150b7a029061194e9033908990889088906004016123ed565b6020604051808303816000875af1925050508015611989575060408051601f3d908101601f191682019092526119869181019061242a565b60015b6119e6573d8080156119b7576040519150601f19603f3d011682016040523d82523d6000602084013e6119bc565b606091505b5080516000036119de5760405162461bcd60e51b815260040161075c9061239b565b805181602001fd5b6001600160e01b031916630a85bd0160e11b1490506114b1565b506001949350505050565b600181111561102f576001600160a01b03841615611a51576001600160a01b03841660009081526003602052604081208054839290611a4b90849061245d565b90915550505b6001600160a01b0383161561102f576001600160a01b03831660009081526003602052604081208054839290611a88908490612474565b909155505050505050565b60006001611aa084610d44565b611aaa919061245d565b600083815260076020526040902054909150808214611afd576001600160a01b03841660009081526006602090815260408083208584528252808320548484528184208190558352600790915290208190555b5060009182526007602090815260408084208490556001600160a01b039094168352600681528383209183525290812055565b600854600090611b429060019061245d565b60008381526009602052604081205460088054939450909284908110611b6a57611b6a612311565b906000526020600020015490508060088381548110611b8b57611b8b612311565b6000918252602080832090910192909255828152600990915260408082208490558582528120556008805480611bc357611bc361248c565b6001900381819060005260206000200160009055905550505050565b6000611bea83610d44565b6001600160a01b039093166000908152600660209081526040808320868452825280832085905593825260079052919091209190915550565b6001600160a01b038216611c795760405162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f2061646472657373604482015260640161075c565b6000818152600260205260409020546001600160a01b031615611cde5760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000604482015260640161075c565b611cec600083836001611797565b6000818152600260205260409020546001600160a01b031615611d515760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000604482015260640161075c565b6001600160a01b038216600081815260036020908152604080832080546001019055848352600290915280822080546001600160a01b0319168417905551839291907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b828054611dc890612246565b90600052602060002090601f016020900481019282611dea5760008555611e30565b82601f10611e0357805160ff1916838001178555611e30565b82800160010185558215611e30579182015b82811115611e30578251825591602001919060010190611e15565b50611e3c929150611e85565b5090565b6040805160608101909152600080825260208201908152602001611e80604051806040016040528060006001600160a01b03168152602001600081525090565b905290565b5b80821115611e3c5760008155600101611e86565b6001600160e01b03198116811461115557600080fd5b600060208284031215611ec257600080fd5b81356110a281611e9a565b634e487b7160e01b600052604160045260246000fd5b600067ffffffffffffffff80841115611efe57611efe611ecd565b604051601f8501601f19908116603f01168101908282118183101715611f2657611f26611ecd565b81604052809350858152868686011115611f3f57600080fd5b858560208301376000602087830101525050509392505050565b600060208284031215611f6b57600080fd5b813567ffffffffffffffff811115611f8257600080fd5b8201601f81018413611f9357600080fd5b6114b184823560208401611ee3565b60005b83811015611fbd578181015183820152602001611fa5565b8381111561102f5750506000910152565b60008151808452611fe6816020860160208601611fa2565b601f01601f19169290920160200192915050565b6020815260006110a26020830184611fce565b60006020828403121561201f57600080fd5b5035919050565b6001600160a01b038116811461115557600080fd5b6000806040838503121561204e57600080fd5b823561205981612026565b946020939093013593505050565b60008060006060848603121561207c57600080fd5b833561208781612026565b9250602084013561209781612026565b929592945050506040919091013590565b6000806000606084860312156120bd57600080fd5b83359250602084013561209781612026565b634e487b7160e01b600052602160045260246000fd5b81518152602082015160808201906002811061211157634e487b7160e01b600052602160045260246000fd5b80602084015250604083015160018060a01b038151166040840152602081015160608401525092915050565b60006020828403121561214f57600080fd5b81356110a281612026565b6000806040838503121561216d57600080fd5b823561217881612026565b91506020830135801515811461218d57600080fd5b809150509250929050565b600080600080608085870312156121ae57600080fd5b84356121b981612026565b935060208501356121c981612026565b925060408501359150606085013567ffffffffffffffff8111156121ec57600080fd5b8501601f810187136121fd57600080fd5b61220c87823560208401611ee3565b91505092959194509250565b6000806040838503121561222b57600080fd5b823561223681612026565b9150602083013561218d81612026565b600181811c9082168061225a57607f821691505b60208210810361227a57634e487b7160e01b600052602260045260246000fd5b50919050565b6020808252602d908201527f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560408201526c1c881bdc88185c1c1c9bdd9959609a1b606082015260800190565b6000602082840312156122df57600080fd5b81516110a281612026565b6020808252600d908201526c24a72b20a624a22fa7aba722a960991b604082015260600190565b634e487b7160e01b600052603260045260246000fd5b60008351612339818460208801611fa2565b83519083019061234d818360208801611fa2565b01949350505050565b60208082526025908201527f4552433732313a207472616e736665722066726f6d20696e636f72726563742060408201526437bbb732b960d91b606082015260800190565b60208082526032908201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606082015260800190565b6001600160a01b038581168252841660208201526040810183905260806060820181905260009061242090830184611fce565b9695505050505050565b60006020828403121561243c57600080fd5b81516110a281611e9a565b634e487b7160e01b600052601160045260246000fd5b60008282101561246f5761246f612447565b500390565b6000821982111561248757612487612447565b500190565b634e487b7160e01b600052603160045260246000fdfea164736f6c634300080e000aa164736f6c634300080e000a";
    static readonly abi: ({
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        outputs?: undefined;
        stateMutability?: undefined;
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
    })[];
    static createInterface(): StoreInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Store;
}
export {};
