/* 1 - Para fixar ainda mais o conceito de reduce, faça uma função que some todos os números pares do array numbers. Tente criar duas funções, uma usando reduce e filter, e outra apenas usando reduce.1 - Para fixar ainda mais o conceito de reduce, faça uma função que some todos os números pares do array numbers. Tente criar duas funções, uma usando reduce e filter, e outra apenas usando reduce. */
// resultado é 152
const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

//usando reduce e filter
console.log(numbers.filter((num) => num % 2 ===  0).reduce((acc, curr) => acc + curr));

//usando somente reduce
console.log(numbers.reduce((acc, curr) => curr % 2 === 0 ? acc + curr : acc));