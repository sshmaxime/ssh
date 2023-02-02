import { CONFIG } from "@/_config";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { NFTsByCollection, Drip, Drips, Drop } from "@sshlabs/typings";

import { io } from "socket.io-client";

export const socket = io(CONFIG.network.websocket_server_url);

export const dropApi = createApi({
  reducerPath: "dropApi",
  baseQuery: fetchBaseQuery({ baseUrl: CONFIG.network.server_url }),
  endpoints: (builder) => ({
    //
    getDrop: builder.query<Drop, { dropId: number }>({
      query: ({ dropId }) => `drop/${dropId}`,
      async onCacheEntryAdded(arg, { updateCachedData, cacheDataLoaded, cacheEntryRemoved }) {
        try {
          await cacheDataLoaded;

          socket.on(`update_drop_${arg.dropId}`, (event: { data: Drop }) => {
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
