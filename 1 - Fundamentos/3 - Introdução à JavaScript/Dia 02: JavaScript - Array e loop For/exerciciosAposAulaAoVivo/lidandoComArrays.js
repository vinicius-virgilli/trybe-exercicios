let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;
let average = 0
let bigger = - Infinity;
let smaller = Infinity;
let counterOdd = 0;
let newArray = [];

console.log('Os ítens do array são: \n');

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

    if (index == numbers.length - 1) {
        console.log('\nA soma dos números é: ' + sum);
        average = (sum / numbers.length);
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

console.log('\nOs ítens de um array de 1 até 25 são:\n')

for (let index = 0; index < 25; index += 1) {
    newArray.push(index + 1);
    console.log(newArray[index])
}

console.log('\nOs ítens de um array de 1 até 25, divididos por 2, são:\n')

for (let index = 0; index < newArray.length; index += 1) {
    console.log(newArray[index] / 2)
}
