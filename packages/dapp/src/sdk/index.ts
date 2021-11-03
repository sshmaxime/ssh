import { ethers } from "ethers";

class SDK {
  //
  private _connected: boolean;
  private _provider!: ethers.providers.Web3Provider;
  private _address: string;

  constructor() {
    this._connected = false;
    this._address = "";
  }

  // getters
  getInfo = () => {
    return {
      connected: this._connected,
      address: this._address,
    };
  };

  // setters
  _setConnected = (isConnected: boolean) => {
    this._connected = isConnected;
  };

  _setProvider = (newProvider: ethers.providers.Web3Provider) => {
    this._provider = newProvider;
  };

  _setAddress = (newAddress: string) => {
    this._address = newAddress;
  };

  //
  connect = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    if (provider.provider.request) {
      provider.provider.request({ method: "eth_requestAccounts" });
    }

    this._setAddress(await provider.getSigner().getAddress());
    this._setProvider(provider);
    this._setConnected(true);
  };
}

export const sdk = new SDK();
