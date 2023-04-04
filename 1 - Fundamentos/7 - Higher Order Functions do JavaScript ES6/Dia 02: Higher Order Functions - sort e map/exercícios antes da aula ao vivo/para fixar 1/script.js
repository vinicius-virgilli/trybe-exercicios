// testando operador rest

/* const test = (...numeros) => {
  numeros.forEach((num, index) => {
    numeros[index] = num * 2;
  })
  return numeros;
}

console.log(test(1,2,3,3,3,3,3)); */

// conteúdo de hoje
/* const food = ['arroz', 'feijão', 'farofa', 'chocolate', 'doce de leite'];
food.sort();
console.log(food);
// [ 'arroz', 'chocolate', 'doce de leite', 'farofa', 'feijão' ]

const inventory = [1, 3, 2, 5, 4, 6, 7, 8, 9, 10];
inventory.sort((a, b) => a - b);
console.log(inventory); // 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// troca a operação para b - a
inventory.sort((a, b) => b - a);
console.log(inventory); // [10, 9, 8, 7, 6, 5, 4, 3, 2, 1] */

const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

people.sort((a, b) => {
  if (a.age > b.age) {
    return 1;
  }
  if (a.age < b.age) {
    return -1;
  }
  if (a.age == b.age) {
    return 0;
  }
});

// Adicione seu código aqui

console.log(people);