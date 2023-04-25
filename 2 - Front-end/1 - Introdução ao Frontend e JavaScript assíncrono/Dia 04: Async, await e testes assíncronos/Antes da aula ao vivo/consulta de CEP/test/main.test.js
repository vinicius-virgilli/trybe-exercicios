import handleClick from '.main.js';

describe('Quando a requisição é bem sucedida, deve retornar os dados corretos:', () => {
  test('Quando recebe um cep válido, retorna informações corretas', async () => {
    const info = await handleClick('74395038');
    expect(info.cep).toBe('74395-038');
  });
});