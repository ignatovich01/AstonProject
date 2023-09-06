import React from 'react';
import { Header } from '../../components/Header/Header';
import { RegisterForm } from '../../components/FormItems/RegisterForm';

export function RegisterPage() {
   return (
      <div>
         {' '}
         <Header />
         <RegisterForm />
      </div>
   );
}
