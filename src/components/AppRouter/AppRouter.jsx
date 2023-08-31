import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { MAIN_ROUTE } from '../../consts/consts';

import { authRoutes, publicRoutes } from './router';

export function AppRouter() {
   const isAuth = true;
   return (
      <Routes>
         {isAuth &&
            authRoutes.map(({ path, Component }) => (
               <Route key={path} path={path} element={<Component />} exact />
            ))}
         {publicRoutes.map(({ path, Component }) => (
            <Route key={path} path={path} element={<Component />} exact />
         ))}
         <Route path='*' element={<Navigate to={MAIN_ROUTE} />} />
      </Routes>
   );
}
