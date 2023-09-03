import React from 'react';

import { Header } from '../../components/Header/Header';

import { useGetMoviesQuery } from '../../store/API/moviesAPI';
import { ItemComponent } from '../../components/ItemComponent/ItemComponent';

export function MainPage() {
   /* TODO цифра в запросе = страница, временная заглушка */
   const { data = [], isLoading, error } = useGetMoviesQuery(11);

   // if (isLoading) return <div>Loading...</div>;
   if (error) return <div>Some Error</div>;

   return (
      <div>
         <Header />
         {isLoading ? (
            <div>Loading...</div>
         ) : (
            <ul>
               {data.docs.map((item) => (
                  <ItemComponent key={item.id} itemId={item.id} />
               ))}
            </ul>
         )}
      </div>
   );
}
