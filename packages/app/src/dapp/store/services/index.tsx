import { normalizeIPFSUrl } from "@/dapp/utils";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { NFTsByCollection, Drip, Drips, Drop } from "@sshlabs/typings";

// Transform functions
const getDropTransformResponse = (drop: Drop) => {
  for (const version of drop.metadata.versions) {
    version.texture = normalizeIPFSUrl(version.texture);
  }

  drop.metadata = {
    ...drop.metadata,
    model: normalizeIPFSUrl(drop.metadata.model),
  };
};

export const dropApi = createApi({
  reducerPath: "dropApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/" }),
  endpoints: (builder) => ({
    //
    getDrop: builder.query<Drop, { dropId: number }>({
      query: ({ dropId }) => `drop/${dropId}`,
      transformResponse(baseQueryReturnValue, meta, arg) {
        return getDropTransformResponse(baseQueryReturnValue as Drop);
      },
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

export const { useGetAssetsQuery, useGetDripQuery, useGetDripsQuery, useGetDropQuery } = dropApi;
