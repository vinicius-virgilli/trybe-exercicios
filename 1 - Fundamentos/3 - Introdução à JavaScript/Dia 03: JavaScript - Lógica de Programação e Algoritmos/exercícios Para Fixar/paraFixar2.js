/*Faça um programa para adicionar clientes ao array de clientes do TrybeBank. Certifique-se de que a função deve receber um parâmetro do tipo string e imprimir uma mensagem de erro caso o parâmetro não seja do tipo string.
*/

let clientesTrybeBank = ['Ada', 'John', 'Gus'];
let newclient = 'Vinicius';

function AddNewClient(newclient) {
    if (typeof(newclient) == typeof(clientesTrybeBank[0])) {
        clientesTrybeBank.push(newclient);
    } else {
        return('Nome de cliente inválido!')
    }
    
}

AddNewClient(newclient);
console.log(clientesTrybeBank);

