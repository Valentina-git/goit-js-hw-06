
import users from './users.js'
/**
 * Задание 8
Массив имен всех пользователей 
у которых есть друг с указанным именем. */



const getUsersWithFriend = (users, friendName) => {
  const arr = users.map(({ name, friends }) => ({ name, friends }))
  console.log(arr);
  
  //.filter(({ friends }) =>  friendName ==);

  //.forEach(({ name, friends }) => console.log(({ name, friends }));)
}

console.log(getUsersWithFriend(users, 'Briana Decker'));
// [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, 'Goldie Gentry'));
// [ 'Elma Head', 'Sheree Anthony' ]

