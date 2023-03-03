let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

console.log('Bem vinda, ' + info.personagem);

info['recorrente'] = 'Sim';

for (let key in info) {
    console.log(key)
}

for (let value in info) {
    console.log(info[value]);
}

let info2 = Object.assign({}, info);
info2['personagem'] = 'Tio Patinhas';
info2.origem = 'Christmas on Bear Mountain, Dell’s Four Color Comics #178';
info2.nota = 'O último MacPatinhas';
info2.recorrente = 'Sim';

for (let key in info) {
    if (info[key] == info2[key]) {
        console.log('Ambos recorrentes')
    } else {
        console.log(info[key] + ' e ' + info2[key]);
    }
}


