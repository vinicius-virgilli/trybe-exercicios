let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

 // arroz gato água

// Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo

[comida, animal, bebida] = [bebida, comida, animal];

console.log(comida, animal, bebida);
