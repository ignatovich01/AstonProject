import currentUserKeyBuilder from '../../utils/localStorage/currentUserKeyBuilder';

const favoriteMiddleware = (state) => (next) => (action) => {
   const { favorites } = state.getState().favorites;

   if (action.type === 'favorites/addToFavorite') {
      localStorage.setItem(
         currentUserKeyBuilder('favorite'),
         JSON.stringify([...favorites, action.payload])
      );
   }

   if (action.type === 'favorites/removeFromFavorite') {
      localStorage.setItem(
         currentUserKeyBuilder('favorite'),
         JSON.stringify(favorites.filter((item) => item !== action.payload))
      );
   }
   if (action.type === 'favorites/resetFavorites') {
      localStorage.setItem(
         currentUserKeyBuilder('favorite'),
         JSON.stringify([])
      );
   }

   return next(action);
};

export default favoriteMiddleware;
