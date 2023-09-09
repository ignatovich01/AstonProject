import React from 'react';

import { useParams } from 'react-router-dom';

import Spinner from 'react-bootstrap/Spinner';

import { useGetMovieByIdQuery } from '../../store/API/moviesAPI';

import { ButtonFavorite } from '../../components/ButtonFavorite/ButtonFavorite';

import style from './ItemPage.module.css';

export default function ItemPage() {
   const params = useParams();
   const itemId = Number(params.id);
   const { data = [], isLoading, error } = useGetMovieByIdQuery(itemId);

   if (isLoading) {
      return <Spinner animation='border' />;
   }

   if (error) {
      return 'error';
   }
   return (
      <div>
         <div className={style.wrapper}>
            <div className={style.left}>
               <img
                  className={style.poster}
                  src={data.poster?.url ? data.poster.url : '404'}
                  alt={data.name}
               />
               <ButtonFavorite id={itemId} />
            </div>
            <div className={style.info}>
               <div className={style.info_name}>{data.name}</div>
               <div> {data.year || 'неизвестно'}</div> <p />
               <div>
                  {data.genres.map((genre) => (
                     <div key={data?.genres.indexOf(genre)}>
                        {' '}
                        * {genre.name || 'неизвестно'}
                     </div>
                  ))}
               </div>
               <p />
               <div>Описание :{data.shortDescription || 'неизвестно'}</div>
               <div>
                  <p /> Бюджет : {data.budget.value || 'неизвестно'}
                  {data.budget.currency || 'неизвестно'}
               </div>
            </div>
         </div>
      </div>
   );
}
