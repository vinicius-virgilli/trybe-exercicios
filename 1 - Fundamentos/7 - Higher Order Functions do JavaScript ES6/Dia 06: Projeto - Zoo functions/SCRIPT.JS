const { species, employees } = require("../../../../3 - Projetos/sd-031-b-project-zoo-functions/data/zoo_data");

const lionId = "0938aa23-f153-4937-9f88-4858b24d6bce";
const ottersId = "533bebf3-6bbe-41d8-9cdf-46f7d13b62ae";
const elephantsId = "bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5";
const snakesId = "78460a91-f4da-4dea-a469-86fd2b8ccc84";
const frogsId = "89be95b3-47e4-4c5b-b687-1fabf2afa274";
const bearsId = "baa6e93a-f295-44e7-8f70-2bcdc6f6948d";
const tigersId = "e8481c1d-42ea-4610-8e11-1752cfc05a46";

const stephanieId = "9e7d4524-363c-416a-8759-8aa7e50c0992";
const olaId = "fdb2543b-5662-46a7-badc-93d960fdc0a8";
const burlId = "0e7b460e-acf4-4e17-bcb3-ee472265db83";

const data = {
  species: [
    {
      id: lionId,
      name: "lions",
      popularity: 4,
      location: "NE",
      availability: ["Tuesday", "Thursday", "Saturday", "Sunday"],
      residents: [
        {
          name: "Zena",
          sex: "female",
          age: 12,
        },
        {
          name: "Maxwell",
          sex: "male",
          age: 15,
        },
        {
          name: "Faustino",
          sex: "male",
          age: 7,
        },
        {
          name: "Dee",
          sex: "female",
          age: 14,
        },
      ],
    },
    {
      id: tigersId,
      name: "tigers",
      popularity: 5,
      location: "NW",
      availability: ["Wednesday", "Friday", "Saturday", "Tuesday"],
      residents: [
        {
          name: "Shu",
          sex: "female",
          age: 19,
        },
        {
          name: "Esther",
          sex: "female",
          age: 17,
        },
      ],
    },
    {
      id: bearsId,
      name: "bears",
      popularity: 5,
      location: "NW",
      availability: ["Tuesday", "Wednesday", "Sunday", "Saturday"],
      residents: [
        {
          name: "Hiram",
          sex: "male",
          age: 4,
        },
        {
          name: "Edwardo",
          sex: "male",
          age: 4,
        },
        {
          name: "Milan",
          sex: "male",
          age: 4,
        },
      ],
    },
    {
      id: "ef3778eb-2844-4c7c-b66c-f432073e1c6b",
      name: "penguins",
      popularity: 4,
      location: "SE",
      availability: ["Tuesday", "Wednesday", "Sunday", "Saturday"],
      residents: [
        {
          name: "Joe",
          sex: "male",
          age: 10,
        },
        {
          name: "Tad",
          sex: "male",
          age: 12,
        },
        {
          name: "Keri",
          sex: "female",
          age: 2,
        },
        {
          name: "Nicholas",
          sex: "male",
          age: 2,
        },
      ],
    },
    {
      id: ottersId,
      name: "otters",
      popularity: 4,
      location: "SE",
      availability: ["Friday", "Thursday", "Wednesday", "Saturday"],
      residents: [
        {
          name: "Neville",
          sex: "male",
          age: 9,
        },
        {
          name: "Lloyd",
          sex: "male",
          age: 8,
        },
        {
          name: "Mercedes",
          sex: "female",
          age: 9,
        },
        {
          name: "Margherita",
          sex: "female",
          age: 10,
        },
      ],
    },
    {
      id: frogsId,
      name: "frogs",
      popularity: 2,
      location: "SW",
      availability: ["Saturday", "Friday", "Thursday", "Wednesday"],
      residents: [
        {
          name: "Cathey",
          sex: "female",
          age: 3,
        },
        {
          name: "Annice",
          sex: "female",
          age: 2,
        },
      ],
    },
    {
      id: snakesId,
      name: "snakes",
      popularity: 3,
      location: "SW",
      availability: ["Sunday", "Saturday", "Friday", "Thursday"],
      residents: [
        {
          name: "Paulette",
          sex: "female",
          age: 5,
        },
        {
          name: "Bill",
          sex: "male",
          age: 6,
        },
      ],
    },
    {
      id: elephantsId,
      name: "elephants",
      popularity: 5,
      location: "NW",
      availability: ["Friday", "Saturday", "Sunday", "Tuesday"],
      residents: [
        {
          name: "Ilana",
          sex: "female",
          age: 11,
        },
        {
          name: "Orval",
          sex: "male",
          age: 15,
        },
        {
          name: "Bea",
          sex: "female",
          age: 12,
        },
        {
          name: "Jefferson",
          sex: "male",
          age: 4,
        },
      ],
    },
    {
      id: "01422318-ca2d-46b8-b66c-3e9e188244ed",
      name: "giraffes",
      popularity: 4,
      location: "NE",
      availability: ["Wednesday", "Thursday", "Tuesday", "Friday"],
      residents: [
        {
          name: "Gracia",
          sex: "female",
          age: 11,
        },
        {
          name: "Antone",
          sex: "male",
          age: 9,
        },
        {
          name: "Vicky",
          sex: "female",
          age: 12,
        },
        {
          name: "Clay",
          sex: "male",
          age: 4,
        },
        {
          name: "Arron",
          sex: "male",
          age: 7,
        },
        {
          name: "Bernard",
          sex: "male",
          age: 6,
        },
      ],
    },
  ],

  hours: {
    Tuesday: { open: 8, close: 6 },
    Wednesday: { open: 8, close: 6 },
    Thursday: { open: 10, close: 8 },
    Friday: { open: 10, close: 8 },
    Saturday: { open: 8, close: 10 },
    Sunday: { open: 8, close: 8 },
    Monday: { open: 0, close: 0 },
  },

  employees: [
    {
      id: 'c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1',
      firstName: 'Nigel',
      lastName: 'Nelson',
      managers: [burlId, olaId],
      responsibleFor: [lionId, tigersId],
    },
    {
      id: burlId,
      firstName: 'Burl',
      lastName: 'Bethea',
      managers: [stephanieId],
      responsibleFor: [
        lionId,
        tigersId,
        bearsId,
        'ef3778eb-2844-4c7c-b66c-f432073e1c6b'],
    },
    {
      id: olaId,
      firstName: 'Ola',
      lastName: 'Orloff',
      managers: [stephanieId],
      responsibleFor: [
        ottersId,
        frogsId,
        snakesId,
        elephantsId,
      ],
    },
    {
      id: '56d43ba3-a5a7-40f6-8dd7-cbb05082383f',
      firstName: 'Wilburn',
      lastName: 'Wishart',
      managers: [burlId, olaId],
      responsibleFor: [snakesId, elephantsId],
    },
    {
      id: stephanieId,
      firstName: 'Stephanie',
      lastName: 'Strauss',
      managers: [],
      responsibleFor: [
        ottersId,
        '01422318-ca2d-46b8-b66c-3e9e188244ed',
      ],
    },
    {
      id: '4b40a139-d4dc-4f09-822d-ec25e819a5ad',
      firstName: 'Sharonda',
      lastName: 'Spry',
      managers: [burlId, olaId],
      responsibleFor: [ottersId, frogsId],
    },
    {
      id: 'c1f50212-35a6-4ecd-8223-f835538526c2',
      firstName: 'Ardith',
      lastName: 'Azevado',
      managers: ['b0dc644a-5335-489b-8a2c-4e086c7819a2'],
      responsibleFor: [
        tigersId,
        bearsId,
      ],
    },
    {
      id: 'b0dc644a-5335-489b-8a2c-4e086c7819a2',
      firstName: 'Emery',
      lastName: 'Elser',
      managers: [stephanieId],
      responsibleFor: [
        lionId,
        bearsId,
        elephantsId,
      ],
    },
  ],
};

