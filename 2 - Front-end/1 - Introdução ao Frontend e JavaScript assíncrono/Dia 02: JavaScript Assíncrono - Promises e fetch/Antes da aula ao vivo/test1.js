// O objetivo aqui é criar um algoritmo que mostre a resolução de uma operação matemática simples, de forma paulatina

// operações possíveis: Soma, Subtração, Multiplicação e Divisão
let num1;
let num2;
let operation;
let resultado;

const mostraNumeros = () => new Promise((resolve, reject) => {
    setTimeout(() => {
      num1 = Math.floor((Math.random() * 10) + 1);
      num2 = Math.floor((Math.random() * 10) + 1);
      if (num1 !== num2) {
        resolve([num1, num2]);
      } else {
        reject(new Error(`${num1} e ${num2} são iguais!`));
      }
    }, 1000);
  });

mostraNumeros().
  then((numbers) => {
  console.log(`Números da operação serão: ${numbers[0]} e ${numbers[1]}`);
}).catch((message) => {
  console.log(message);
});

const operations = ['Soma', 'Subtração', 'Multiplicação', 'Divisão'];

const operationSorteio = () => {
  const sorteioOperation = Math.floor(Math.random() * 4);
  return operations[sorteioOperation];
}

const mostraOperation = () => new Promise((resolve, reject) => {
  setTimeout(() => {
    operation = operationSorteio();
    if (operation) {
      resolve(operation);
    } else {
      reject(new Error("Operação é indefinida!"));
    }
  }, 5000);
});

mostraOperation().
  then((Response) => console.log(`A operação será ${Response}`)).
  catch((error)  => error.message);

const mostraResultado = () => new Promise((resolve, reject) => {
  setTimeout(() => {
    switch (operation) {
      case 'Soma':
        resultado = num1 + num2;
        break;
      case 'Subtração':
        resultado = num1 - num2;
        break;
      case 'Multiplicação':
        resultado = num1 * num2;
        break;
      case 'Divisão':
        resultado = num1 / num2;
        break;
      default:
        resultado = undefined;
    }
    if (resultado) {
      resolve(`O resultado da operação é: ${resultado}`);
    } else {
      reject(new Error("O resultado é indefinido!"));
    }
  }, 9000);
});

mostraResultado().
  then((Response) => console.log(Response)).
  catch((error) => error.message).
  finally(() => console.log('Fim da operação'));
