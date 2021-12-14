import { ethers, Signer } from "ethers";

class SDK {
  private _signer: Signer | undefined;
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

  //
  connect = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    await provider.send("eth_requestAccounts", []);
    await this._setSigner(provider.getSigner());
  };
}

export const sdk = new SDK();
