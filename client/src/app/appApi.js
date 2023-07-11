import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const appApi = createApi({
  reducerPath: 'appApi', 
  baseQuery: fetchBaseQuery({baseUrl: 'http://127.0.0.1:5000/'}),
  
  endpoints: (build) => ({

    endpoint: build.mutation({
      query: (params) => ({
        url: `graph`,
        method: 'POST', 
        body: params
      }) 
    }),
    
  })
})

export const { 
  useCreateGraphMutation,
} = appApi
