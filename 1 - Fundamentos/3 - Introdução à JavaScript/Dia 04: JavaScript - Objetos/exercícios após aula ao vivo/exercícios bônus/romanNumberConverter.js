/* | I   | 1    |
| --- | ---- |
| IV  | 4    |
| V   | 5    |
| IX  | 9    |
| X   | 10   |
| XL  | 40   |
| L   | 50   |
| XC  | 90   |
| C   | 100  |
| CD  | 400  |
| D   | 500  |
| CM  | 900  |
| M   | 1000 | */
/* Que tal criar um objeto que associe cada letra a um numeral para facilitar a consulta?
Atenção! Quando você tem um número pequeno à direita de um número grande, eles devem ser somados, por exemplo: XI = 10 + 1 = 11. No entanto, se o número pequeno estiver à esquerda de um número maior que ele, ele deverá ser subtraído, por exemplo: IX = 10 - 1 = 9. */

//Cria objeto para armazenar algarismos romanos e seus correspondentes arábicos
const romanNumbers = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
};

let romanNumber = 'Mcmxcv';
// Checando se a string recebida está no formato de números romanos
const checkRomanNumber = (romanNumber) => {
  let check;
  (typeof (romanNumber) !== 'string') ? check = false : check = true;
  return check;
}

/* Função que gera um array de números arábicos correspondentes ao número romano recebido. Mesmo que algum algarismo romano esteja minúsculo */

const arabicArray = (romanNumber) => {
  let arabicArray = [];
  romanNumber = romanNumber.toUpperCase();
  for (index in romanNumber) {
    arabicArray[index] = romanNumbers[romanNumber[index]];
  }
  return arabicArray;
}

//Função que retorna o algarismo romano em algarismo arábico (sistema usado atualmente)
const romanNumbersConverter = (romanNumber) =>  {
  if (checkRomanNumber(romanNumber) == false) {
    return `${romanNumber} não é válido!
digite um número no formato "XXXIII" ou "xxxiii" por favor`;
  }

  let array = arabicArray(romanNumber);
  let arabicNumber = 0;

  //if (isUnit(romanNumber) == true) { return array[0];}

  for (let index = (array.length - 1); index >= 0; index -= 1) {
    if (array[index] > array[index - 1]) {
      arabicNumber += array[index] - array[index - 1];
      index -= 1;
    } else {
      arabicNumber += array[index];
    }
  }
  return arabicNumber;

}

console.log(romanNumbersConverter(romanNumber));
