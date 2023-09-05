import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const moviesApi = createApi({
   reducerPath: 'moviesApi',
   baseQuery: fetchBaseQuery({
      baseUrl: 'https://api.kinopoisk.dev/v1.3',
      method: 'GET',
      headers: {
         'X-API-KEY': '8A74V0P-TRKMDDF-GYJPHDK-FJCRVH6',
         Accept: 'application/json',
      },
   }),
   endpoints: (build) => ({
      getMovies: build.query({
         query: (page) => `/movie?page=${page}&limit=2`,
      }),
      getMovieById: build.query({
         query: (id) => `/movie/${id}`,
      }),
   }),
});

export const { useGetMoviesQuery, useGetMovieByIdQuery } = moviesApi;
