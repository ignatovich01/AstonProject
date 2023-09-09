/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
   name: 'favorites',
   initialState: {
      favorites: [],
   },
   reducers: {
      createFavorite(state, action) {
         state.favorites = action.payload;
      },
      addToFavorite(state, action) {
         state.favorites.push(action.payload);
      },
      removeFromFavorite(state, action) {
         state.favorites = state.favorites.filter(
            (item) => action.payload !== item
         );
      },
      resetFavorites(state) {
         state.favorites = [];
      },
   },
});

export const {
   createFavorite,
   addToFavorite,
   removeFromFavorite,
   resetFavorites,
} = favoritesSlice.actions;

export const favorites = favoritesSlice.reducer;
