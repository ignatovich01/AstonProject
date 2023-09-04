import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

import { Header } from '../../components/Header/Header';

import { useGetMoviesQuery } from '../../store/API/moviesAPI';
import { ItemComponent } from '../../components/ItemComponent/ItemComponent';

export function MainPage() {
   /* TODO цифра в запросе = страница, временная заглушка */
   const { data = [], isLoading, error } = useGetMoviesQuery(2);

   // if (isLoading) return;
   if (error) return <div>Some Error</div>;

   /* TODO просто проверял и думал как лучше реализовать */
   if (!isLoading) {
      console.log(data);
   }

   return (
      <div>
         <Header />
         {isLoading ? (
            <Spinner animation='border' />
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
                  <ItemComponent key={item.id} itemId={item.id} />
               ))}
            </div>
         )}
      </div>
   );
}
