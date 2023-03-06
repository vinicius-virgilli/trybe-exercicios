/* Por meio do array de frutas basket, retorne um objeto que contenha o nome da fruta como chave e a quantidade de vezes que ela aparece no array como valor. Por exemplo, o array [‘Melancia’, ‘Abacate’, ‘Melancia’, ‘Melancia’, ‘Uva’] deverá retornar { Melancia: 3, Abacate: 1, Uva: 1 } quando passado como argumento para a função.

Em seguida, imprima esse resultado na tela com uma mensagem no seguinte formato: Sua cesta possui: x Melancias, x Abacates... */

let basket = [
  'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
  'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
  'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
  'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
  'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
  'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
  'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
  'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
  'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
  'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
  'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
  'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
  'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
  'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
  'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
  'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
  'Banana', 'Pera', 'Abacate', 'Uva',
];

//Função que retorna um objeto que contenha o nome da fruta como chave e a quantidade de vezes que ela aparece no array basket como valor
const objectFruitApparitions = (basket) => {
  let fruitApparitions = {};
  for (let fruit of basket) {
    if (fruitApparitions[fruit] == undefined) {
      fruitApparitions[fruit] = 1;
    } else{
      fruitApparitions[fruit] += 1;
    }
  }
  return fruitApparitions;
 }
//console.log(objectFruitApparitions(basket));

//Função recebe o array basket e retorna uma mensagem no seguinte formato: x Melancias, x Abacates... */
const message = (object) => {
  let objectFruit = objectFruitApparitions(object);
  let messageArray = [];
  for (fruit in objectFruit) {
    if (objectFruit[fruit] > 1) {
      messageArray.push(`${objectFruit[fruit]} ${fruit}s`);
    } else {
      messageArray.push(`${objectFruit[fruit]} ${fruit}`);
    }
    
  }
  return messageArray;
}
console.log(`Sua cesta possui: ${message(basket).join(', ')}.`);
