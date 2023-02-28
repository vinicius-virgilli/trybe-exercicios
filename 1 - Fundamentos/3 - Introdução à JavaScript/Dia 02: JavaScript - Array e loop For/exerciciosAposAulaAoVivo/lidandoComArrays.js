let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum;
let average;
let bigger = - Infinity;
let smaller = Infinity;
let counterOdd = 0;


for (let index = 0; index < numbers.length; index += 1) {
    console.log(numbers[index]);
    sum += numbers[index];

    if (numbers[index] > bigger) {
        bigger = numbers[index];
    }

    if (numbers[index] < smaller ) {
        smaller = numbers[index];
    }

    if (numbers[index] % 2 !== 0 ) {
        counterOdd += 1;
    }

    if (index == numbers.length) {
        console.log('A soma dos números é: ' + sum);
        console.log('')
        average = (sum / index);
        console.log('A média dos números é: ' + average);

        if (average > 20) {
            console.log('A média é maior que 20');
        } else {
            console.log('A média é menor que 20');
        }

        console.log('O maior valor do array é: ' + bigger);

        if (counterOdd > 0) {
            console.log('Existe ' + counterOdd + ' número(s) ímpare(s) no array');
        } else {
            console.log('Nenhum número ímpar encontrado!');
        }

        console.log('O menor valor do array é: ' + smaller);

    }

}



Utilizando for, crie um array que vá de 1 a 25 e imprima o resultado.

Utilizando o array que acabou de criar, imprima o resultado da divisão de cada um dos elementos por 2.