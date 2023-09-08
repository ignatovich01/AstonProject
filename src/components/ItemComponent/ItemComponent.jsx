/* eslint-disable react/prop-types */

/* eslint-disable prefer-template */
import React from 'react';
import { Link } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';

import { useGetMovieByIdQuery } from '../../store/API/moviesAPI';

import { MAIN_ROUTE } from '../../consts/consts';
import { ButtonFavorite } from '../ButtonFavorite/ButtonFavorite';

import style from './ItemComponent.module.css';

export function ItemComponent({ itemId }) {
   const { data = [], isLoading, error } = useGetMovieByIdQuery(itemId);
   if (isLoading) {
      return <Spinner animation='border' />;
   }
   if (error) {
      return 'some Error';
   }
   return (
      <div className={style.item}>
         <Link to={`${MAIN_ROUTE}movie/${itemId}`}>
            <img
               className={style.poster}
               src={data.poster ? data.poster.url : '404'}
               alt={data.name}
            />
         </Link>
         <ButtonFavorite id={itemId} className={style.item_bottom} />
         <div className={style.item_bot}>{data.name}</div>
      </div>
   );
}
