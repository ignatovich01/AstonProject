/* eslint-disable react/jsx-no-constructed-context-values */

import React, { useState } from 'react';

const AuthContext = React.createContext();

function AuthContextProvider({ children }) {
   const [isAuth, setIsAuth] = useState(
      localStorage.getItem('user') === null
         ? false
         : localStorage.getItem('user').name
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
