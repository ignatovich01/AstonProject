import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import style from './Form.module.css';

import { REGISTER_ROUTE } from '../../consts/consts';

export function LoginForm() {
   const [name, setName] = useState('');
   const [password, setPassword] = useState('');
   return (
      <div className={style.wrapper}>
         <div className={style.block}>
            <h4>Login</h4>

            <Form className={style.form}>
               <Form.Group className='mb-3' controlId='formBasicEmail'>
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                     type='text'
                     placeholder='Enter name'
                     value={name}
                     onChange={(e) => setName(e.target.value)}
                  />
               </Form.Group>

               <Form.Group className='mb-3' controlId='formBasicPassword'>
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                     type='text'
                     placeholder='Password'
                     value={password}
                     onChange={(e) => setPassword(e.target.value)}
                  />
               </Form.Group>

               <Button variant='primary' type='submit'>
                  Submit
               </Button>
            </Form>
         </div>
         <Link to={REGISTER_ROUTE}>Еще не зарегистрирован?</Link>
      </div>
   );
}
