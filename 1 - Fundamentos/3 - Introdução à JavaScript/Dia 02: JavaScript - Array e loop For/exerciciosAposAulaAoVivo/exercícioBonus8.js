let n = 5
let pyramid = '';
let countOdd = 0;
let lineSize = Math.trunc(n /2);
let firstCharacterPosition = Math.trunc(n / 2 + 1);
let lestCharacterPosition = firstCharacterPosition;
// Como o nº de linhas da pirâmide é igual ao número de ímpares de 1 até n,
//vamos descobrir quantos ímpares temos

for (let index = 1; index <= n; index += 1) {
    if (index % 2 !== 0) {
        countOdd += 1;
    }
}

for (let index = 0; index < countOdd; index += 1) {
    pyramid = '';
    lineSize += 1;
    firstCharacterPosition += -1;
    lestCharacterPosition += 1;

    for (let secondIndex = 0; secondIndex < n; secondIndex += 1) {
        
        if (secondIndex == firstCharacterPosition || 
            secondIndex == lestCharacterPosition ||
            secondIndex == (n - 1)) {
            pyramid += '*';
        } else {
            pyramid += ' ';
        }
    }
    console.log(pyramid);
}


