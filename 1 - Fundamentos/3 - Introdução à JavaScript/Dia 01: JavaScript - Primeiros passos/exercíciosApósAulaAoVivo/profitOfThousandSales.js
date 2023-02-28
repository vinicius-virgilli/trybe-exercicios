let productPrice = 15;
let productCost= 6;

if (productCost < 0 || productPrice < 0) {
    console.log('Valore(s) inválido(s)');
} else {
    console.log('O lucro da venda de mil produtos foi de: ' + 1000 * (productPrice - productCost * 1.2) );
}