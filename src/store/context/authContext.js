import React, { useState } from 'react';

function authContext({ children }) {
   const authContext = React.createContext();

   const [isAuth, setIsAuth] = useState(
      localStorage.getItem('user') === null
         ? false
         : localStorage.getItem('user').name
   );
   return (
      <authContext.Provider value={isAuth}>{children}</authContext.Provider>
   );
}

export { isAuth, authContext };