const infoNames = () => {
  let retorno = {};
  const locations = ['NE', 'NW', 'SE', 'SW'];
  locations.forEach((lo) => {
    retorno[lo] = data.species.filter((specie) => {
      const local = specie.location;
      if (local === lo) {
        return specie.name;
      }
  }).map((animal) => animal.name)});
  retorno
  return retorno;
};

const residentsArray = (specie, sorted, sex) => {
  let retorno = [];
  const specieObject = data.species.find((animal) => animal.name === specie);
  if (sorted) {
    retorno = specieObject.residents.map((individuo) => individuo.name);
    retorno = retorno.sort();
  } else retorno = specieObject.residents.map((individuo) => individuo.name);
  if (sex) {
    retorno = retorno.filter((nome) => specieObject.residents.find((ind) => ind.name === nome).sex === sex);
  }
  return retorno;
}

const incluiNomes = (info, sorted = false, sex = false) => {
  const retorno = info;
  Object.keys(info).forEach((lo) => {
    const animais = retorno[lo];
    retorno[lo] = [];
    animais.forEach((animal) => {
      retorno[lo].push({
        [animal]: residentsArray(animal, sorted, sex),
      })
    })
  })
  return retorno;
}

const getAnimalMap = (options) => {
  if (options === undefined) {
    return infoNames();
  }
  const { includeNames = false, sorted = false, sex = false } = options;
  let info = infoNames();
  /* if (includeNames && !sorted) {
    info = incluiNomes(info);
  }
  if (sorted && includeNames) {
    info = incluiNomes(info, sorted);
  }
  if (includeNames && sex) {
    info = incluiNomes(info, sorted, sex);
  } */
  info = incluiNomes(info, sorted, sex);
  return info;
};

