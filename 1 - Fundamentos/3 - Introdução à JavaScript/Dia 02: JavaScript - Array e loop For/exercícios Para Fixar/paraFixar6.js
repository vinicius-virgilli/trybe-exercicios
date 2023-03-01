let d1;
let d2;

d1 = Math.ceil(Math.random() * 6);

while (d1 !== d2) {
    d2 = Math.ceil(Math.random() * 6);

    if (d1 !== d2) {
        console.log('O primeiro dado deu ' + d1 + '. e o segundo deu ' + d2);
    } else {
        console.log('O primeiro dado deu ' + d1 + '. e o segundo também deu ' + d2);
    }
}