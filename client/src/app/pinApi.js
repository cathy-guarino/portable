import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const pinApi = createApi({
  reducerPath: 'pinApi', 
  baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:5001/api/v1/pins/'}),
  
  endpoints: (build) => ({

    addPin: build.mutation({
        query: () => ({
          url: `/test`,
          method: 'POST',
        }),
    }),
    removePin: build.mutation({
        query: id => ({
          url: `/${id}`,
          method: 'DELETE',
        }),
    }),

  })
})

export const { 
  addPin,
  removePin, 
} = pinApi