console.log(getAnimalMap({ includeNames: true, sorted: true, sex: 'female'}));

/* const residents = ['Maxwell', 'Zena', 'Dee', 'Faustino'];
console.log(residents.sort()); */
/* const speciesName = (id) =>{
  const animalIds = data.employees.find((employee) => employee.id === id).responsibleFor;
  return animalIds.map((animalId) => {
    let animalName = '';
    animalName = data.species.find((specie) => specie.id === animalId).name;
    return animalName;
  })
};

const locations = (species) => {
  let locations = [];
  locations = species.map((specie) => data.species.find((animal) => animal.name === specie).location);
  return locations;
};

const allInfo = () => {
  const allInformation = [];
  data.employees.forEach((employee) => {
    const species = speciesName(employee.id);
    allInformation.push({
      id: employee.id,
      fullName: `${employee.firstName} ${employee.lastName}`,
      species,
      locations: locations(species),
    })
  })
  return allInformation;
};

const infoByName = (name) => {
  const employee = data.employees.find((employee) => {
    if (employee.firstName === name || employee.lastName === name) {
      return employee;
    }
  })
  if (employee === undefined) {
    throw new Error('Informações inválidas');
  }
  if (employee === undefined) {
    return false;
  }
  const species = speciesName(employee.id);
  return {
    id: employee.id,
    fullName: `${employee.firstName} ${employee.lastName}`,
    species,
    locations: locations(species),
  }
};

const infoById = (personId) => {
  const employee = data.employees.find((employee) => {
    if (employee.id === personId || employee.id === personId) {
      return employee;
    }
  })
  if (employee === undefined) {
    throw new Error('Informações inválidas');
  }
  const species = speciesName(employee.id);
  return {
    id: employee.id,
    fullName: `${employee.firstName} ${employee.lastName}`,
    species,
    locations: locations(species),
  }
};

const getEmployeesCoverage = (object) => {
  if (!object) {
    return allInfo();
  }
  if (object.name && object.id) {
    return infoByNameAndId(object);
  }
  if (object.id){
    return infoById(object.id);
  }
  if (object.name) {
    return infoByName(object.name);
  }
};

console.log(getEmployeesCoverage({ name: 'Sharonda' })); */

/* const getOldestFromFirstSpecies = (id) => {
  const firstSpecieId = data.employees.find((person) => person.id === id).responsibleFor[0];
  const firstSpecie = data.species.find((specie) => specie.id === firstSpecieId);
  const olderAnimalAge = firstSpecie.residents.reduce((acc, curr) => {
    if (curr.age > acc) {
      return curr.age;
    }
    return acc;
  }, 0)
  const olderAnimal = firstSpecie.residents.find((animal) => animal.age === olderAnimalAge);
  return [
    olderAnimal.name,
    olderAnimal.sex,
    olderAnimal.age,
  ]
};

console.log(getOldestFromFirstSpecies('b0dc644a-5335-489b-8a2c-4e086c7819a2')); */

