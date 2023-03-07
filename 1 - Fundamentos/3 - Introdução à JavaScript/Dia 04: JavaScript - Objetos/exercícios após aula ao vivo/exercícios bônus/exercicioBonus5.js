/* Requisito 1 - Com o uso do objeto (allLessons) obtido nos exercícios anteriores, crie uma função para contar o número de estudantes que assistiram às aulas de Matemática.

Requisito 2 - Com o uso do objeto (allLessons) obtido nos exercícios anteriores, crie uma função que retorne um objeto que represente o relatório da pessoa instrutora, as aulas ministradas e o número total de estudantes. A saída deverá ser a seguinte:

console.log(createReport(allLessons, 'Maria Clara'));
{
  professor: 'Maria Clara',
  aulas: [ 'Matemática', 'Matemática' ],
  estudantes: 30
} */

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

let allLessons = Object.assign({}, {
  'lesson1': lesson1, 
  'lesson2': lesson2, 
  'lesson3': lesson3
});

//função que cumpre o requisito 1
const contStudentsMath = (allLessons)  => {
  let studentsMath = 0;
  for (let key in allLessons) {
    if (allLessons[key].materia == 'Matemática') {
      studentsMath += allLessons[key].numeroEstudantes;
    }
  }
  return studentsMath;
}
console.log(contStudentsMath(allLessons));

//função que cumpre o requisito 2
const teacherReport = (Object, teacher) => {
  let teacherReport = {
    professor: teacher,
  }
  let lessons = [];
  let students = 0;
  for (let key in allLessons) {
    if (allLessons[key].professor == teacher) {
      students += allLessons[key].numeroEstudantes;
      lessons.push(allLessons[key].materia);
    }
  }
  teacherReport.aulas = lessons;
  teacherReport.estudantes = students;
  return teacherReport;
}
console.log(teacherReport(allLessons, 'Maria Clara'));