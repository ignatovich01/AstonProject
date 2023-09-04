import React from 'react';

import { useParams } from 'react-router-dom';

import Spinner from 'react-bootstrap/Spinner';

import { Header } from '../../components/Header/Header';
import { useGetMovieByIdQuery } from '../../store/API/moviesAPI';

import { ButtonFavorite } from '../../components/ButtonFavorite/ButtonFavorite';

import style from './ItemPage.module.css';

export function ItemPage() {
   const params = useParams();
   const itemId = params.id;
   const { data = [], isLoading } = useGetMovieByIdQuery(itemId);

   if (isLoading) {
      return <Spinner animation='border' />;
   }
   if (!isLoading) {
      console.log(data);
   }
   return (
      <div>
         <Header />
         <div className={style.wrapper}>
            <div className={style.left}>
               <img
                  className={style.poster}
                  src={
                     data.poster?.url ? data.poster.url : data.poster.previewUrl
                  }
                  alt={data.name}
               />
               <ButtonFavorite id={itemId} />
            </div>
            <div className={style.info}>
               <div className={style.info_name}>{data.name}</div>
               <div> {data.year}</div> <p />
               <div>
                  {data.genres.map((genre) => (
                     <div key={data.genres.indexOf(genre)}> * {genre.name}</div>
                  ))}
               </div>
               <p />
               <div>{data?.shortDescription}</div>
               <div>
                  <p /> Бюджет {data.budget.value}
                  {data.budget.currency}
               </div>
            </div>
         </div>
      </div>
   );
}
