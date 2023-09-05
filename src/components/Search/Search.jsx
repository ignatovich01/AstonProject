import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import Button from 'react-bootstrap/Button';

import { useGetMovieByNameQuery } from '../../store/API/moviesAPI';

import style from './Search.module.css';

import { useDebounce } from '../../hooks/useDebounce';

export function Search() {
   const [search, setSearch] = useState('');
   const debounce = useDebounce(search);
   const handleKeyPress = (event) => {
      if (event.key === 'Enter') {
         console.log('enter press here! ');
      }
   };

   //    const { data } = useGetMovieByNameQuery(debounce, {
   //       skip: debounce.length < 2,
   //    });
   const data = useGetMovieByNameQuery(search);
   console.log(data);

   return (
      <div className={style.wrapper}>
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
   );
}
