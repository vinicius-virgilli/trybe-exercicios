// função que gera um número aleatório
const generateRandomNumber = () => Math.round(Math.random() * 10);

// promise resolvida retornando o número aleatório
const resolvedPromise = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNumber = generateRandomNumber();
      if (randomNumber % 2 === 0) {
        resolve(randomNumber);
      } else {
        reject(new Error(`Número ${randomNumber} é ímpar!`));
      }
      
    }, 1000);
  });

  resolvedPromise().then((Response) => console.log(Response)).catch((error) => {
    console.log(error.message);
  }).finally(() => console.log('Fim da execução do Promise'));


