import { createSlice } from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
   name: 'favorites',
   initialState: {
      favorites: [],
   },
   reducers: {
      addToFavorite(state, action) {
         state.favorites.push(action.payload.id);
      },
      removeFromFavorite(state, action) {
         state.favorites = state.favorites.filter(
            (item) => action.payload.id !== item.id
         );
      },
      resetFavorites(state, action) {
         state.favorites = [];
      },
   },
});

export const { addToFavorite, removeFromFavorite, resetFavorites } =
   favoritesSlice.actions;

export const favorites = favoritesSlice.reducer;
