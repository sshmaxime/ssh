import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { NFTsByCollection } from "../types";

export const dropApi = createApi({
  reducerPath: "dropApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/" }),
  endpoints: (builder) => ({
    getNFTsForDropByAddress: builder.query<NFTsByCollection, { dropId: number; address: string }>({
      query: ({ dropId, address }) => `drop/${dropId}/${address}`,
    }),
    getDripsByAddress: builder.query<NFTsByCollection, { address: string }>({
      query: ({ address }) => `drip/${address}`,
    }),
  }),
});

export const { useGetNFTsForDropByAddressQuery } = dropApi;
