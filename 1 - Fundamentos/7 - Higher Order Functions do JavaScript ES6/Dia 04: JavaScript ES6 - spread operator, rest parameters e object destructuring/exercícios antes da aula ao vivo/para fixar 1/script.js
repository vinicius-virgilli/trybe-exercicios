/* console.log(Math.max(57, 8, 5, 800, 152, 74, 630, 98, 40)); // 800console.log(Math.max(57, 8, 5, 800, 152, 74, 630, 98, 40)); // 800

const randomNumbers = [57, 8, 5, 800, 152, 74, 630, 98, 40];
console.log(Math.max(...randomNumbers)); // 800 */

/* Para fixar
Vamos fazer uma salada de frutas com os itens adicionais que você desejar.

Faça uma função chamada fruitSalad, passando como parâmetro specialFruit e additionalItens; faça a função retornar uma lista única, contendo todos os itens da nossa salada de frutas, usando o spread. */

// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Banana', 'Abacate', 'Laranja'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['granola', 'leite em pó', 'morango'];

const fruitSalad = (fruit, additional) => [...fruit, ...additionalItens];

console.log(fruitSalad(specialFruit, additionalItens));
