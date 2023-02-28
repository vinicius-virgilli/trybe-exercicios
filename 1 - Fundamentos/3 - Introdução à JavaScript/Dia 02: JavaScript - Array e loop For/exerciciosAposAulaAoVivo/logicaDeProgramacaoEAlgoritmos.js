let tenFactorial = 1;
let initialString = 'amor';
let reverseString = 'kkkk';

for (let index = 10; index > 0; index -= 1) {
    tenFactorial = tenFactorial * index
}

console.log('10! = ' + tenFactorial);

for (let index = 0; index < initialString.length; index += 1) {
    let reverseStringIndex = (initialString.length -1 - index); 
    reverseString = initialString[reverseStringIndex];
}

console.log('\nO inverso de ' + initialString + ' é ' + reverseString);

