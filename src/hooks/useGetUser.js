import { store } from '../store/store';

export function useGetUser() {
   const currentUser = store.getState().user;
   return currentUser;
}
