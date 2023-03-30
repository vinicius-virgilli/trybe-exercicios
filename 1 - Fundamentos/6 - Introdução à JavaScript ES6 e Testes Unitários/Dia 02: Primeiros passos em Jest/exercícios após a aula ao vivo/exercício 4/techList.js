
const techList = (array, string) => {
    if (array.length == 0) {
      return 'Vazio!';
    }
    array.sort();
    const object = [];
    for (let tech of array) {
      object.push({
        tech: tech,
        name: string
      })
    }
    return object;
}

/* {
  tech: 'nomeTecnologia',
  name: name,
} */

console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Vinicius'));

module.exports = techList;