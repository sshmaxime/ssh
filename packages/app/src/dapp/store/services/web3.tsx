import { sdk } from "@/dapp/sdk";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { NFT } from "@sshlabs/typings";

export interface Web3 {
  auth: boolean;
  address: string;
  name: string | null;
  txPending: boolean;
}

const initialState: Web3 = {
  auth: false,
  address: "",
  name: "",
  txPending: false,
};

export const login = createAsyncThunk("web3/login", async () => {
  await sdk.init();
  const { address, name } = sdk.getInfo();

  return { address, name };
});

export const mint = createAsyncThunk(
  "web3/mint",
  async (obj: {
    address: string;
    versionId: number;
    value: string;
    nft: NFT;
    isDefault?: {
      valueMint: string;
    };
  }) => {
    if (obj.nft.contract !== "") {
      if (obj.isDefault) {
        obj.nft.id = await sdk.mintDefault(obj.nft.contract, obj.isDefault.valueMint);
      }
      await sdk.mintAndMutate(obj.address, obj.versionId, obj.value, obj.nft);
    } else {
      console.log("la");
      await sdk.mint(obj.address, obj.versionId, obj.value);
    }
  }
);

export const mutate = createAsyncThunk(
  "web3/mutate",
  async (obj: {
    contractAddress: string;
    tokenId: number;
    contractMutator: string;
    tokenIdMutator: number;
  }) => {
    await sdk.mutate(obj.contractAddress, obj.tokenId, obj.contractMutator, obj.tokenIdMutator);
  }
);

const web3 = createSlice({
  name: "counter",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      state.auth = true;
      state.address = action.payload.address;
      state.name = action.payload.name;
    });
    builder.addCase(mint.pending, (state, action) => {
      state.txPending = true;
    });
    builder.addCase(mint.fulfilled, (state, action) => {
      state.txPending = false;
    });
  },
});

export default web3.reducer;
