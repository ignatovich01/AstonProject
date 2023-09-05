import React from 'react';
import { useParams } from 'react-router-dom';

import { Header } from '../../components/Header/Header';

import { useGetMovieByNameQuery } from '../../store/API/moviesAPI';
import { ItemComponent } from '../../components/ItemComponent/ItemComponent';

import style from './Search.module.css';

export function SearchPage() {
   const search = useParams().query;
   const { data, isLoading, error } = useGetMovieByNameQuery(search);

   if (error) {
      return 'error';
   }
   return (
      <div className={style.wrapper}>
         <Header />
         {isLoading && <div className={style.movie}>Loading...</div>}
         {error && <div className={style.movie}>Something error. Oops.</div>}
         {data &&
            data.map((item) => (
               <ItemComponent key={item.id} itemId={item.id} />
            ))}
      </div>
   );
}
