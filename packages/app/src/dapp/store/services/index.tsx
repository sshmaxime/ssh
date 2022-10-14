import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { AssetsOwned, DRIP, DripsOwned, Drop } from "@sshlabs/typings";

export const dropApi = createApi({
  reducerPath: "dropApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/" }),
  endpoints: (builder) => ({
    //
    getDrops: builder.query<Drop, {}>({
      query: ({}) => `drops/`,
    }),
    //
    getDrip: builder.query<DRIP, { dropId: number; tokenId: number }>({
      query: ({ dropId, tokenId }) => `drip/${dropId}/${tokenId}`,
    }),
    //
    getAssets: builder.query<AssetsOwned, { address: string }>({
      query: ({ address }) => `assets/${address}`,
    }),
    //
    getDrips: builder.query<DripsOwned, { address: string }>({
      query: ({ address }) => `drip/${address}`,
    }),
  }),
});

export const { useGetAssetsQuery, useGetDripQuery, useGetDripsQuery, useGetDropsQuery } = dropApi;
