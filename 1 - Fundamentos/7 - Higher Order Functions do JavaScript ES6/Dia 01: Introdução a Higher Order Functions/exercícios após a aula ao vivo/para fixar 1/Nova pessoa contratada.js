/* Nova pessoa contratada
Você ficou responsável por organizar o sistema de contratação de uma empresa e deve criar uma estrutura de dados que possua o formato { nomeCompleto, email } para representar a nova pessoa contratada. Além disso, você deve gerar os emails de cada pessoa que é contratada na empresa. Para isso:

crie uma função que receba como parâmetro o nome completo da nova pessoa colaboradora e que automaticamente gere um email no formato nome_da_pessoa@trybe.com;

utilize a função newEmployees, definida abaixo, para receber a sua função como parâmetro e criar o objeto de cada pessoa contratada. */

/* const employees = [{
  id1: 'Pedro Guerra', // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
  id2: 'Luiza Drumond', // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
  id3: 'Carla Paiva', // Nome:  -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
}];


const riseEmail = (newPerson) => {
  let newEmail = '';
  const arrayNamePerson = newPerson.toLowerCase().split(' ')
  arrayNamePerson.forEach((name, index) => {
  if (index === (arrayNamePerson.length -1)) {
    newEmail += name;
  } else {
    newEmail += `${name}_`
  };
  })
  return `${newEmail}@trybe.com`
};

const newEmployees = (newEmployee) => {
  const newId = Object.keys(employees).length;
  employees.push({
    nome: newEmployee,
    email: riseEmail(newEmployee)
  })
  return employees;
}; */
/* Object.values(employees).forEach((person) => {
  console.log(person);
}); */

//console.log(newEmployees('Vinicius Virgilli'));

const employeeGenerator = (fullName) => {
  const email = fullName.toLowerCase().replace(' ', '_');
  return { fullName, email: `${email}@trybe.com` };
};

const newEmployees = (callback) => {
  const employees = {
    id1: callback('Pedro Guerra'),
    id2: callback('Luiza Drumond'),
    id3: callback('Carla Paiva'),
  };
  return employees;
};

console.log(newEmployees(employeeGenerator));
