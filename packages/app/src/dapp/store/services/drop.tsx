import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { NFTsForDropByAddress } from "../types";

export const dropApi = createApi({
  reducerPath: "dropApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/" }),
  endpoints: (builder) => ({
    getNFTsForDropByAddress: builder.query<
      NFTsForDropByAddress,
      { dropId: number; address: string }
    >({
      query: ({ dropId, address }) => `drop/${dropId}/${address}`,
    }),
  }),
});

export const { useGetNFTsForDropByAddressQuery } = dropApi;
