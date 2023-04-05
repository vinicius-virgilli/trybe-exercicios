/* 2 - Crie uma função usando dados de estudantes, para mostrar na tela um relatório que diz em qual matéria a pessoa foi melhor. Você usará tanto o map quanto o reduce dentro dele! */

const estudantes = [
  {
    nome: 'Jorge',
    sobrenome: 'Silva',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 67 },
      { name: 'Português', nota: 79 },
      { name: 'Química', nota: 70 },
      { name: 'Biologia', nota: 65 },
    ],
  },
  {
    nome: 'Mario',
    sobrenome: 'Ferreira',
    idade: 15,
    turno: 'Tarde',
    materias: [
      { name: 'Matemática', nota: 59 },
      { name: 'Português', nota: 80 },
      { name: 'Química', nota: 78 },
      { name: 'Biologia', nota: 92 },
    ],
  },
  {
    nome: 'Jorge',
    sobrenome: 'Santos',
    idade: 15,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 76 },
      { name: 'Português', nota: 90 },
      { name: 'Química', nota: 70 },
      { name: 'Biologia', nota: 80 },
    ],
  },
  {
    nome: 'Maria',
    sobrenome: 'Silveira',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 91 },
      { name: 'Português', nota: 85 },
      { name: 'Química', nota: 92 },
      { name: 'Biologia', nota: 90 },
    ],
  },
  {
    nome: 'Natalia',
    sobrenome: 'Castro',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 70 },
      { name: 'Português', nota: 70 },
      { name: 'Química', nota: 60 },
      { name: 'Biologia', nota: 50 },
    ],
  },
  {
    nome: 'Wilson',
    sobrenome: 'Martins',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 80 },
      { name: 'Português', nota: 82 },
      { name: 'Química', nota: 79 },
      { name: 'Biologia', nota: 75 },
    ],
  },
];

const relatorioMelhorMateria = () => {
  const relatorio = estudantes.map((estudante) => {
    let relatorioIndividual = '';
    relatorioIndividual += `${estudante.nome} ${estudante.sobrenome} foi melhor em: `;
    estudante.materias.sort((a, b) => {
      if (a.nota > b.nota) { 
        return -1;
      } else if (a.nota < b.nota) {
        return 1;
      }
      return 0; 
    });
    relatorioIndividual += `${estudante.materias[0].name}`
    return relatorioIndividual;
  })
  return relatorio;
}

console.log(relatorioMelhorMateria());

//const melhorMateria = () => estudantes.map((estudante) => `${estudante.nome} ${estudante.sobrenome} foi melhor em: ${estudante.reduce((acc, curr) => curr.materias. > acc ? curr.materias.name : acc)[0]}`);


//console.log(melhorMateria());
