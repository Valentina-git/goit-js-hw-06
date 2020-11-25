
import users from './users.js'
/**
 * Задание 9
Массив имен (поле name) людей, 
отсортированных в зависимости 
от количества их друзей (поле friends)*/


const getNamesSortedByFriendsCount = users => {
  return users.sort((user_1, user_2) => 
  user_1.friends.length - user_2.friends.length)
  .map(user => user.name )
}


console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 
//'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 
//'Ross Vazquez' ]
