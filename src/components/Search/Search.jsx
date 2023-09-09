/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';

import { useGetMovieByNameQuery } from '../../store/API/moviesAPI';
import { useDebounce } from '../../hooks/useDebounce';
import { addToHistory } from '../../store/slices/historySlice';
import { AuthContext } from '../../store/context/authContext';

import style from './Search.module.css';

export function Search() {
   const [isShowSuggest, setIsShowSuggest] = useState(false);
   const [search, setSearch] = useState('');
   const useDebounceHook = useDebounce(search);
   const navigate = useNavigate();
   const dispatch = useDispatch();
   const { data } = useGetMovieByNameQuery(useDebounceHook, {
      skip: useDebounceHook.length < 2,
   });
   const { isAuth } = useContext(AuthContext);

   const addToHistoryHandler = () => {
      if (isAuth) {
         dispatch(addToHistory(search));
      }
      navigate(`/search/${search}`);
   };

   return (
      <div className={style.wrapper}>
         <div className={style.top}>
            <div className={style.panel}>
               <input
                  id='input'
                  type='text'
                  placeholder='Поиск по имени'
                  className={style.input}
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  onFocus={() => setIsShowSuggest(true)}
                  onBlur={() => setTimeout(() => setIsShowSuggest(false), 300)}
               />
            </div>
            <Button
               variant='primary'
               className={style.button}
               onClick={addToHistoryHandler}
            >
               Поиск
            </Button>
         </div>
         {search.length > 0 && data?.length && isShowSuggest ? (
            <div className={style.dropdown}>
               <ul>
                  {data?.slice(0, 5).map((item) => (
                     <Link
                        key={item.id}
                        className={style.link}
                        to={`/movie/${item.id}`}
                     >
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
