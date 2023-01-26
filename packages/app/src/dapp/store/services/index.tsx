import { normalizeIPFSUrl } from "@/dapp/utils";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { NFTsByCollection, Drip, Drips, Drop } from "@sshlabs/typings";

import { io } from "socket.io-client";

export const socket = io("ws://localhost:3001");

// Transform functions
const getDropTransformResponse = (drop: Drop) => {
  for (const version of drop.metadata.versions) {
    version.texture = normalizeIPFSUrl(version.texture);
  }

  drop.metadata = {
    ...drop.metadata,
    model: normalizeIPFSUrl(drop.metadata.model),
  };

  return drop;
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
      async onCacheEntryAdded(arg, { updateCachedData, cacheDataLoaded, cacheEntryRemoved }) {
        try {
          await cacheDataLoaded;

          socket.on(`update_drop_${arg.dropId}`, (event: { data: Drop }) => {
            const data = getDropTransformResponse(event.data);
            updateCachedData((draft) => {
              return data;
            });
          });
        } catch {}
        await cacheEntryRemoved;
      },
    }),
    //
    getDrip: builder.query<Drip, { dropId: number; dripId: number }>({
      query: ({ dropId, dripId }) => `drip/${dropId}/${dripId}`,
      async onCacheEntryAdded(arg, { updateCachedData, cacheDataLoaded, cacheEntryRemoved }) {
        try {
          await cacheDataLoaded;

          socket.on(`update_drop_${arg.dropId}_drip_${arg.dripId}`, (event: { data: Drip }) => {
            const data = event.data;
            updateCachedData((draft) => {
              return data;
            });
          });
        } catch {}
        await cacheEntryRemoved;
      },
    }),
    //
    getAssets: builder.query<NFTsByCollection, { address: string }>({
      query: ({ address }) => `assets/${address}`,
    }),
    //
    getDrips: builder.query<Drips, { address: string }>({
      query: ({ address }) => `drip/${address}`,
      async onCacheEntryAdded(arg, { updateCachedData, cacheDataLoaded, cacheEntryRemoved }) {
        try {
          await cacheDataLoaded;

          socket.on(`update_drips_${arg.address}`, (event: { data: Drip[] }) => {
            const data = event.data;
            updateCachedData((draft) => {
              draft.splice(0, draft.length, ...data);
            });
          });
        } catch {}
        await cacheEntryRemoved;
      },
    }),
  }),
});

export const { useGetAssetsQuery, useGetDripQuery, useGetDripsQuery, useGetDropQuery } = dropApi;
