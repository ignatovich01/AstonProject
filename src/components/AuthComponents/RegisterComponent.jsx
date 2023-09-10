/* eslint-disable react/jsx-no-bind */
/* eslint-disable react-hooks/rules-of-hooks */

import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import { LOGIN_ROUTE } from '../../consts/consts';

import { setUser } from '../../store/slices/userSlice';
import { AuthContext } from '../../store/context/authContext';

import { useGetUser } from '../../hooks/useGetUser';
import setDataInLocalStorage from '../../utils/localStorage/setDataInLocalStorage';
import getDataFromLocalStorage from '../../utils/localStorage/getDataFromLocalStorage';
import currentUserKeyBuilder from '../../utils/localStorage/currentUserKeyBuilder';

import { createHistory } from '../../store/slices/historySlice';
import { createFavorite } from '../../store/slices/favoriteSlice';

import { RegisterForm } from './Forms/RegisterForm';

import style from './Form.module.css';

export function RegisterComponent() {
   const dispatch = useDispatch();
   const { toggleIsAuth } = useContext(AuthContext);

   function register(userName, userPassword) {
      dispatch(
         setUser({
            name: userName,
            password: userPassword,
         })
      );

      setDataInLocalStorage('currentUser', useGetUser());
      toggleIsAuth();
      const arr = Array.from(getDataFromLocalStorage('users') || []);
      arr.push(useGetUser());

      setDataInLocalStorage('users', arr);
      dispatch(createHistory([]));
      dispatch(createFavorite([]));

      setDataInLocalStorage(currentUserKeyBuilder('history'), []);
      setDataInLocalStorage(currentUserKeyBuilder('favorite'), []);
      dispatch(
         createFavorite(
            getDataFromLocalStorage(currentUserKeyBuilder('favorite') || [])
         )
      );
      dispatch(
         createHistory(
            getDataFromLocalStorage(currentUserKeyBuilder('history') || [])
         )
      );
   }

   return (
      <div className={style.wrapper}>
         <div className={style.block}>
            <h4>Registration</h4>
            <RegisterForm register={register} />
         </div>
         <Link to={LOGIN_ROUTE}>Уже есть аккаунт?</Link>
      </div>
   );
}
