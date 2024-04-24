// Exercício 1: Par ou impar

// const input = require('prompt-sync')();

// let numeroInserido = input('Digite o número que deseja testar: ');

// let resultado = numeroInserido % 2 == 0 ? "Par" : "Impar";

// console.log(resultado);

// Exercício 2 : Maior de dois números

// const input = require('prompt-sync')();

// let numero01 = parseInt(input('Insira o primeiro número: '));
// let numero02 = parseInt(input('Insira o segundo número: '));

// if(numero01 > numero02) {
//   console.log('O primeiro número é maior.')
// } else if (numero01 < numero02) {
//   console.log('O segundo número é maior.')
// } else {
//   console.log('Os números são iguais.')
// }

// Exercício 3: triângulo

// const input = require('prompt-sync')();

// const lado1 = parseInt(input('Insira o comprimento do primeiro lado: '));
// const lado2 = parseInt(input('Insira o comprimento do segundo lado: '));
// const lado3 = parseInt(input('Insira o comprimento do terceiro lado: '));

// if(lado1 + lado2 > lado3 && lado1 + lado3 > lado2 && lado2 + lado3 > lado1) {
//   console.log('É possível formar um triângulo.')
// } else {
//   console.log('Não é possível formar um triângulo.')
// }

// Exercicio 04 : calculadora simples

// const input = require('prompt-sync')();

// let num1 = parseInt(input('Insira o primeiro número: '));
// let num2 = parseInt(input('Insira o segundo número: '));
// let operacao = input('Insira a operação desejada (+, -, /, *): ');

// let resultado;

// if(operacao === '+') {
//   resultado = num1 + num2;
// } else if(operacao === '-') {
//   resultado = num1 - num2;
// } else if(operacao === '*') {
//   resultado = num1 * num2;
// } else if(operacao === '/') {
//   if(num2 !== 0) {
//     resultado = num1 / num2;
//   } else {
//     console.log('Erro: divisão por zero.');
//     resultado = undefined;
//   } 
// } else {
//   console.log('Operação inválida!')
// }

// if(resultado !== undefined) {
//   console.log('Resultado: ',resultado);
// }

// Exercício 4: 