/* eslint-disable react/jsx-no-bind */
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { REGISTER_ROUTE } from '../../consts/consts';
import { AuthContext } from '../../store/context/authContext';
import getDataFromLocalStorage from '../../utils/localStorage/getDataFromLocalStorage';
import { setUser } from '../../store/slices/userSlice';

import setDataInLocalStorage from '../../utils/localStorage/setDataInLocalStorage';
import { store } from '../../store/store';
import { createFavorite } from '../../store/slices/favoriteSlice';
import { createHistory } from '../../store/slices/historySlice';
import currentUserKeyBuilder from '../../utils/localStorage/currentUserKeyBuilder';

import { LoginForm } from './Forms/LoginForm';

import style from './Form.module.css';

export function LoginComponent() {
   const dispatch = useDispatch();
   const { toggleIsAuth } = useContext(AuthContext);

   function handleLogin(name, password) {
      const arr = Array.from(getDataFromLocalStorage('users') || []);
      let correctData = false;
      arr.forEach((item) => {
         if (item.name === name && item.password === password) {
            correctData = true;
            dispatch(
               setUser({
                  name: item.name,
                  password: item.password,
               })
            );
            toggleIsAuth();

            setDataInLocalStorage('currentUser', store.getState().user);
            dispatch(
               createHistory(
                  getDataFromLocalStorage(currentUserKeyBuilder('history')) ||
                     []
               )
            );
            dispatch(
               createFavorite(
                  getDataFromLocalStorage(currentUserKeyBuilder('favorite')) ||
                     []
               )
            );
         }
      });
      return correctData;
   }
   return (
      <div className={style.wrapper}>
         <div className={style.block}>
            <h4>Login</h4>
            <LoginForm login={handleLogin} />
         </div>
         <Link to={REGISTER_ROUTE}>Еще не зарегистрирован?</Link>
      </div>
   );
}
