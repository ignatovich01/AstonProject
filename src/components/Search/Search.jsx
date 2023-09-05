import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button';

import { useGetMovieByNameQuery } from '../../store/API/moviesAPI';
import { useDebounce } from '../../hooks/useDebounce';

import style from './Search.module.css';

export function Search() {
   const [search, setSearch] = useState('');
   const debounce = useDebounce(search);
   const handleKeyPress = (event) => {
      if (event.key === 'Enter') {
         console.log('enter press here! ');
      }
   };

   const { data } = useGetMovieByNameQuery(debounce, {
      skip: debounce.length < 2,
   });

   return (
      <div className={style.wrapper}>
         <div className={style.top}>
            <div className={style.panel}>
               <input
                  type='text'
                  placeholder='Поиск по имени'
                  className={style.input}
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  onKeyDown={(e) => handleKeyPress(e)}
               />
            </div>
            <Button variant='primary' className={style.button}>
               Primary
            </Button>
         </div>
         {search.length > 0 && data.length ? (
            <div className={style.dropdown}>
               <ul>
                  {data?.slice(0, 5).map((item) => (
                     <Link className={style.link} to={`${item.name}`}>
                        <li>{item.name}</li>
                     </Link>
                  ))}
               </ul>
            </div>
         ) : (
            ''
         )}
      </div>
   );
}
