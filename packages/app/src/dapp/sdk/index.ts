import { ethers, Signer } from "ethers";
import { SSHDrop__factory } from "@sshlabs/contracts";
import { info } from "../../info";

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
      this._name = "foobar.eth";
    } else {
      this._name = (await this.provider.lookupAddress(this._address)) || "user";
    }
  };

  init = async () => {
    this.provider = new ethers.providers.Web3Provider(window.ethereum);

    await this.provider.send("eth_requestAccounts", []);
    await this._setSigner(this.provider.getSigner() as Signer);
  };
  //
  //
  //
  mint = async (contractAddress: string, value: string) => {
    const contract = SSHDrop__factory.connect(contractAddress, this._signer);
    await contract.mint({ value: value });
  };
}

export const sdk = new SDK();
