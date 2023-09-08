/* eslint-disable no-param-reassign */

import { createSlice } from '@reduxjs/toolkit';

const historySlice = createSlice({
   name: 'history',
   initialState: {
      history: [],
   },
   reducers: {
      createHistory(state, action) {
         state.history = action.payload;
      },
      addToHistory(state, action) {
         state.history.push(action.payload.id);
      },
      resetHistory(state) {
         state.history = [];
      },
   },
});

export const { createHistory, addToHistory, resetHistory } =
   historySlice.actions;

export const history = historySlice.reducer;
