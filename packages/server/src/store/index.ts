import {
  ERC721Enumerable__factory,
  Drop__factory,
  Store as StoreContract,
  Store__factory,
  TestERC721__factory,
} from "@sshlabs/contracts";
import { BigNumber, ethers, Event } from "ethers";

import {
  Drip,
  Drips,
  Drop,
  DropMetadata,
  Drops,
  NFTs,
  ListMockTokens,
  DripStatus,
  NFT,
} from "@sshlabs/typings";
import axios from "axios";
import { axios as OpenSeaCli } from "../clients";
import { ADDRESS_STORE, ENV, IPFS_GATEWAY, WEB3_ENDPOINT } from "../config";
import { IPFS_EXP } from "../_constants";
import io from "../server/io";

const defaultItemImg =
  "https://i.seadn.io/gae/u318gzdW-M73Uwe9pg26cMZKb6LJItJB4-iCpMZQ8bfh7Kbo0dropDsYdwiiWKeEQ9eQVNTroC0KJeIDJ-hmo3Hm_55GZD_mvpKY?auto=format&w=1000";

export class Store {
  private Provider: ethers.providers.JsonRpcProvider;

  private Store: StoreContract;

  private DROPS: Drops = [];

  constructor() {
    this.Provider = new ethers.providers.JsonRpcProvider(WEB3_ENDPOINT);
    this.Store = Store__factory.connect(ADDRESS_STORE, this.Provider);
  }

  // init
  init = async () => {
    await this.snapshot();
    // await this.initBlockchainListeners();
    await this.initDropsListeners();
  };

  private snapshot = async () => {
    const dropSupply = await this.Store.totalSupply();

    for (let i = BigNumber.from(0); i.lt(dropSupply); i = i.add(1)) {
      const drop = await this.snapshotDrop(i);
      this.DROPS.push(drop);
    }
  };

  private snapshotDrop = async (dropId: BigNumber): Promise<Drop> => {
    const dropContractAddress = await this.Store.drop(dropId);
    const dropContract = Drop__factory.connect(dropContractAddress, this.Provider);

    const metadataUrl = (await dropContract.dropURI()).replace(IPFS_EXP, IPFS_GATEWAY);
    const metadata = (await axios.get(metadataUrl)).data as DropMetadata;

    const defaultCollectionAddress = await dropContract.defaultItem();
    const defaultCollection = TestERC721__factory.connect(defaultCollectionAddress, this.Provider);

    return {
      address: dropContractAddress,
      id: dropId.toNumber(),
      symbol: await dropContract.symbol(),
      price: (await dropContract.price()).toString(),
      maxSupply: (await dropContract.maxSupply()).toNumber(),
      currentSupply: (await dropContract.totalSupply()).toNumber(),
      defaultItem: {
        address: defaultCollectionAddress,
        name: await defaultCollection.name(),
        symbol: await defaultCollection.symbol(),
        img: defaultItemImg,
        price: (await defaultCollection.price()).toString(),
      },
      metadata: metadata,
    };
  };

  getLocalAssetsTest = async (address: string) => {
    const NFTs: NFTs = [];

    for (const listName in ListMockTokens) {
      const list = ListMockTokens[listName];

      const contract = ERC721Enumerable__factory.connect(list.contract, this.Provider);
      const nbAssets = (await contract.balanceOf(address)).toNumber();

      for (let nb = 0; nb < nbAssets; nb++) {
        const tokenId = (await contract.tokenOfOwnerByIndex(address, nb)).toNumber();

        NFTs.push({
          address: list.contract,
          img: list.tokens[tokenId],
          id: tokenId,
          name: await contract.name(),
          symbol: await contract.symbol(),
        });
      }
    }

    return NFTs;
  };

  private initDropsListeners = async () => {
    const dropSupply = await this.Store.totalSupply();

    for (let i = BigNumber.from(0); i.lt(dropSupply); i = i.add(1)) {
      await this.initDropListeners(i);
    }
  };

