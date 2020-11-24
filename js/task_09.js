
import users from './users.js'
/**
 * Задание 9
Массив имен (поле name) людей, 
отсортированных в зависимости 
от количества их друзей (поле friends)*/

const getNamesSortedByFriendsCount = users => {
  const copy = [...users];
  console.log(copy);
}
  //users.sort(user => );

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

 // возможно - sort