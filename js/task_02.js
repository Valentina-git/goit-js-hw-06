import users from './users.js'

/**
 * Задание 2
Получить массив объектов пользователей 
по цвету глаз (поле eyeColor).*/

const getUsersWithEyeColor = (users, color) => 
  
   users.filter(user => color === user.eyeColor);

console.log(getUsersWithEyeColor(users, 'blue'));
// [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]
 
