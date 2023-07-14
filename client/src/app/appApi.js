import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const appApi = createApi({
  reducerPath: 'appApi', 
  baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:5000/api/v1'}),
  
  endpoints: (build) => ({

    search: build.query({
        query: searchTerm => ({url: `/guardian/search?searchTerm=${searchTerm}`}),
    }),
      
    getItem: build.query({
        query: id => `/guardian/article?id=${id}`,
    }),

  })
})

export const { 
  useSearchQuery,
  useGetItemQuery,
} = appApi
