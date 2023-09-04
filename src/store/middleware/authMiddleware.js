/* eslint-disable no-console */
import { createListenerMiddleware } from '@reduxjs/toolkit';

import {
   addToFavorite,
   removeFromFavorite,
   resetFavorites,
} from '../slices/favoriteSlice';
import { setUser, removeUser } from '../slices/userSlice';

export const authMiddleware = createListenerMiddleware();

authMiddleware.startListening({
   actionCreator: addToFavorite,
   effect: () => console.log('addToFavorite'),
});
authMiddleware.startListening({
   actionCreator: removeFromFavorite,
   effect: () => console.log('removeFromFavorite'),
});
authMiddleware.startListening({
   actionCreator: resetFavorites,
   effect: () => console.log('resetFavorites'),
});

authMiddleware.startListening({
   actionCreator: setUser,
   effect: () => console.log('setUser'),
});
authMiddleware.startListening({
   actionCreator: removeUser,
   effect: () => console.log('removeUser'),
});
