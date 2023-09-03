import React from 'react';

import { Header } from '../../components/Header/Header';

import { useGetMoviesQuery } from '../../store/API/moviesAPI';
import { ItemComponent } from '../../components/ItemComponent/ItemComponent';

export function MainPage() {
   /* TODO цифра в запросе = страница, временная заглушка */
   const { data = [], isLoading, error } = useGetMoviesQuery(11);

   if (isLoading) return <div>Loading...</div>;
   if (error) return <div>Some Error</div>;
   //TODO просто проверял и думал как лучше реализовать
   if (!isLoading) {
      console.log(data.docs[1].poster);
   }

   return (
      <div>
         <Header />
         {isLoading ? (
            <div>Loading...</div>
         ) : (
            <div
               style={{
                  display: 'flex',
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  margin: '20px',
                  justifyContent: 'space-around',
               }}
            >
               {data.docs.map((item) => (
                  <ItemComponent key={item.id} Id={item.id} />
               ))}
            </div>
         )}
      </div>
   );
}
