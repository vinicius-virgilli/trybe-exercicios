let a = 90;
let b = 90;
let c = 0;

if (a <= 0 || b <= 0 || c <= 0) {
    console.log('Erro!. Um dos ângulos não é positivo');
} else if (a + b + c == 180) {
    console.log("São ângulos de um triângulo!");
} else {
    console.log("Não são ângulos de um triângulo!");
}