import { lazy } from 'react';

import {
   MAIN_ROUTE,
   HISTORY_ROUTE,
   FAVORITE_ROUTE,
   ITEM_ROUTE,
   LOGIN_ROUTE,
   REGISTER_ROUTE,
   SEARCH_ROUTE,
} from '../../consts/consts';

const MainPage = lazy(() => import('../../pages/MainPage/MainPage'));
const HistoryPage = lazy(() => import('../../pages/HistoryPage/HistoryPage'));
const FavoritePage = lazy(() =>
   import('../../pages/FavoritePage/FavoritePage')
);
const ItemPage = lazy(() => import('../../pages/ItemPage/ItemPage'));
const SearchPage = lazy(() => import('../../pages/SearchPage/SearchPage'));
const RegisterPage = lazy(() =>
   import('../../pages/RegisterPage/RegisterPage')
);
const LoginPage = lazy(() => import('../../pages/LoginPage/LoginPage'));

export const authRoutes = [
   {
      path: HISTORY_ROUTE,
      Component: HistoryPage,
   },
   {
      path: FAVORITE_ROUTE,
      Component: FavoritePage,
   },
];

export const publicRoutes = [
   {
      path: MAIN_ROUTE,
      Component: MainPage,
   },
   {
      path: ITEM_ROUTE,
      Component: ItemPage,
   },
   {
      path: SEARCH_ROUTE,
      Component: SearchPage,
   },
   {
      path: REGISTER_ROUTE,
      Component: RegisterPage,
   },
   {
      path: LOGIN_ROUTE,
      Component: LoginPage,
   },
];
