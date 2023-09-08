/* eslint-disable react/jsx-no-constructed-context-values */

import React, { useState } from 'react';

const AuthContext = React.createContext();

function AuthContextProvider({ children }) {
   const [isAuth, setIsAuth] = useState(
      localStorage.getItem('currentUser') === null
         ? false
         : !!JSON.parse(localStorage.getItem('currentUser')).name
   );

   function toggleIsAuth() {
      setIsAuth(!isAuth);
   }
   return (
      <AuthContext.Provider value={{ isAuth, toggleIsAuth }}>
         {children}
      </AuthContext.Provider>
   );
}

export { AuthContextProvider, AuthContext };
