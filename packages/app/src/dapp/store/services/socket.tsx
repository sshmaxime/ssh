import { normalizeIPFSUrl } from "@/dapp/utils";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Drop } from "@sshlabs/typings";

import { io } from "socket.io-client";

export const socket = io("ws://localhost:3001");

//   return drops;
// };
// export const socketApi = createApi({
//   reducerPath: "socketApi",
//   baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/" }),
//   endpoints: (build) => ({
//     getDrops: build.query<Drop[], any>({
//       query: () => "drops",
//       transformResponse(baseQueryReturnValue, meta, arg) {
//         return transformResponse(baseQueryReturnValue as Drop[]);
//       },
//       async onCacheEntryAdded(arg, { updateCachedData, cacheDataLoaded, cacheEntryRemoved }) {
//         // create a websocket connection when the cache subscription starts

//         try {
//           // wait for the initial query to resolve before proceeding
//           await cacheDataLoaded;

//           // when data is received from the socket connection to the server,
//           // if it is a message and for the appropriate channel,
//           // update our query result with the received message

//           socket.on("update_drops", (event) => {
//             const data = transformResponse(event.data);

//             updateCachedData((draft) => {
//               draft.splice(0, draft.length, ...data);
//             });
//           });

//           //
//         } catch {
//           // no-op in case `cacheEntryRemoved` resolves before `cacheDataLoaded`,
//           // in which case `cacheDataLoaded` will throw
//           console.log("xx");
//         }
//         // cacheEntryRemoved will resolve when the cache subscription is no longer active
//         await cacheEntryRemoved;
//         // perform cleanup steps once the `cacheEntryRemoved` promise resolves
//         socket.close();
//         console.log("la");
//       },
//     }),
//   }),
// });

// export const { useGetDropsQuery } = socketApi;
