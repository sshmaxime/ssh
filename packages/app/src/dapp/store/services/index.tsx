import { normalizeIPFSUrl } from "@/dapp/utils";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { NFTsByCollection, Drip, Drips, Drop } from "@sshlabs/typings";

export const dropApi = createApi({
  reducerPath: "dropApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/" }),
  endpoints: (builder) => ({
    //
    getDrops: builder.query<Drop, {}>({
      query: ({}) => `drops/`,
    }),
    //
    getDrip: builder.query<Drip, { dropId: number; dripId: number }>({
      query: ({ dropId, dripId }) => `drip/${dropId}/${dripId}`,
    }),
    //
    getAssets: builder.query<NFTsByCollection, { address: string }>({
      query: ({ address }) => `assets/${address}`,
    }),
    //
    getDrips: builder.query<Drips, { address: string }>({
      query: ({ address }) => `drip/${address}`,
    }),
  }),
});

export const { useGetAssetsQuery, useGetDripQuery, useGetDripsQuery, useGetDropsQuery } = dropApi;
