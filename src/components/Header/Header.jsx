import React from 'react';
import { useNavigate } from 'react-router-dom';
import style from './Header.module.css';
import {
   HISTORY_ROUTE,
   MAIN_ROUTE,
   FAVORITE_ROUTE,
   LOGIN_ROUTE,
   REGISTER_ROUTE,
} from '../../consts/consts';
import Button from 'react-bootstrap/Button';

export function Header() {
   const isAuth = false;
   const navigate = useNavigate();

   if (isAuth) {
      return (
         <div className={style.header}>
            <div className='logo'>
               <Button
                  onClick={() => navigate(MAIN_ROUTE)}
                  variant='outline-light'
               >
                  HOME
               </Button>
            </div>
            <div className='center_buttons'>
               <Button
                  onClick={() => navigate(FAVORITE_ROUTE)}
                  variant='outline-light'
               >
                  Favorite
               </Button>
               <Button
                  onClick={() => navigate(HISTORY_ROUTE)}
                  variant='outline-light'
               >
                  History
               </Button>
            </div>
            <Button variant='outline-light'>Выход</Button>
         </div>
      );
   }

   return (
      <div className={style.header}>
         <div className='logo'>
            <Button
               onClick={() => navigate(MAIN_ROUTE)}
               variant='outline-light'
            >
               Logo
            </Button>
         </div>
         <div className='auth_buttons'>
            <Button
               onClick={() => navigate(LOGIN_ROUTE)}
               variant='outline-light'
            >
               Login
            </Button>
            <Button
               onClick={() => navigate(REGISTER_ROUTE)}
               variant='outline-light'
            >
               Register
            </Button>
         </div>
      </div>
   );
}
