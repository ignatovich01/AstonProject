import currentUserKeyBuilder from '../../utils/localStorage/currentUserKeyBuilder';

const localStorageMiddleware = (state) => (next) => (action) => {
   const { favorites } = state.getState().favorites;
   const { history } = state.getState().history;

   if (action.type === 'favorites/addToFavorite') {
      localStorage.setItem(
         currentUserKeyBuilder('favorite'),
         JSON.stringify([...favorites, action.payload])
      );
      console.log('add to favorite');
   }

   if (action.type === 'favorites/deleteFromFavourite') {
      localStorage.setItem(
         currentUserKeyBuilder('favorite'),
         JSON.stringify(favorites.filter((item) => item !== action.payload))
      );
      console.log('remove from favorite');
   }

   if (action.type === 'history/addToHistory') {
      localStorage.setItem(
         currentUserKeyBuilder('history'),
         JSON.stringify([...history, action.payload])
      );
   }
   if (action.type === 'history/resetHistory') {
      localStorage.setItem(
         currentUserKeyBuilder('history'),
         JSON.stringify([])
      );
   }

   return next(action);
};

export default localStorageMiddleware;
