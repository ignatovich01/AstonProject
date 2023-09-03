import React from 'react';

import { Header } from '../../components/Header/Header';

import { useGetMoviesQuery } from '../../store/API/moviesAPI';

export function MainPage() {
   /* TODO цифра в запросе = страница, временная заглушка */
   const { data = [], isLoading, error } = useGetMoviesQuery(11);

   if (error) return <div>Some Error</div>;

   return (
      <div>
         <Header />
         {isLoading ? (
            <div>Loading...</div>
         ) : (
            <ul>
               {data.docs.map((item) => (
                  <li key={item.id}>{item.id} </li>
               ))}
            </ul>
         )}
      </div>
   );
}
