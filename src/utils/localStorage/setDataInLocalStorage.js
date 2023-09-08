export default function setDataInLocalStorage(key, value) {
   return localStorage.setItem(key, JSON.stringify(value));
}