/* const countAnimals = (animal) => {
  if (!animal) {
    const animalInformation = {};
    data.species.forEach((especie) => animalInformation[especie.name] = especie.residents.length);
    return animalInformation;
  };
  const animalInfo2 = (animal) => {
    const sexAnimal = animal.sex;
    const specie = data.species.find((especie) => especie.name === animal.species);
    return specie.residents.reduce((acc, curr) => {
      if (curr.sex === sexAnimal) {
        return 1 + acc;
      }
      return acc;
    }, 0);
  };

  const animalInfo1 = (animal) => data.species.find((specie) => specie.name === animal.species).residents.length;

  return animal.sex ? animalInfo2(animal) : animalInfo1(animal);
}; */

/* const countAnimals = (animal) => {
  if (!animal) {
    const animalInformation = {};
    data.species.forEach((specie) => animalInformation[specie.name] = specie.residents.length);
    return
  }
  let quantidade = '';
  const test = animal.species;
  if (test && animal.sex) {
    const sexAnimal = animal.sex;
    const specie = data.species.find((specie) => specie.name === animal.species);
    quantidade = specie.residents.reduce((acc, curr) => {
      if (curr.sex === sexAnimal) {
        return 1 + acc;
      }
      return acc;
    }, 0);
  } else if (animal.species) {
    quantidade = data.species.find((specie) => specie.name === animal.species).residents.length;
  }
  
  return quantidade === '' ? animalInformation : quantidade;
};

 */

/* const countAnimals = (animal) => {
  const { species } = data;
  
  const countBySpecies = () => species.reduce((acc, specie) =>
    ({ ...acc, [specie.name]: specie.residents.length }), {});
  
  const countBySpeciesAndSex = () => {
    const { name } = animal.species;
    const { sex } = animal;
    const { residents } = species.find(specie => specie.name === name);
    return residents.filter(r => sex ? r.sex === sex : true).length;
  };
  
  const countBySpeciesWithoutSex = () => {
    const { name } = animal.species;
    const { residents } = species.find(specie => specie.name === name);
    return residents.length;
  };
  
  return !animal ? countBySpecies() :
         animal.sex ? countBySpeciesAndSex() : countBySpeciesWithoutSex();
}; */


/* const test = { species: 'bears', sex: 'female' }
console.log(countAnimals(test)); */

/* const exhibition = (day) => {
  const arrayExhibition = [];

  data.species.forEach((specie) => {
    if (specie.availability.some((option) => option === day)) {
      arrayExhibition.push(specie.name);
    }
  })
  
  return arrayExhibition;
} */

/* const allInfo = () => {
  const allInfo = {};

  Object.keys(data.hours).forEach(day => {
    allInfo[day] = {
      'officeHour': `Open from ${data.hours[day]['open']}am until ${data.hours[day]['close']}pm`,
      'exhibition': exhibition(day),
      }
    })

    allInfo.Monday = {
      'officeHour': 'CLOSED',
      'exhibition': 'The zoo will be closed!',
    }

    /* Object.keys(allInfo).forEach((dia) => {
      if (dia.exhibition) {
        allInfo[dia] = {
          'officeHour': 'CLOSED',
          'exhibition': 'The zoo will be closed!',
        }
      }
    })

    return allInfo;
}; */

/* const schedules = (day) => {
  if (day === 'Monday') {
    return 'O zoológico está fechado!'
  }


}

const days = (animal) => {
  const animalInfo = data.species.filter((specie) => specie.name === animal);

  return animalInfo[0].availability;
}

const getSchedule = (scheduleTarget) => {
  if (scheduleTarget === undefined) {
    return allInfo();
  }

  if (Object.keys(data.hours).some((day) => day === scheduleTarget)) {
    return schedules(scheduleTarget);
  }

  if  (data.species.some((specie) => specie.name=== scheduleTarget)) {
    return days(scheduleTarget);
  }
};

console.log(getSchedule('lions')); */