import { BigNumber, ethers, Signer } from "ethers";
import { TestERC721__factory, Drop__factory, ERC721__factory } from "@sshlabs/contracts";
import { info } from "../../info";
import { NFT } from "@sshlabs/typings";
import { login } from "../store/services/web3";

class SDK {
  private provider!: ethers.providers.Web3Provider;
  private _signer!: Signer;
  private _address: string;
  private _name: string | null;

  constructor() {
    this._address = "";
    this._name = "";
  }

  // getters
  getInfo = () => {
    return {
      address: this._address,
      name: this._name,
    };
  };

  _setSigner = async (newSigner: Signer) => {
    this._signer = newSigner;
    this._address = await newSigner.getAddress();

    if (info.isDev) {
      this._name = "tester.eth";
    } else {
      this._name = (await this.provider.lookupAddress(this._address)) || "cool human";
    }
    console.log(await newSigner.getAddress());
  };

  init = async (dispatch: Function) => {
    this.provider = new ethers.providers.Web3Provider(window.ethereum);

    await this.provider.send("eth_requestAccounts", []);
    await this._setSigner(this.provider.getSigner() as Signer);

    window.ethereum.on("chainChanged", () => {
      console.log("hey");
    });
    window.ethereum.on("accountsChanged", async () => {
      dispatch(login());
    });
  };

  mintDefault = async (contractAddress: string, value: string) => {
    const contract = TestERC721__factory.connect(contractAddress, this._signer);
    const tx = await contract.mintTest({ value: value });
    return tx;
  };

  mint = async (contractAddress: string, versionId: number, value: string) => {
    const contract = Drop__factory.connect(contractAddress, this._signer);
    const tx = await contract.mint(versionId, { value: value });
    return tx;
  };

  mutate = async (
    contractAddress: string,
    tokenId: number,
    contractMutator: string,
    tokenIdMutator: number
  ) => {
    const contract = Drop__factory.connect(contractAddress, this._signer);
    const tx = await contract.mutate(tokenId, contractMutator, tokenIdMutator);
    return tx;
  };
}

export const sdk = new SDK();