  private initDropListeners = async (dropIdAsBn: BigNumber) => {
    const dropId = dropIdAsBn.toNumber();

    const startBlockNumber = await this.Provider.getBlockNumber();

    const dropContractAddress = await this.Store.drop(dropId);
    const dropContract = Drop__factory.connect(dropContractAddress, this.Provider);

    // event Mint
    dropContract.on(dropContract.filters.Minted(null), async (...args) => {
      const event = args[args.length - 1] as Event;
      if (event.blockNumber <= startBlockNumber) return; // do not react to this event

      const tokenId = (event.args.tokenId as BigNumber).toNumber();
      const user = await dropContract.ownerOf(tokenId);

      const dripsOwnedByUser = await this.getDripOwnedByAddress(user);

      this.DROPS[dropId].currentSupply++;
      io.emit(`update_drop_${dropId}`, { data: this.getState()[dropId] });
      io.emit(`update_drips_${user}`, { data: dripsOwnedByUser });
    });

    dropContract.on(dropContract.filters.Mutated(null), async (...args) => {
      const event = args[args.length - 1] as Event;
      if (event.blockNumber <= startBlockNumber) return; // do not react to this event

      const tokenId = (event.args.tokenId as BigNumber).toNumber();
      const user = await dropContract.ownerOf(tokenId);

      const dripsOwnedByUser = await this.getDripOwnedByAddress(user);

      this.DROPS[dropId].currentSupply++;
      io.emit(`update_drips_${user}`, { data: dripsOwnedByUser });
    });
  };

  getState = () => {
    return this.DROPS;
  };

  getDrop = (dropId: number) => {
    return this.DROPS[dropId];
  };

  getDrip = async (dropId: number, tokenId: number): Promise<Drip> => {
    const dropContractAddress = await this.Store.drop(dropId);
    const dropContract = Drop__factory.connect(dropContractAddress, this.Provider);
    const drip = await dropContract.drip(tokenId);
    const drop = this.getDrop(dropId);

    const nft = (async () => {
      if (drip.status === DripStatus.MUTATED) {
        // If mutated by default item
        if (drip.mutation.token === drop.defaultItem.address) {
          return {
            ...drop.defaultItem,
            id: drip.mutation.tokenId.toNumber(),
          };
        } else {
          return await this.getNft(drip.mutation.token, drip.mutation.tokenId.toNumber());
        }
      }
      return undefined;
    })();

    return {
      drop: drop,
      id: tokenId,
      version: drip.versionId.toNumber(),
      img: "", // TODO
      status: drip.status,
      owner: await dropContract.ownerOf(tokenId),
      nft: await nft,
    };
  };

  getNft = async (contractAddress: string, tokenId: number): Promise<NFT> => {
    if (ENV === "TEST") {
      for (const listName in ListMockTokens) {
        const list = ListMockTokens[listName];

        if (list.contract === contractAddress) {
          const contract = ERC721Enumerable__factory.connect(list.contract, this.Provider);
          return {
            address: list.contract,
            img: list.tokens[tokenId],
            id: tokenId,
            name: await contract.name(),
            symbol: await contract.symbol(),
          };
        }
      }

      return undefined;
    }

    const asset = (
      await OpenSeaCli.get(`https://api.opensea.io/api/v1/asset/${contractAddress}/${tokenId}`)
    ).data;
    const nft: NFT = {
      address: asset.asset_contract.address,
      img: asset.image_url,
      id: asset.token_id,
      name: asset.collection.name,
      symbol: asset.collection.symbol,
    };
    return nft;
  };

  getDripOwnedByAddress = async (address: string) => {
    const dropSupply = (await this.Store.totalSupply()).toNumber();

    const dripsByAddress: Drips = [];
    for (let dropId = 0; dropId < dropSupply; dropId++) {
      const dropContractAddress = await this.Store.drop(dropId);
      const dropContract = Drop__factory.connect(dropContractAddress, this.Provider);

      const balanceDripOfAddress = (await dropContract.balanceOf(address)).toNumber();
      const addressTokenIds: number[] = [];
      for (let dripIndex = 0; dripIndex < balanceDripOfAddress; dripIndex++) {
        const tokenId = (await dropContract.tokenOfOwnerByIndex(address, dripIndex)).toNumber();
        dripsByAddress.push(await this.getDrip(dropId, tokenId));
        addressTokenIds.push(tokenId);
      }
    }
    return dripsByAddress;
  };
}

export default new Store();
