/* const dados = ['Luca', 91234567, 'Ana', 92345678, 'Marlete', 93456789];

dados.filter((item) => {
  // retorne apenas os elementos que são do tipo string
  return typeof item === 'string';
});

//console.log(dados.filter((item) => typeof item === 'string'));

console.log(dados.map((dado) => {
  if (typeof dado === 'string') {
    return dado;
  }
})); */

/* const valorItens = [1, 32, 44, 2, 3];

/* valorItens.reduce((acc, curr) => {
  //acc += curr;
  console.log(`acumulador - acc:`, acc);
  console.log(`valorAtual - curr:`, curr);
  return acc + curr;
}, 0);

console.log(valorItens.reduce((acc, curr) => acc + curr)); */

/* const numbers = [1, 32, 44, 2, 3];
let sumNumbers = 30; */
// A variável `sumNumbers` tem um valor inicial de 30 e vai acumulando, a cada iteração do for, o resultado da operação feita em seu escopo!

/* for (let index = 0; index < numbers.length; index += 1) {
  sumNumbers += numbers[index];
}

console.log(sumNumbers); // 112 */

/* console.log(numbers.reduce((acc, curr, index) => {
  if (index === numbers.length -1) {
    return sumNumbers + acc + curr;
  }
  return acc + curr;
})); */

/* console.log(numbers.reduce((acc, curr) => {
  return acc + curr;
}, sumNumbers)); */

// tentar achar o maior número no array numbers utilizando reduce
/* const numbers = [50, 85, -30, 3, 15];

console.log(numbers.reduce((acc, curr) => {
  if (curr > acc) {
    acc = curr;
    return acc;
  }
  return acc;
}));
//ficou boa, porém vi que tem como fazer em uma única linha

console.log(numbers.reduce((acc, curr) => curr > acc ? curr : acc)); */



