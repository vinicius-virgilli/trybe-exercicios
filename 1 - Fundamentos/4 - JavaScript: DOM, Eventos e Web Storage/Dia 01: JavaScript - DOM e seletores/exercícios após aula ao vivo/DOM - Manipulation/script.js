const changeParagraph = () => {
  document.querySelectorAll(".center-content p")[1].innerText =
    "Quero estar desenvolvendo bem na carreiro como desenvolvedor de software!";
};
changeParagraph();

const changeYellowSquareColor = () => {
  document.getElementsByClassName("main-content")[0].style.background =
    "rgb(76, 164, 109)";
};
changeYellowSquareColor();

const changeRedSquareColor = () => {
  document.querySelector(".main-content section").style.background = "white";
};
changeRedSquareColor();

const changeH1 = () => {
  document.getElementsByTagName('h1')[0].innerText = 'Desafio - JavaScript';
}
changeH1();

const changeFistP = () => {
  document.querySelector('p').innerText = document.querySelector('p').innerText.toUpperCase();
}
changeFistP();

const printTagsP = () => {
  let array = document.querySelectorAll('p');
  let footerP = '';
  for (let index in array) {
    footerP += `${array[index].innerText} `;
  }
  document.querySelector('footer p').innerText = footerP;
}
printTagsP();