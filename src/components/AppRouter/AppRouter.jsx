import React, { useContext, Suspense } from 'react';

import { Routes, Route, Navigate } from 'react-router-dom';

import { MAIN_ROUTE } from '../../consts/consts';
import { AuthContext } from '../../store/context/authContext';

import { authRoutes, publicRoutes } from './router';

export function AppRouter() {
   const { value } = useContext(AuthContext);
   return (
      <Routes>
         {value[0] &&
            authRoutes.map(({ path, Component }) => (
               <Route
                  key={path}
                  path={path}
                  element={
                     <Suspense fallback={<div>Loading...</div>}>
                        <Component />
                     </Suspense>
                  }
               />
            ))}
         {publicRoutes.map(({ path, Component }) => (
            <Route
               key={path}
               path={path}
               element={
                  <Suspense fallback={<div>Loading...</div>}>
                     <Component />
                  </Suspense>
               }
            />
         ))}
         <Route path='*' element={<Navigate to={MAIN_ROUTE} />} />
      </Routes>
   );
}
