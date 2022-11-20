import { BigNumber, ethers, Signer } from "ethers";
import { SSHDrop__factory } from "@sshlabs/contracts";
import { info } from "../../info";
import { NFT } from "@sshlabs/typings";

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
      this._name = (await this.provider.lookupAddress(this._address)) || "cool human";
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
  mint = async (contractAddress: string, versionId: number, value: string) => {
    const contract = SSHDrop__factory.connect(contractAddress, this._signer);
    await contract.mint(versionId, { value: value });
  };

  mintAndMutate = async (contractAddress: string, versionId: number, value: string, nft: NFT) => {
    const contract = SSHDrop__factory.connect(contractAddress, this._signer);
    const tx = await contract.mint(versionId, { value: value });

    const receipt = await tx.wait();

    if (receipt.events) {
      const mintedEvent = receipt.events[1];
      const mintedTokenId = ((mintedEvent.args as any).tokenId as BigNumber).toNumber();
      await contract.mutateDropItem(mintedTokenId, nft.contract, nft.id);
    }
  };
  //
  //
  //
  mutate = async (
    contractAddress: string,
    tokenId: number,
    contractMutator: string,
    tokenIdMutator: number
  ) => {
    const contract = SSHDrop__factory.connect(contractAddress, this._signer);
    await contract.mutateDropItem(tokenId, contractMutator, tokenIdMutator);
  };
}

export const sdk = new SDK();
