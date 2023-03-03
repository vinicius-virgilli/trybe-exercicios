let lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

let lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

let lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// Crie uma função para adicionar o turno da noite na lesson2. Essa função deve ter três parâmetros: o objeto a ser modificado, a chave a ser adicionada e o valor dela.
function addShift(object,key,value) {
  object[key] = value;
}

addShift(lesson2,'turno','noite');

// Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.
function listKeys(object) {
  return Object.keys(object);
}

// Crie uma função para mostrar o tamanho de um objeto. Essa função deve receber um objeto como parâmetro.
function sizeOfObject(object) {
  return Object.keys(object).length;
}

// Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.
function listValues(object) {
  return Object.values(object);
}

// Crie um objeto de nome allLessons, que deve agrupar todas as aulas por meio do Object.assign. Cada chave desse novo objeto será uma aula, portanto essas chaves serão nomeadas lesson1, lesson2 e lesson3. Ao executar o comando console.log(allLessons)

let allLessons = Object.assign({}, {
  'lesson1': lesson1, 
  'lesson2': lesson2, 
  'lesson3': lesson3
});

// Com base no objeto elaborado no tópico anterior, crie uma função que retorne o número total de estudantes em todas as aulas.

function totalStudentes(object) {
  let count = 0;
  for (let key in object) {
    count += object[key].numeroEstudantes;
  }

  return count;
}

// Crie uma função que obtenha o valor da chave de acordo com sua posição no objeto. Por exemplo:
// console.log(getValueByNumber(lesson1, 0));
// Output: 'Matemática'

function valueByPosition(key,position) {
  return Object.values(key)[position];
}

console.log(valueByPosition(lesson1,0));