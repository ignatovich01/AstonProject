import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { MAIN_ROUTE, REGISTER_ROUTE } from '../../consts/consts';

import { authRoutes, publicRoutes } from './router';
import { AuthContext } from '../../store/context/authContext';
import { MainPage } from '../../pages/MainPage/MainPage';

export function AppRouter() {
   const { isAuth } = useContext(AuthContext);
   return (
      <Routes>
         {isAuth &&
            authRoutes.map(({ path, Component }) => (
               <Route key={path} path={path} element={<Component />} />
            ))}
         {publicRoutes.map(({ path, Component }) => (
            <Route key={path} path={path} element={<Component />} />
         ))}
         <Route path='*' element={<Navigate to={MAIN_ROUTE} />} />
      </Routes>
   );
}
