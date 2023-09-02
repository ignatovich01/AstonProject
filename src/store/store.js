import { configureStore } from '@reduxjs/toolkit';
import { favorites } from './slices/favoriteSlice';
import { history } from './slices/historySlice';
import { moviesApi } from './API/moviesAPI';

export const store = configureStore({
   reducer: {
      [moviesApi.reducerPath]: moviesApi.reducer,
      favorites,
      history,
   },
   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(moviesApi.middleware),
});
