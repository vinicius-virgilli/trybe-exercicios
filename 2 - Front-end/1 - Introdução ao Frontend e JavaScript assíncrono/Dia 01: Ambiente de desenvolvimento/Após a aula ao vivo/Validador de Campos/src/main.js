import './style.css';
import isEmail from 'validator/lib/isEmail';
import isURL from 'validator/lib/isURL';
import isBoolean from 'validator/lib/isBoolean.js';
import isPostalCode from 'validator/es/lib/isPostalCode.js';
import isUpperCase from 'validator/es/lib/isUppercase.js'

console.log(isEmail('vinicius.virgilli3@gmail.com'));
console.log(isURL('trybe.com'));
console.log(isBoolean('false'));
console.log(isPostalCode('74395-038', 'BR'));
console.log(isUpperCase('TEST'));
//console.log(isDate('15/03/1995'));