let n = 27;
let isPrime = true;

for (let index = 2; index < n; index += 1) {
    if (n % index == 0) {
        isPrime = false;   
    }
}

if (isPrime == true) {
    console.log(n + ' é primo');
} else {
    console.log(n + ' não é primo');
}