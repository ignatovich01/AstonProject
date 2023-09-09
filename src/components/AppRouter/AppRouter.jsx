import React, { useContext, Suspense } from 'react';

import { Routes, Route, Navigate } from 'react-router-dom';

import { MAIN_ROUTE } from '../../consts/consts';

import { authRoutes, publicRoutes } from './router';

import { AuthContext } from '../../store/context/authContext';

export function AppRouter() {
   const { isAuth } = useContext(AuthContext);
   return (
      <Routes>
         {isAuth &&
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
