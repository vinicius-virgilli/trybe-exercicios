/* Crie um irmão para elementoOndeVoceEsta.*/
const section = document.createElement('section');
document.querySelector('#pai').appendChild(section);
section.id = 'brother';

/* Crie um filho para elementoOndeVoceEsta.*/
const child = document.createElement('section');
child.id = 'Child';
document.getElementById('elementoOndeVoceEsta').appendChild(child);

/* Crie um filho para primeiroFilhoDoFilho. */
const child2 = document.createElement('ol');
child2.className = 'FistChildOfChild';
document.getElementById('primeiroFilhoDoFilho').appendChild(child2);

/* A partir desse filho criado, acesse terceiroFilho.  */
document.getElementsByClassName('FistChildOfChild')[0].parentElement.parentElement.nextElementSibling