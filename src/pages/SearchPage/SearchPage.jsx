import React from 'react';
import { useParams } from 'react-router-dom';

import { useGetMovieByNameQuery } from '../../store/API/moviesAPI';
import { ItemComponent } from '../../components/ItemComponent/ItemComponent';

import style from './Search.module.css';

export default function SearchPage() {
   const search = useParams().query;
   const { data, isLoading, error } = useGetMovieByNameQuery(search);

   if (error) {
      return 'error';
   }
   if (isLoading) {
      return <div className={style.movie}>Loading...</div>;
   }
   if (data.length > 0) {
      return (
         <div className={style.wrapper}>
            {data &&
               data.map((item) => (
                  <ItemComponent key={item.id} itemId={item.id} />
               ))}
         </div>
      );
   }
   return (
      <div className={style.wrapper}>
         <div>По вашему запросу ничего не найдено</div>
      </div>
   );
}
