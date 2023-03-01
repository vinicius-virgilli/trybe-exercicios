let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let multiplidNumbers = [];

for (let index = 0; index < numbers.length; index += 1) {
    if (index !== (numbers.length -1)) {
        multiplidNumbers.push(numbers[index] * numbers[index + 1]);
    } else {
        multiplidNumbers.push(numbers[index] * 2);
    }
}

console.log('O novo array fica assim: ' + multiplidNumbers);
