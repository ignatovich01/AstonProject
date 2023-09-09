import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ItemComponent } from '../../components/ItemComponent/ItemComponent';
import Button from 'react-bootstrap/Button';
import { resetFavorites } from '../../store/slices/favoriteSlice';

export default function FavoritePage() {
   const dispatch = useDispatch();
   const favorites = useSelector((state) => state.favorites.favorites);

   if (favorites.length > 0) {
      return (
         <div>
            <Button
               style={{ marginLeft: '20px' }}
               onClick={() => {
                  dispatch(resetFavorites());
               }}
            >
               Reset all favorites
            </Button>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
               {favorites.map((item) => (
                  <ItemComponent key={item} itemId={item} />
               ))}
            </div>
         </div>
      );
   }
   return <div>Избранное пока пустое</div>;
}
