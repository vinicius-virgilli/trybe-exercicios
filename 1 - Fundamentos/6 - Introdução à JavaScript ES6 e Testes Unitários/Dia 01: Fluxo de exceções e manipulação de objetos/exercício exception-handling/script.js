const checkNumbers = (a, b) => {
  const number1 = Number(a);
  const number2 = Number(b);
  if (a === '' || b === '') {
    throw new Error('Preencha os campos para realizar a soma');
  } else if (Number.isNaN(number1) || Number.isNaN(number2)) {
    throw new Error('Informe dois números para realizar a soma');
  }
};

function calculateSum() {
  const value1 = document.getElementById('value1').value;
  const value2 = document.getElementById('value2').value;
  try {
    checkNumbers(value1, value2);
    // const result = Number(value1) + Number(value2);
    return Number(value1) + Number(value2);
  } catch (error) {
    return error.message;
  } finally {
    document.getElementById('value1').value = '';
    document.getElementById('value2').value = '';
  }
}

function displayResult(result) {
  document.getElementById('result').innerHTML = `Resultado: ${result}`;
}

function sum() {
  const result = calculateSum();
  displayResult(result);
}

window.onload = () => {
  const button = document.getElementById('button');
  button.addEventListener('click', sum);
};

// Preencha os campos para realizar a soma

// Informe dois números para realizar a soma
