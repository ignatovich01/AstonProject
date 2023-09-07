import getDataFromLocalStorage from './getDataFromLocalStorage';

export default function currentUserKeyBuilder(key) {
   const currentUser = getDataFromLocalStorage('currentUser');
   if (currentUser?.name) {
      return currentUser.name + key;
   }
   return '';
}
