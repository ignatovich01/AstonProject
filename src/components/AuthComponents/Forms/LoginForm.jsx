/* eslint-disable default-case */
/* eslint-disable no-useless-escape */
/* eslint-disable no-alert */
/* eslint-disable react/require-default-props */

import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

import propTypes from 'prop-types';

export function LoginForm({ login }) {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');

   const navigate = useNavigate();

   const [validated, setValidated] = useState(false);

   const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
         event.preventDefault();
         event.stopPropagation();
      }

      setValidated(true);
      if (login(email, password)) {
         navigate('/');
      } else {
         alert('неверный логин или пароль');
      }
   };

   return (
      <Form validated={validated} onSubmit={handleSubmit}>
         <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>Email address</Form.Label>
            <Form.Control
               type='email'
               placeholder='Enter email'
               value={email}
               onChange={(e) => setEmail(e.target.value)}
               required
            />
         </Form.Group>
         <Form.Group className='mb-3' controlId='formBasicPassword'>
            <Form.Label>Password</Form.Label>
            <Form.Control
               name='password'
               type='password'
               placeholder='Password'
               value={password}
               onChange={(e) => setPassword(e.target.value)}
               isValid={password}
               isInvalid={password.length > 12 || password.length < 3}
               required
            />
            <Form.Control.Feedback type='invalid'>
               от 3 до 12 символов
            </Form.Control.Feedback>
         </Form.Group>

         <Button variant='primary' type='submit'>
            Submit
         </Button>
      </Form>
   );
}
LoginForm.propTypes = {
   login: propTypes.func,
};
