import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ItemComponent } from '../../components/ItemComponent/ItemComponent';
import Button from 'react-bootstrap/Button';
import { resetFavorites } from '../../store/slices/favoriteSlice';

export function FavoritePage() {
   // const dispatch = useDispatch();
   const favorites = useSelector((state) => state.favorites.favorites);

   const resetHandler = () => {
      // dispatch(resetFavorites());
   };
   if (favorites.length > 0) {
      return (
         <div>
            <Button onClick={resetHandler}>Reset all favorites</Button>
            {favorites.map((item) => (
               <ItemComponent key={item.id} itemId={item} />
            ))}
         </div>
      );
   }
   return <div>Избранное пока пустое</div>;
}
