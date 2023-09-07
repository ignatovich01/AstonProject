export default function isOccupiedEmail(email) {
   let users = [];
   if (localStorage.getItem('users') !== null) {
      users = Array.from(JSON.parse(localStorage.getItem('users')));
   }
   return users.filter((item) => item.name === email)[0];
}
