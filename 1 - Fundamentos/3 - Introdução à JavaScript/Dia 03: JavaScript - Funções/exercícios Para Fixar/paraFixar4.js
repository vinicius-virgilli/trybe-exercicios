//Refatore a função removeCliente para diminuir sua complexidade e quebrá-la em funções menores.

let clientesTrybeBank = ['Ada', 'John', 'Gus'];
let clientToDelete = 'Ada';

function verificaTipoNome(clientToDelete) {
    if (typeof clientToDelete == 'string') {
        return true;
    } else {
        return false;
    }
}

function verificaCliente(clientToDelete) {
    if (clientesTrybeBank.includes(clientToDelete) == true) {
        return true;
    } else {
        return false;
    }
} 

function removeCliente(clientToDelete) {
    if (verificaTipoNome == false) {
        return 'O parâmetro passado deve ser do tipo "string"!';
    }

    if (verificaCliente(clientToDelete) == true) {
        let index = clientesTrybeBank.indexOf(clientToDelete);
        clientesTrybeBank.splice(index, 1);
        return 'Cliente excluída(o) com sucesso.';
    } else {
        return 'Cliente não encontrado';
    }
}

console.log(removeCliente(clientToDelete));