import Swal from 'sweetalert2';
import './style.css';

const buttonEl = document.querySelector('button');
const inputEl = document.querySelector('input');
const preEl = document.querySelector('pre');

buttonEl.addEventListener('click', handleClick);

async function handleClick() {
  const cep = inputEl.value;
  try {
    const result = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const data = await result.json();
    if (data.erro) throw new Error('CEP inválido!');
    preEl.innerHTML = JSON.stringify(data);
  } catch (error) {
    preEl.innerHTML = '';
    if (error.message == 'Failed to fetch') error.message = 'Passe um CEP no formato 74395038';
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: error.message,
      customClass: {
        popup: 'errorStyle',
      }
    });
  }
}
