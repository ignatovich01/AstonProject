/* eslint-disable no-param-reassign */

import { createSlice } from '@reduxjs/toolkit';

const historySlice = createSlice({
   name: 'history',
   initialState: {
      history: [],
   },
   reducers: {
      addToHistory(state, action) {
         state.history.push(action.payload.id);
      },
      resetHistory(state, action) {
         state.history = [];
      },
   },
});

export const { addToHistory, resetHistory } = historySlice.actions;

export const history = historySlice.reducer;
