const substituaX = (nome) => {
  const frase = 'Tryber x aqui!';
  return `Tryber ${nome} aqui!`;
}
//console.log(substituaX('Vinicius'));

const minhasSkills = (nome) => {
  const skills = ['HTML', 'CSS', 'JavaScript'];
  let frase = `${substituaX(nome)}
Minhas três principais habilidades são:
  · ${skills[0]}
  · ${skills[1]}
  · ${skills[2]}`;
  return frase;
     
}
console.log(minhasSkills('Bebeto'));