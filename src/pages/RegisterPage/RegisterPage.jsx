import React from 'react';

import { Header } from '../../components/Header/Header';
import { RegisterComponent } from '../../components/AuthComponents/RegisterComponent';

export function RegisterPage() {
   return (
      <div>
         {' '}
         <Header />
         <RegisterComponent />
      </div>
   );
}
