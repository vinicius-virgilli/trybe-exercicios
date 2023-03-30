
const hydrate = (string) => {
  let copos = 0;
  for (let word of string.split('')) {
    if (!isNaN(Number(word))) {
      copos += Number(word);
    }
  }
  return (copos > 1) ? `${copos} copos de água` : `${copos} copo de água`;
}

//hydrate('1 cerveja');

module.exports = hydrate;