let piece = 'bischop';

switch (piece.toLowerCase()) {
    case 'king':
        console.log('Mova para qualquer direção, apenas uma casa');
        break;
    case 'queen':
        console.log('Mova para qualquer direção');
        break;
    case 'rook':
        console.log('mova na horizontal ou vertical');
        break;
    case 'bischop':
        console.log('Mova na diagonal');
        break;
    case 'knight':
        console.log('Mova 3 casas horizontal ou na vertical, e depois uma casa de modo a fazer um "L"');
        break;
    case'pawn':
        console.log('mova para frente, uma casa, ou duas casas caso esteja em sua posição inicial');
        break;
    default:
        console.log('Peça inválida!')
}

