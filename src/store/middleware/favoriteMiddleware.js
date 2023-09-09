import currentUserKeyBuilder from '../../utils/localStorage/currentUserKeyBuilder';

const favoriteMiddleware = (state) => (next) => (action) => {
   const { favorites } = state.getState().favorites;

   if (action.type === 'favorites/addToFavorite') {
      localStorage.setItem(
         currentUserKeyBuilder('favorite'),
         JSON.stringify([...favorites, action.payload])
      );
      console.log('add to favorite');
   }

   if (action.type === 'favorites/removeFromFavorite') {
      localStorage.setItem(
         currentUserKeyBuilder('favorite'),
         JSON.stringify(favorites.filter((item) => item !== action.payload))
      );
      console.log('remove from favorite');
   }
   if (action.type === 'favorites/resetFavorites') {
      localStorage.setItem(currentUserKeyBuilder('favorite'), []);
      console.log('reset favorite');
   }

   return next(action);
};

export default favoriteMiddleware;
