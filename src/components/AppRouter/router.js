import {
   MAIN_ROUTE,
   HISTORY_ROUTE,
   FAVORITE_ROUTE,
   ITEM_ROUTE,
   LOGIN_ROUTE,
   REGISTER_ROUTE,
   SEARCH_ROUTE,
} from '../../consts/consts';
import { MainPage } from '../../pages/MainPage/MainPage';
import { HistoryPage } from '../../pages/HistoryPage/HistoryPage';
import { FavoritePage } from '../../pages/FavoritePage/FavoritePage';
import { ItemPage } from '../../pages/ItemPage/ItemPage';
import { SearchPage } from '../../pages/SearchPage/SearchPage';
import { RegisterPage } from '../../pages/RegisterPage/RegisterPage';
import { LoginPage } from '../../pages/LoginPage/LoginPage';

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
