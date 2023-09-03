import React, { useEffect } from 'react';

// import { useDispatch } from 'react-redux';

import { Header } from '../../components/Header/Header';

import { useGetMoviesQuery } from '../../store/API/moviesAPI';

// import { setUser } from '../../store/slices/userSlice';

export function MainPage() {
   /* TODO проверка middleware */
   // const dispatch = useDispatch();
   // const foo = () => {
   //    dispatch(setUser({ name: 'nikita', password: '123245' }));
   // };
   // useEffect(() => {
   //    foo();
   // }, []);

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
