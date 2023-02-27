let statusCandidado = 'aprovada';

switch (statusCandidado) {
    case 'aprovada':
        console.log('Parabéns, você está no grupo de pessoas aprovadas!');
        break;
    case 'lista':
        console.log('Você está na nossa lista de espera.');
    case 'lista':
        console.log('Infelizmente, você reprovou.');
    default:
        console.log('Informação incorreta.');
        break;
}

