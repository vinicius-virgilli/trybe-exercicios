window.onload = () => {
  // CAPTURANDO ELEMENTOS
  const btnSubmit = document.getElementById('submit-btn');
  const btnAgreement = document.getElementById('agreement');
  //-------------------------------------------------

  // Deixa o botão submit desabilitado desde o início
  btnSubmit.disabled = true;

  // Tirando comportamento padrão do btnSubmit caso o botão agreement não esteja checked
  btnSubmit.addEventListener('click', (event) => {
    event.preventDefault();
  });

  // Habilita botão submit ao aceitar os termos
  btnAgreement.addEventListener('click', () => {
    if (btnAgreement.checked == false) {
      btnSubmit.disabled = true;
    } else {
      btnSubmit.disabled = false;
    }
  });
};
