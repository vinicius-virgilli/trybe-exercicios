/* Para dar início a página, você deve criar algumas tags: */

/* Adicione a tag h1 com o texto TrybeTrip - Agência de Viagens como filho da tag body; */
const title = document.createElement('h1');
title.innerHTML = 'TrybeTrip - Agência de Viagens';
title.id = 'title';
document.body.appendChild(title);

/* Adicione a tag main com a classe main-content como filho da tag body; */
const main = document.createElement('main');
main.className = 'main-content';
document.body.appendChild(main);

/* Adicione a tag section com a classe center-content como filho da tag main criada no passo 2; */
const section = document.createElement('section');
section.className = 'center-content';
document.getElementsByClassName('main-content')[0].appendChild(section);

/* Adicione a tag p como filho do section criado no passo 3 e coloque algum texto; */
const fistParagraph = document.createElement('p');
fistParagraph.innerHTML = 'Aqui você adquiri a passagem para sua jornada para a carreira de desenvolvedor de sucesso!';
document.getElementsByClassName('center-content')[0].appendChild(fistParagraph);


/* Adicione a tag section com a classe left-content como filho da tag main criada no passo 2; */
const leftSection = document.createElement('section');
leftSection.className = 'left-content';
document.querySelector('.main-content').appendChild(leftSection);

/* Adicione a tag section com a classe right-content como filho da tag main criada no passo 2; */
const rightSection = document.createElement('section');
rightSection.className = 'right-content';
document.getElementsByClassName('main-content')[0].appendChild(rightSection);

/* Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image. Esse elemento deve ser filho do section criado no passo 5; */
const leftImg = document.createElement('img');
leftImg.className = 'small-image';
leftImg.src = 'https://picsum.photos/200';
document.getElementsByClassName('left-content')[0].appendChild(leftImg);

/* Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um, dois, três, … como valores da lista. Essa lista deve ser filha do section criado no passo 6; */
const UList = document.createElement('ul');
document.getElementsByClassName('right-content')[0].appendChild(UList);
UList.id = 'list';
UList.style.color = 'white';
let list = document.getElementById('list');
const li1 = document.createElement('li');

const listItems = {
  1: 'Um',
  2: 'Dois',
  3: 'Três',
  4: 'Quatro',
  5: 'Cinco',
  6: 'Seis',
  7: 'Sete',
  8: 'Oito',
  9: 'Nove',
  10: 'Dez'
}

for (let num in listItems) {
  let li = document.createElement('li');
  li.innerHTML = listItems[num];
  list.appendChild(li);
}

/* Adicione 3 tags h3, todas sendo filhas do main criado no passo 2. */
for (let index = 1; index < 4; index += 1) {
  let h3 = document.createElement('h3');
  h3.className = 'description';
  document.getElementsByClassName('main-content')[0].appendChild(h3);
}

/* Após criar as tags anteriores, você mostrou para a sua liderança como estava a estrutura inicial da página. Sua liderança então pediu para que você fizesse algumas alterações: */
//Adicione a classe title na tag h1 criada;
document.getElementById('title').className = 'title';

//Adicione a classe description nas 3 tags h3 criadas;
//feito no for onde os h3 são criados e filiados

/* Remova a section criada no passo 5 (aquele que possui a classe left-content). Utilize a função .removeChild(); */
let principal = document.getElementsByClassName('main-content')[0];
principal.removeChild(principal.children[1]);

/* Centralize a section criada no passo 6 (aquele que possui a classe right-content). */
/* De olho na dica 👀:: Para centralizar a section, basta configurar o margin-right: auto da section; */
document.getElementsByClassName('right-content')[0].style.margin = 'auto';

/* Troque a cor de fundo do elemento pai da section criada no passo 3 (aquela que possui a classe center-content) para a cor verde; */
document.getElementsByClassName('center-content')[0].parentElement.style.backgroundColor = 'green';

/* Remova os dois últimos elementos (nove e dez) da lista criada no passo 8. */
const arrayLi = document.getElementById('list');
const ultimo = arrayLi.children.length - 1;
for (let index = ultimo; index >= (ultimo - 1); index -= 1) {
  arrayLi.removeChild(arrayLi.children[index]);
}
