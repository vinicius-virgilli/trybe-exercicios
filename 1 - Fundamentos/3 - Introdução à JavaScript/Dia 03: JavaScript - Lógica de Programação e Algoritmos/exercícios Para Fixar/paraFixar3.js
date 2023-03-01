/* Agora iremos escrever um programa que irá excluir um(a) cliente já existente do array de clientes do TrybeBank. Certifique-se de que a função deve receber um parâmetro do tipo string e imprimir uma mensagem de erro, caso o parâmetro não seja do tipo string e caso o(a) cliente não exista dentro do array.*/

let clientesTrybeBank = ['Ada', 'John', 'Gus'];
let clientToDelete = 'Vinicius';

function deleteTheClient(clientToDelete) {
    if (typeof(clientToDelete) == typeof(clientesTrybeBank[0]) &&
    clientesTrybeBank.includes(clientToDelete) == true) {
        let index = clientesTrybeBank.indexOf(clientToDelete);
        clientesTrybeBank.splice(index, 1);
    } else {
        return(console.log('Nome inválido ou não é um cliente!'));
    }
}


deleteTheClient(clientToDelete);
console.log(clientesTrybeBank);
