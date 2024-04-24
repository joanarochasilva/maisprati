// let contador = 0;
// let multiplicando = 5;

// // for(<variável>; <condição>; <incremento>) {bloco de código}

// for(contador = 0; contador <= 10; contador++) {
//   console.log(`$(multiplicando) * $(contador) = `, multiplicando * contador);
// }

// // Exercicio 1: imprimir números pares até 100

// for (let i = 0; i <=100; i += 2) {
//   console.log(i);
// }

// // Exercício 2: soma de todos os números de 0 a 10.

// let soma = 0;

// for (let i = 0; i <=100; i += 2) {
//   soma+=i;
// }
// console.log(soma);

// Exercício 3: números de 10 a 1 decrescente

// for (let i = 10; i >= 1; i--) {
//   console.log(i);
// }

// // Exercício 3: imprimir os múltiplos de 5 menores que 100

// let num = 5;

// while (num <= 100) {
//   console.log(num);
//   num += 5;
// }

// Exercicio 4: calcular a soma dos números de 1 a 1000 utilizando while

let soma = 0;
let aux = 1;

while(aux <= 1000) {
  soma += aux;
  aux++;
}
console.log(soma);

// DO - WHILE

const input = require('prompt-sync')();
let senha;

do {
  senha = input('Digite a senha: ');
} while( senha !== '1234')

console.log('Senha correta!')

// Pedir ao usuário para adivinhar um número entre 1 e 10

const numeroCorreto = Math.random() * 10;
let tentativa;

do {
  tentativa = parseint(input('Adivinhe o número entre 1 e 10: '));
  if(tentativa < numeroCorreto) {
    console.log('Teste um número maior.');
  } else if ( tentativa > numeroCorreto) {
    console.log('Teste um número menor.');
  }
} while(tentativa !== numeroCorreto)

console.log('Parabéns! Você acertou.');