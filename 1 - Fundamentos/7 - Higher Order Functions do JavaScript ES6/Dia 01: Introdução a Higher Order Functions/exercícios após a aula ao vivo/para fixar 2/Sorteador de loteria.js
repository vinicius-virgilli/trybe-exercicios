
/* Desenvolva uma HOF que retorne o resultado de um sorteio. Essa HOF irá gerar um número aleatório entre 1 e 5, recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: “Tente novamente” ou “Parabéns, você ganhou”). */

const checkAposta = (aposta) => {
  const sorteado = Math.floor((Math.random() * 5));
  return (sorteado === aposta) ? true : false;
};

const hof = (aposta, callback) => {
  return (callback(aposta)) ? `Parabéns, você ganhou` : `Tente outra vez`;
};

console.log(hof(2, checkAposta));


