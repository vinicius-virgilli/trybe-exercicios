const firstLi = document.getElementById("first-li");
const secondLi = document.getElementById("second-li");
const thirdLi = document.getElementById("third-li");
const input = document.getElementById("input");
const myWebpage = document.getElementById("my-spotrybefy");

// - Copie esse arquivo e edite apenas ele;

/*   - Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?
Resposta: Porque a primeira caixa da esquerda para a direita tem uma propriedade de estilo que as outras duas caixas não têm. Que é: transform: translateY(-20px); */

// - Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.
const addClassTech = (event) => {
  const childrenUl = document.querySelector('.container').children;
  for (let li of childrenUl) {
    ( li.id == event.target.id) ? (event.target.className = 'tech') : (li.className = '');
  }
};

const addEventListenerClick = () => {
  let childrenUl = document.querySelector('.container').children;
  for (let li of childrenUl) {
    li.addEventListener('click', addClassTech);
  }
};
addEventListenerClick();

//  - Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?
/* Alterei a função que é acionada quando o evento é escutado para apenas o li clicado ficar com a classe addClassTech */

// - Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';
const changeTextOfBox = (event) => {
  document.querySelector('.tech').innerText = event.target.value;
}

document.querySelector('#input').addEventListener('input', changeTextOfBox);

// - Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
//  - Que tal redirecionar para seu portfólio?
const toMyPortfolio = (event) => {
  window.location.replace('https://vinicius-virgilli.github.io/');
}

document.querySelector('#my-spotrybefy').addEventListener('dblclick', toMyPortfolio);

// - Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;
const myspotrybefy = document.querySelector('#my-spotrybefy');

const changecolorOver = (event) => {
  event.target.style.color = 'yellow';
}
myspotrybefy.addEventListener('mouseover', changecolorOver);

myspotrybefy.addEventListener('mouseout',(event) => { event.target.style.color = 'white';})

// Segue abaixo um exemplo do uso de event.target:

const resetText = (event) => {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = "Opção reiniciada";
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
};

firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.
