
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const postApi = createApi({

    reducerPath: 'postApi',

    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:4000/',
    }),

    endpoints: (builder) => ({
        getAllPost: builder.query({
            query: () => ({
                url: 'db',
                method: 'GET'
            })
        }),
    }),

})

export const { useGetAllPostQuery } = postApi








// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// export const postApi = createApi({
//   reducerPath: 'postApi',
//   baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/', }),
//   endpoints: (builder) => ({
//     getAllPost: builder.query({
//       querry: () =>({
//           url: 'posts',
//           method: 'GET'
//       })
//     }),
//   }),
// })
// export const { useGetAllPostQuery } = postApi


