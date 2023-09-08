import React from 'react';

import { Header } from '../../components/Header/Header';
import { LoginComponent } from '../../components/AuthComponents/LoginComponent';

export function LoginPage() {
   return (
      <div>
         <Header />
         <LoginComponent />
      </div>
   );
}
