import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const supplementApi = createApi({
  reducerPath: 'supplementApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://localhost:5001/api/'
  }),
  endpoints: (builder) => ({
    getAllSupplements: builder.query({
      query: () => 'supplements/'
    }),
    getSpecificSupplement: builder.query({
      query: (id) => `supplements/${id}`
    })
  })
})

export const { useGetAllSupplementsQuery, useGetSpecificSupplementQuery } = supplementApi;

export default supplementApi;