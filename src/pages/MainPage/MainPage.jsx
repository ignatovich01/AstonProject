import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

import { useGetMoviesQuery } from '../../store/API/moviesAPI';
import { ItemComponent } from '../../components/ItemComponent/ItemComponent';
import { Search } from '../../components/Search/Search';
import { ErrorBoundaries } from '../../components/ErrorBoundaries/ErrorBoundaries';

export function MainPage() {
   const { data = [], isLoading, error } = useGetMoviesQuery();

   if (error) return <div>Some Error</div>;

   return (
      <ErrorBoundaries>
         <div>
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
