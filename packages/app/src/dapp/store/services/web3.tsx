import { sdk } from "@/dapp/sdk";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export interface Web3 {
  auth: boolean;
  address: string;
}

const initialState: Web3 = {
  auth: false,
  address: "",
};

export const login = createAsyncThunk("web3/login", async () => {
  await sdk.init();
  const { address } = sdk.getInfo();

  return address;
});

export const mint = createAsyncThunk(
  "web3/mint",
  async (obj: { address: string; value: string }) => {
    await sdk.mint(obj.address, obj.value);
  }
);

const web3 = createSlice({
  name: "counter",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      state.auth = true;
      state.address = action.payload;
    });
    builder.addCase(mint.fulfilled, (state, action) => {});
  },
});

export default web3.reducer;
