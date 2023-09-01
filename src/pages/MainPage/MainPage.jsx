import React from 'react';

import { useGetMoviesQuery } from '../../store/API/moviesAPI';

export function MainPage() {
   /* TODO цифра в запросе = страница, временная заглушка */
   const { data = [], isLoading, error } = useGetMoviesQuery(11);

   if (isLoading) return <div>Loading...</div>;
   if (error) return <div>Some Error</div>;

   return (
      <ul>
         {data.docs.map((item) => (
            <li key={item.id}>{item.id}</li>
         ))}
      </ul>
   );
}
