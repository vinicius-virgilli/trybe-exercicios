// Após ter conhecido diferentes maneiras de associar chaves e valores a um objeto, que tal praticar? Adicione suas informações ao objeto student = {}, como nome, e-mail, telefone, GitHub e LinkedIn, usando os métodos abordados no conteúdo.

let student = {
    fullName: 'Vinicius Silva Virgilli',
    eMail: 'vinicius.virgilli3@gmail.com',
    phoneNumber: '62 9 8258-5506',
};

let newKey = 'Github';
let newValue = 'https://github.com/vinicius-virgilli';

function addNewKey (object, newKey, newValue) {
    object[newKey] = newValue;
}

addNewKey(student,newKey,newValue);

student['LinkedIn'] = 'https://www.linkedin.com/in/vinicius-silva-virgilli/';

console.log(student);