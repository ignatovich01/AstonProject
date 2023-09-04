import React from 'react';
import Button from 'react-bootstrap/Button';

import { useSelector } from 'react-redux';

export function ButtonFavorite(id) {
   const favoriteButtons = useSelector((state) => state.favorites.favorites);
   const isFavoriteIncludes = favoriteButtons.includes(id);

   if (isFavoriteIncludes) {
      return (
         <Button variant='danger' size='sm'>
            Удалить
         </Button>
      );
   }
   return (
      <Button variant='primary' size='sm'>
         Добавить
      </Button>
   );
}
