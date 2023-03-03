/* Considere a variável saldo, que representa a quantia em conta de determinada(o) cliente do TrybeBank e escreva quatro programas que:

Adicione um valor ao saldo.
Subtraia um valor do saldo.
Multiplique o valor do saldo por uma taxa.
Divida o valor do saldo.*/

let saldo = 27500;
let valueToAdd = 300;
let valueToSubtract = 850;
let rate = 1.01;
let divisor = 0.95;

//Adiciona um valor ao saldo.

function adicionaValor(saldo,valueToAdd) {
    saldo += valueToAdd;
    return(saldo);
}

saldo = adicionaValor(saldo,valueToAdd);
console.log('Saudo depois de adicionar valor: ' + saldo);

//Subtrai um valor do saldo.

function subtraiValor(saldo,valueToSubtract) {
    saldo += -valueToSubtract;
    return(saldo);
}

saldo = subtraiValor(saldo,valueToSubtract);
console.log('Saudo depois de subtrair valor: ' + saldo);

//Multiplica o valor do saldo pela taxa rate.

function multiplesByTheRate(saldo,rate) {
    saldo = saldo * rate;
    return(saldo);
}

saldo = multiplesByTheRate(saldo,rate);
console.log('Saudo depois de ser multiplicado pela taxa: ' + saldo);

//Divide o valor do saldo pelo divisor.

function divideByDivisor(saldo,divisor) {
    saldo = saldo / divisor;
    return(saldo);
}

saldo = divideByDivisor(saldo,divisor);
console.log('Saudo depois de ser Dividido pelo divisor: ' + saldo);