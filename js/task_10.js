
import users from './users.js'
/**
 * Задание 10
Получить массив всех умений 
всех пользователей (поле skills), 
при этом не должно быть повторяющихся умений и 
они должны быть отсортированы в алфавитном порядке.*/

const getSortedUniqueSkills = users => 
users.map(user => user.skills);

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 
//'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 
//'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]


 
 // =========== Chaining ================
// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];

// const result = tweets
//   .filter((item) => item.likes >= 8)
  
//   .reduce((acc, item) => {
//     acc.push(...item.tags);
//     return acc;
//   }, [])
//    .sort();

// console.log(result);

// ===================================