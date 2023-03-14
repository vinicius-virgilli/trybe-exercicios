/* As pessoas devem ter o poder de alterar:

Cor de fundo da tela;
Cor do texto;
Tamanho da fonte;
Espaçamento entre as linhas do texto;
Tipo da fonte (Font family).
Essas preferências devem ser salvas de forma que, ao retornar à página, as preferências que foram previamente configuradas possam ser aplicadas na tela.*/

// vamos colocar o código para ser executado após o carregamento da página

window.onload = () => {
  //Vamos pegar os botões e as propriedades personalizáveis primeiramente
  const btnBackground = document.querySelectorAll("#background-color>button");

  const btnColor = document.querySelectorAll("#font-color>button");

  const btnFontSize = document.querySelectorAll("#font-size>button");

  const btnLineHeight = document.querySelectorAll("#line-height>button");

  const btnFontFamily = document.querySelectorAll("#font-family>button");

  //Vamos checar o localStorage e atualizar os propriedades personalizáveis
  if (localStorage.getItem("backgroundColor") !== null) {
    document.body.style.backgroundColor =
      localStorage.getItem("backgroundColor");
  }

  if (localStorage.getItem("color") !== null) {
    document.body.style.color = localStorage.getItem("color");
  }

  if (localStorage.getItem("fontSize") !== null) {
    document.body.style.fontSize = localStorage.getItem("fontSize");
  }

  if (localStorage.getItem("lineHeight") !== null) {
    document.body.style.lineHeight = localStorage.getItem("lineHeight");
  }

  if (localStorage.getItem("fontFamily") !== null) {
    document.body.style.fontFamily = localStorage.getItem("fontFamily");
  }

  //Agora vamos adicionar os eventos aos botões, mudar dinamicamente no DOM

  for (let btn of btnBackground) {
    btn.addEventListener("click", (event) => {
      document.body.style.backgroundColor = event.target.innerHTML;
      savebackgroundColor(event);
    });
  }

  for (let btn of btnColor) {
    btn.addEventListener("click", (event) => {
      document.body.style.color = event.target.innerHTML;
      saveColor(event); 
    });
  }

  for (let btn of btnFontSize) {
    btn.addEventListener("click", (event) => {
      document.body.style.fontSize = event.target.innerHTML;
      saveFontSize(event);
    });
  }

  for (let btn of btnLineHeight) {
    btn.addEventListener("click", (event) => {
      document.body.style.lineHeight = event.target.innerHTML;
      saveLineHeight(event);
    });
  }

  for (let btn of btnFontFamily) {
    btn.addEventListener("click", (event) => {
      document.body.style.fontFamily = event.target.innerHTML;
      saveFontFamily(event);
    });
  }

  //Agora, por fim, vamos salvar as propriedades personalizáveis no localStorage
  const savebackgroundColor = (event) => {
    let backgroundColor = event.target.innerHTML;
    localStorage.setItem("backgroundColor", backgroundColor);
  }
  
  const saveColor = (event) => {
    let color = event.target.innerHTML;
  localStorage.setItem("color", color);
  }
  
  const saveFontSize = (event) => {
    let fontSize = event.target.innerHTML;
    localStorage.setItem("fontSize", fontSize);
  }
  
  const saveLineHeight = (event) => {
    let lineHeight = event.target.innerHTML;
    localStorage.setItem("lineHeight", lineHeight);
  }

  const saveFontFamily = (event) => {
    let fontFamily = event.target.innerHTML;
    localStorage.setItem("fontFamily", fontFamily);
  }
};
