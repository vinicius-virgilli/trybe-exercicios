import Swal from 'sweetalert2';
import './style.css';

// Capturando elementos
const searchedCoinEl = document.querySelector('#searchedInput');
const searchBtn = document.querySelector('.searchBtn');
const coinsList = document.querySelector('.coins');
const coinsTitle = document.querySelector('.coinsTitle');
const urlBase = 'https://api.exchangerate.host/latest?base=';
const coinSymbol = '<img src="./imagens/coinSymbol.svg">';

// função que cria o li
const createLi = (name, value) => {
  const li = document.createElement('li');
  li.classList.add('coin');
  const maxDecimal = 3;
  li.innerHTML = `<div>${coinSymbol} ${name}</div>
  <span>${Number(value.toFixed(maxDecimal))}</span>`;
  coinsList.appendChild(li);
};

// Função que verifica o input
const verifyInput = (searchedCoin, coinNames) => {
  try {
    if (!searchedCoin) {
      throw new Error('Você precisa passar uma moeda');
    }
  } catch (error) {
    return Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: error.message,
      customClass: {
        popup: 'errorStyle',
      },
    });
  }
  try {
    if (!coinNames.includes(searchedCoin)) {
      throw new Error('Moeda não existente!');
    }
  } catch (error) {
    return Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: error.message,
      customClass: {
        popup: 'errorStyle',
      },
    });
  }
  return false;
};

// Função que cria os li
const createCoinsTitle = (searchedCoin) => {
  coinsTitle.innerHTML = '';
  const h2 = document.createElement('h2');
  h2.innerHTML = `Valores referentes a 1 ${searchedCoin}`;
  coinsTitle.appendChild(h2);
};

// Função que faz a requisição na API e chama outras funções
const getCoins = (urlBASE, searchedCoin) => fetch(`${urlBASE}${searchedCoin}`).
  then((Request) => Request.json()).
  then((data) => {
    coinsList.innerHTML = '';
    const coinNames = Object.keys(data.rates);
    const coinValues = Object.values(data.rates);
    if (!verifyInput(searchedCoin, coinNames)) {
      createCoinsTitle(searchedCoin);
      coinNames.forEach((name, index) => {
        createLi(name, coinValues[index]);
      });
    }
  });

// Evento de clique no botão Pesquisar
searchBtn.addEventListener('click', (event) => {
  event.preventDefault();
  const searchedCoin = searchedCoinEl.value;
  getCoins(urlBase, searchedCoin);
});
