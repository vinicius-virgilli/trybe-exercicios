let tenFactorial = 1;
let initialString = 'amor';
let reverseString = '';

for (let index = 10; index > 0; index -= 1) {
    tenFactorial = tenFactorial * index
}

console.log('10! = ' + tenFactorial);

for (let index = 0; index < initialString.length; index += 1) {
    let reverseStringIndex = (initialString.length -1 - index); 
    reverseString += initialString[reverseStringIndex];
}

console.log('\nO inverso de ' + initialString + ' é ' + reverseString);

let array = ['java', 'javascript', 'python', 'html', 'css'];
let biggerWord = array[0];
let smallerWord = array[0];

for (let index = 1; index < array.length; index += 1) {
    if (array[index].length > biggerWord.length) {
        biggerWord = array[index]
    }

    if (array[index].length < smallerWord.length) {
        smallerWord = array[index];
    }
}

console.log('\nA maior string no array é: ' + biggerWord);
console.log('A menor string no array é: ' + smallerWord);




