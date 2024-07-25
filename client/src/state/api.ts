import { FetchBaseQueryError, createApi } from "@reduxjs/toolkit/query/react";
import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { QueryReturnValue } from "@reduxjs/toolkit/dist/query/baseQueryTypes";
import { GetKpisResponse, GetProductsResponse,GetTransactionsResponse } from "./types";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:1337" }),
  reducerPath: "main",
  tagTypes: ["Kpis","Products","Transactions"],
  endpoints: (build) => ({
    getKpis: build.query<Array<GetKpisResponse>, void>({
      query: () => "kpi/kpis",
      providesTags: ["Kpis"],
    }),
    getProducts: build.query<Array<GetProductsResponse>, void>({
      query: () => "product/products",
      providesTags: ["Products"],
    }),

    getTransactions: build.query<Array<GetTransactionsResponse>, void>({
      query: () => "transaction/transactions",
      providesTags: ["Transactions"],
    }),
  }),
});

// export const {
//   useGetKpisQuery,
// }: { useGetKpisQuery: () => QueryReturnValue<void, FetchBaseQueryError, {}> } =
//   api;

export const { useGetKpisQuery, useGetProductsQuery,useGetTransactionsQuery} =
  api;
