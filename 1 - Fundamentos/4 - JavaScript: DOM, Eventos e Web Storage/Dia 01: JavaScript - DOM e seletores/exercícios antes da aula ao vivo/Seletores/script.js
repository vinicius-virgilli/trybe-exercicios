/*Perceba que todo o conteúdo da página está na cor branca, utilize o que aprendeu no conteúdo de hoje para que a página fique igual ao Administrador do Tempo da Trybe. */

document.getElementById('header-container').style.background = 'green';
document.getElementsByClassName('emergency-tasks')[0].style.background = 'pink';
document.getElementsByClassName('no-emergency-tasks')[0].style.background = 'yellow';
document.querySelectorAll('.emergency-tasks div h3')[0].style.background = 'purple';
document.querySelectorAll('.emergency-tasks div h3')[1].style.background = 'purple';
document.querySelectorAll('.no-emergency-tasks div h3')[0].style.background = 'black';
document.querySelectorAll('.no-emergency-tasks div h3')[1].style.background = 'black';
document.getElementsByTagName('footer')[0].style.background = 'green';