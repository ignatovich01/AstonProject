/* eslint-disable react/jsx-no-bind */
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import { LOGIN_ROUTE } from '../../consts/consts';

import { setUser } from '../../store/slices/userSlice';
import { AuthContext } from '../../store/context/authContext';

import { store } from '../../store/store';

import setDataInLocalStorage from '../../utils/localStorage/setDataInLocalStorage';
import getDataFromLocalStorage from '../../utils/localStorage/getDataFromLocalStorage';
import currentUserKeyBuilder from '../../utils/localStorage/currentUserKeyBuilder';

import { createHistory } from '../../store/slices/historySlice';
import { createFavorite } from '../../store/slices/favoriteSlice';
import { Register } from './Forms/RegisterForm';

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
      const currentUser = store.getState().user;
      setDataInLocalStorage('currentUser', currentUser);
      toggleIsAuth();
      const arr = Array.from(getDataFromLocalStorage('users') || []);
      arr.push(currentUser);

      setDataInLocalStorage('users', arr);
      dispatch(createHistory([]));
      dispatch(createFavorite([]));

      setDataInLocalStorage(currentUserKeyBuilder('history'), []);
      setDataInLocalStorage(currentUserKeyBuilder('favirote'), []);
   }

   return (
      <div className={style.wrapper}>
         <div className={style.block}>
            <h4>Registration</h4>
            <Register register={register} />
         </div>
         <Link to={LOGIN_ROUTE}>Уже есть аккаунт?</Link>
      </div>
   );
}
