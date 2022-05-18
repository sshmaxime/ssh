import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { AssetsOwned, DripsOwned, Drop } from "@sshlabs/typings";

export const dropApi = createApi({
  reducerPath: "dropApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/" }),
  endpoints: (builder) => ({
    //
    getDrop: builder.query<Drop, { dropId: number }>({
      query: ({ dropId }) => `drop/${dropId}`,
    }),
    //
    getAssetsForDropByAddress: builder.query<AssetsOwned, { dropId: number; address: string }>({
      query: ({ dropId, address }) => `drop/${dropId}/${address}`,
    }),
    //
    getDripsByAddress: builder.query<DripsOwned, { address: string }>({
      query: ({ address }) => `drip/${address}`,
    }),
  }),
});

export const {
  useGetAssetsForDropByAddressQuery,
  useGetDripsByAddressQuery,
  useGetDropQuery,
  useLazyGetDropQuery,
} = dropApi;
