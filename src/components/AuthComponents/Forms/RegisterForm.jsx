/* eslint-disable default-case */
/* eslint-disable no-useless-escape */
/* eslint-disable no-alert */
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

import isOccupiedEmail from '../../../utils/IsOccupiedEmail';

export function Register({ register }) {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [confirmPassword, setConfirmPassword] = useState('');

   const navigate = useNavigate();

   const [validated, setValidated] = useState(false);

   const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
         event.preventDefault();
         event.stopPropagation();
      }

      setValidated(true);
      if (isOccupiedEmail(email)) {
         alert('email уже занят');
      } else {
         register(email, password);
         navigate('/');
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
         <Form.Group className='mb-3' controlId='formBasicPassword'>
            <Form.Label>Password</Form.Label>
            <Form.Control
               type='password'
               placeholder='Password'
               value={confirmPassword}
               onChange={(e) => setConfirmPassword(e.target.value)}
               isInvalid={confirmPassword !== password}
            />
            <Form.Control.Feedback type='invalid'>
               пароли не должны отличаться
            </Form.Control.Feedback>
         </Form.Group>

         <Button variant='primary' type='submit'>
            Submit
         </Button>
      </Form>
   );
}
