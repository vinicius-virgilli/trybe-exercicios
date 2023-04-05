const data = require('../../../../3 - Projetos/sd-031-b-project-zoo-functions/data/zoo_data');

const especie = data.species.find((especie) => especie.id === 'e8481c1d-42ea-4610-8e11-1752cfc05a46');


//console.log(especie.residents.map(animal => animal.age));

//console.log(especie.residents.every(animal => animal.age >= 18));

const isManager = (id) => {
  // seu código aqui
  return data.employees.some((employee) => employee.managers.find((manager) => manager === id));
};

//console.log(isManager('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));

const stephanieId = '9e7d4524-363c-416a-8759-8aa7e50c0992';
const olaId = 'fdb2543b-5662-46a7-badc-93d960fdc0a8';
const burlId = '0e7b460e-acf4-4e17-bcb3-ee472265db83';

const getRelatedEmployees = (managerId) => {
  // seu código aqui
  const relatedEmployees = [];
  if (isManager(managerId)) {
    data.employees.map((employee) => {
      if (employee.managers.find((manager) => manager === managerId)) {
        relatedEmployees.push(`${employee.firstName} ${employee.lastName}`);
      };
    });
    return relatedEmployees;
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
};

console.log(getRelatedEmployees(burlId));