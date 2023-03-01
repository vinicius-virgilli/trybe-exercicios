let n = 10;
let square = '';

if (n > 0) {
    for (let index = 0; index < n; index += 1) {
        square += '*';
    }
} else {
    console.log('Valor inválido!');
}

for (let index = 0; index < square.length; index += 1) {
    console.log(square);
}