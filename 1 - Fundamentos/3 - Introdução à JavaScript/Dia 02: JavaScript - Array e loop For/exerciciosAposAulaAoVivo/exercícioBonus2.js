let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 1; index < numbers.length; index += 1) {
    for (secondIndex = 0; secondIndex < numbers.length; secondIndex += 1) {
        if (numbers[index] > numbers[secondIndex]) {
            let support = numbers[index];
            numbers[index] = numbers[secondIndex];
            numbers[secondIndex] = support;
        }
    }
}

console.log('O array numbers em ordem decrescente é: ' + numbers);