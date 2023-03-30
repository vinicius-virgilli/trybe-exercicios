const myFizzBuzz = require('./script');

describe ('Testando função myFizzBuzz', () => {
  it ('Espera fizzbuzz quando recebido 15', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  })

  it ('Espera fizz quando recebido 9', () => {
    expect(myFizzBuzz(9)).toBe('fizz');
  })

  it ('Espera buzz quando recebido 10', () => {
    expect(myFizzBuzz(10)).toBe('buzz');
  })

  it ('Espera 11 quando recebido 11', () => {
    expect(myFizzBuzz(11)).toBe(11);
  })

  it ("Espera false quando recebido '11'", () => {
    expect(myFizzBuzz('11')).toBe(false);
  });

});

/* A função myFizzBuzz(num) recebe um número num como parâmetro. Caso num seja um número divisível por 3 e 5, a função retorna "fizzbuzz". Caso num seja um número divisível apenas por 3, retorna "fizz". E caso num seja um número divisível apenas por 5, retorna "buzz". Se num for um número que não é divisível nem por 3 e nem por 5, a função retorna o próprio número num. Caso num não seja um número, a função retorna false.
Execute a função myFizzBuzz(num), sendo num um número divisível por 3 e 5, e verifique se o retorno é o esperado.

Execute a função myFizzBuzz(num), sendo num um número divisível por 3, e verifique se o retorno é o esperado.

Execute a função myFizzBuzz(num), sendo num um número divisível por 5, e verifique se o retorno é o esperado.

Execute a função myFizzBuzz(num), sendo num um número que não é divisível por 3 ou 5, e verifique se o retorno é o esperado.

Execute a função myFizzBuzz(num), sendo num um parâmetro que não é um número, e verifique se o retorno é o esperado. */