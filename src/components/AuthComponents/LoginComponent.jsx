import React from 'react';
import { Link } from 'react-router-dom';

import { REGISTER_ROUTE } from '../../consts/consts';

import style from './Form.module.css';

export function LoginComponent() {
   return (
      <div className={style.wrapper}>
         <div className={style.block}>
            <form>
               <h4>Login</h4>
            </form>
         </div>
         <Link to={REGISTER_ROUTE}>Еще не зарегистрирован?</Link>
      </div>
   );
}
