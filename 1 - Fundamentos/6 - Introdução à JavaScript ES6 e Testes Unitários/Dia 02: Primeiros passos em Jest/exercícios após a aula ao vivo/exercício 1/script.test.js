const myRemove = require('./script');

/* Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado;

Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4];

Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado. */
// implemente seus testes aqui
describe ('testando função myRemote', () => {
  it ('Espera [1,2,4] quando recebido [1,2,3,4] e 3', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1,2,4]);
  })

  it ('Não espera [1,2,3,4] quando recebido [1,2,3,4] e 3', () => {
    expect(myRemove([1,2,3,4], 3)).not.toEqual(![1,2,3,4]);
  })

  it ('Espera [1,2,3,4] quando recebido [1,2,3,4] e 5', () => {
    expect(myRemove([1,2,3,4], 5)).toEqual([1,2,3,4]);
  })
})