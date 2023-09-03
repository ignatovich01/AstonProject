/* eslint-disable no-console */
import { createListenerMiddleware } from '@reduxjs/toolkit';

import {
   addToFavorite,
   removeFromFavorite,
   resetFavorites,
} from '../slices/favoriteSlice';
import { setUser, removeUser } from '../slices/userSlice';

export const authMiddleware = createListenerMiddleware();

function log(string) {
   console.log(string);
}

authMiddleware.startListening({
   actionCreator: addToFavorite,
   effect: log('add to favorite'),
});
authMiddleware.startListening({
   actionCreator: removeFromFavorite,
   effect: log('remove from favorite'),
});
authMiddleware.startListening({
   actionCreator: resetFavorites,
   effect: log('reset favorites'),
});

authMiddleware.startListening({
   actionCreator: setUser,
   effect: log('set user'),
});
authMiddleware.startListening({
   actionCreator: removeUser,
   effect: log('remove from users'),
});
