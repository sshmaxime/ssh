import { ethers, Signer } from "ethers";
import { SSHDrop__factory } from "@sshlabs/contracts";

class SDK {
  private _signer!: Signer;
  private _address: string;

  constructor() {
    this._address = "";
  }

  // getters
  getInfo = () => {
    return {
      address: this._address,
    };
  };

  _setSigner = async (newSigner: Signer) => {
    this._signer = newSigner;
    this._address = await newSigner.getAddress();
  };

  init = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    await provider.send("eth_requestAccounts", []);
    this._signer = provider.getSigner() as Signer;
    this._address = await this._signer.getAddress();
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
