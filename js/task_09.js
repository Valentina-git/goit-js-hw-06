
import users from './users.js'
/**
 * Задание 9
Массив имен (поле name) людей, 
отсортированных в зависимости 
от количества их друзей (поле friends)*/


const getNamesSortedByFriendsCount = users => {
  return [...users]
  .sort(({friends: friends_1},{friends: friends_2}) => 
  {return friends_1.length-friends_2.length})
  .map(({name}) => name)
}

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 
//'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 
//'Ross Vazquez' ]
