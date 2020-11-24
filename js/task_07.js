
import users from './users.js'
/**
 * Задание 7
Получить общую сумму баланса (поле balance) 
всех пользователей.*/

const calculateTotalBalance = users => 
  users.map(user => user.balance)
  .reduce((acc, value) => acc + value);

console.log(calculateTotalBalance(users)); // 20916
 
