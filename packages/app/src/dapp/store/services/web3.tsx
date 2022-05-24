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
  await sdk.connect();
  const { address } = sdk.getInfo();

  return address;
});

const web3 = createSlice({
  name: "counter",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      state.auth = true;
      state.address = action.payload;
    });
  },
});

export default web3.reducer;
