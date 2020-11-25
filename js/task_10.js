
import users from './users.js'
/**
 * Задание 10
Получить массив всех умений 
всех пользователей (поле skills), 
при этом не должно быть повторяющихся умений и 
они должны быть отсортированы в алфавитном порядке.*/


const getSortedUniqueSkills = users => {
    const newUsers = users.reduce((acc, user) => {
        acc.push(...user.skills)
        return acc;
    }, [])

    let set = new Set(newUsers)
    let result = [...set]
    result.sort()
    return result;

}

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 
//'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 
//'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]

   