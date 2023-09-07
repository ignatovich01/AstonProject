import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

import { Header } from '../../components/Header/Header';

import { useGetMoviesQuery } from '../../store/API/moviesAPI';
import { ItemComponent } from '../../components/ItemComponent/ItemComponent';
import { Search } from '../../components/Search/Search';
import { ErrorBoundaries } from '../../components/ErrorBoundaries/ErrorBoundaries';

export function MainPage() {
   /* TODO цифра в запросе = страница, временная заглушка */
   const { data = [], isLoading, error } = useGetMoviesQuery(2);

   if (error) return <div>Some Error</div>;

   /* TODO просто проверял и думал как лучше реализовать */
   if (!isLoading) {
      console.log(data);
   }

   return (
      <ErrorBoundaries>
         <div>
            <Header />
            <Search />
            {isLoading ? (
               <Spinner animation='border' />
            ) : (
               <div
                  style={{
                     display: 'flex',
                     flexDirection: 'row',
                     flexWrap: 'wrap',
                     margin: '20px',
                  }}
               >
                  {data &&
                     data.docs.map((item) => (
                        <ItemComponent key={item.id} itemId={item.id} />
                     ))}
               </div>
            )}
         </div>
      </ErrorBoundaries>
   );
}
