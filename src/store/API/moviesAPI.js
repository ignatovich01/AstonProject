import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const moviesApi = createApi({
   reducerPath: 'moviesApi',
   baseQuery: fetchBaseQuery({
      baseUrl: 'https://api.kinopoisk.dev',
      method: 'GET',
      headers: {
         'X-API-KEY': process.env.REACT_APP_KEY,
         Accept: 'application/json',
      },
   }),
   endpoints: (build) => ({
      getMovies: build.query({
         query: () => `/v1.3/movie?limit=1`,
      }),
      getMovieById: build.query({
         query: (id) => ({
            url: `/v1.3/movie/${id}`,
         }),
      }),
      getMovieByName: build.query({
         query: (movieName) => ({
            url: `/v1.3/movie`,
            params: {
               name: movieName,
            },
         }),
         transformResponse(res) {
            return res.docs;
         },
      }),
   }),
});

export const {
   useGetMoviesQuery,
   useGetMovieByIdQuery,
   useGetMovieByNameQuery,
} = moviesApi;
