import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import style from './Form.module.css';

import { REGISTER_ROUTE } from '../../consts/consts';

import { NameInput } from './Inputs/NameInput';

export function LoginForm() {
   return (
      <div className={style.wrapper}>
         <div className={style.block}>
            <form>
               <h4>Login</h4>

               <NameInput />
            </form>
         </div>
         <Link to={REGISTER_ROUTE}>Еще не зарегистрирован?</Link>
      </div>
   );
}
