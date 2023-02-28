let salarioBruto = 3000
let salarioBase = salarioBruto;

// Calcula o salário base, que é o salário bruto descontado do INSS
if (salarioBruto <= 0) { 
    console.log('salário inválido!');
}   else if (salarioBruto <= 1556.94) {
    salarioBase -= ((salarioBruto * 8) / 100);
}   else if (salarioBruto <= 2594.92) {
    salarioBase -= ((salarioBruto * 9) / 100);
}   else if (salarioBruto <= 5189.84) {
    salarioBase -= ((salarioBruto * 11) / 100);
}   else if (salarioBruto > 5189.84) {
    salarioBase -= (salarioBruto - 570,88);
}

let salarioLiquido = salarioBase;
// Calcula o salário líquido, que é o salário base descontado, ou não, do imposto de renda
if (salarioBase <= 1903.98) {
    salarioLiquido = salarioBase;
}   else if (salarioBase <= 2826.65) {
    salarioLiquido += (-(salarioBase * 7.5) / 100) + 142.8;
}   else if (salarioBase <= 3751.05) {
    salarioLiquido += (-(salarioBase * 15) / 100 + 354.8);
}   else if (salarioBase <= 4664.68) {
    salarioLiquido += (-(salarioBase * 22.5) / 100) + 636.13;
}   else if (salarioBase > 4664.68) {
    salarioLiquido += (-(salarioBase * 27.5) / 100) + 869.36;
}

console.log(salarioLiquido)