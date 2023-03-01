let n = 10;
let triangle = '';

for (let index = (n-1); index >= 0; index += -1) {
    triangle = '';
    for (let secondIndex = 0; secondIndex < n; secondIndex += 1) {
        if (secondIndex >= index) {
            triangle += '*';
        } else {
            triangle += ' ';
        }
    }
    console.log(triangle);
}