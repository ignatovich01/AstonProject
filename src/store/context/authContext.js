/* eslint-disable react/jsx-no-constructed-context-values */

import React, { useState, useMemo } from 'react';

const AuthContext = React.createContext();

function AuthContextProvider({ children }) {
   const [isAuth, setIsAuth] = useState(
      localStorage.getItem('currentUser') === null
         ? false
         : !!JSON.parse(localStorage.getItem('currentUser')).name
   );

   const toggleIsAuth = () => {
      setIsAuth(!isAuth);
   };
   const value = useMemo(() => [isAuth, setIsAuth], [isAuth]);
   return (
      <AuthContext.Provider value={{ value, toggleIsAuth }}>
         {children}
      </AuthContext.Provider>
   );
}

export { AuthContextProvider, AuthContext };
