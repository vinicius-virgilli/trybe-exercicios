/* Para as funções encode e decode, crie os seguintes testes em Jest:
Teste se encode e decode são funções;
Para a função encode, teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente;
Para a função decode, teste se os números 1, 2, 3, 4 e 5 são convertidos nas vogais a, e, i, o, u, respectivamente;
Teste se as demais letras/números não são convertidos para cada caso;
Teste se a string que é retornada pelas funções tem o mesmo número de caracteres que a string passada como parâmetro. */

const { mapString, decode, encode } = require('./script');

describe ('Testando função decode', () => {
  it ('Espera function para typeof de decode ', () => {
    expect(typeof encode).toBe('function');
  })

  it ("Espera aeiou quando recebe '12345'", () => {
    expect(decode('12345')).toBe('aeiou');
  })

  it ("Espera uma string de tamanho 5 quando recebe 'tryb3", () => {
    expect(decode('tryb3').length).toBe(5)
  })
})

describe ('Testando função encode', () => {
  it ('Espera function para typeof de encode ', () => {
    expect(typeof encode).toBe('function');
  })

  it ("Espera 12345 quando recebe 'aeiou'", () => {
    expect(encode('aeiou')).toBe('12345');
  })

  it ("Espera uma string de tamanho 5 quando recebe 'tryb3", () => {
    expect(encode('tryb3').length).toBe(5)
  })
})