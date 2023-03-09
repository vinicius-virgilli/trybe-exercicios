/* Acesse o elemento elementoOndeVoceEsta. */
document.getElementById("elementoOndeVoceEsta");

/* Acesse o elemento elementoOndeVoceEsta.
Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele. */
document.getElementById('elementoOndeVoceEsta').parentElement.style.background = 'green';

/* Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso? */
document.getElementById('primeiroFilhoDoFilho').innerText = 'Estou aprendendo a interagir com o HTML e CSS através do javascript';

/* Acesse o primeiroFilho a partir de pai. */
document.getElementById("pai").firstChild;

/* Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta. */
document.getElementById('elementoOndeVoceEsta').previousSibling;

/* Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta. */
document.getElementById('elementoOndeVoceEsta').nextSibling;

/* Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta. */
document.getElementById('elementoOndeVoceEsta').nextSibling.nextSibling;

/* Agora acesse o terceiroFilho a partir de pai. */
document.getElementById('pai').children[2]

