// Requisito 1 - Crie a função verificaPalindromo
function verificaPalindromo(initialString) {
  let test = false;
  let reverseString = '';
  for (let index = 0; index < initialString.length; index += 1) {
    let reverseStringIndex = initialString.length - 1 - index;
    reverseString += initialString[reverseStringIndex];
  }
  if (reverseString === initialString) {
    test = true;
  }
  return test;
}

// Requisito 2 - Crie a função indiceDoMaior
function indiceDoMaior(numbers) {
  let bigger = -Infinity;
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] > bigger) {
      bigger = numbers[index];
    }
  }
  return numbers.indexOf(bigger);
}

// Requisito 3 - Crie a função indiceDoMenor
function indiceDoMenor(numbers) {
  let smaller = Infinity;
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] < smaller) {
      smaller = numbers[index];
    }
  }
  return numbers.indexOf(smaller);
}

// Requisito 4 - Crie a função maiorPalavra
function maiorPalavra(palavras) {
  let bigger = '';
  for (let index = 0; index < palavras.length; index += 1) {
    if (palavras[index].length > bigger.length) {
      bigger = palavras[index];
    }
  }
  return bigger;
}

// Requisito 5 - Crie a função maisRepetido
function maisRepetido(numbers) {
  let contRepeated = [];
  let repeated = 0;
  for (let index = 0; index < numbers.length; index += 1) {
    contRepeated.push(0);
    for (let secondIndex = 0; secondIndex < numbers.length; secondIndex += 1) {
      if (numbers[index] === numbers[secondIndex]) {
        contRepeated[index] += 1;
      }
    }
  }
  for (let index of contRepeated) {
    if (contRepeated[index] > repeated) {
      repeated = contRepeated[index];
    }
  }
  let index = contRepeated.indexOf(repeated);
  return numbers[index];
}

// Requisito 6 - Crie a função somatorio
function somatorio(num) {
  let sum = 0;
  if (num < 0) {
    sum = 'ERRO';
  } else {
    for (let index = 1; index <= num; index += 1) {
      sum += index;
    }
  }

  return sum;
}

// Requisito 7 - Crie a função verificaFimPalavra
function verificaFimPalavra(palavra1, palavra2) {
  let tail = true;
  for (
    let index = palavra1.length - palavra2.length;
    index < palavra1.length;
    index += 1
  ) {
    for (let secondIndex = 0; secondIndex < palavra2.length; secondIndex += 1) {
      if (palavra1[index] !== palavra2[secondIndex]) {
        tail = false;
      } else {
        index += 1;
      }
    }
  }
  return tail;
}
console.log(verificaFimPalavra('trybe', 'by'));
// Não modifique essas linhas
module.exports = {
  verificaPalindromo:
    typeof verificaPalindromo === 'function' ? verificaPalindromo : () => {},
  indiceDoMaior: typeof indiceDoMaior === 'function' ? indiceDoMaior : () => {},
  indiceDoMenor: typeof indiceDoMenor === 'function' ? indiceDoMenor : () => {},
  maiorPalavra: typeof maiorPalavra === 'function' ? maiorPalavra : () => {},
  maisRepetido: typeof maisRepetido === 'function' ? maisRepetido : () => {},
  somatorio: typeof somatorio === 'function' ? somatorio : () => {},
  verificaFimPalavra:
    typeof verificaFimPalavra === 'function' ? verificaFimPalavra : () => {},
};
