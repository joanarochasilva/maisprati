// exercicios array + funções

// Exercício 1 : Somar todos os elementos de um array

//let elementos = [1,2,3,4];

// function somaElementos(vetor) {
//   let soma = 0;

//   for(let i = 0; i < vetor.length; i++) {
//     soma += vetor[i];
//   }
//   return soma;
// }

//console.log(`A soma dos elementos é : ${somaElementos(elementos)}`);

// Exercício 2 : Retornar o maior valor dentro do array
// function maiorNumero(vetor) {
//   let numeroMaior = vetor[0];

//   for(let i = 0; i < vetor.length; i++) {
//     if(vetor[i] > maior) {
//       numeroMaior = vetor[i];
//   }
//   return numeroMaior;
// }

// console.log(`O maior número dentro do array é ${maiorNumero(elementos
// )}`);

// Exercício 2 : Solução do professor

// function maiorNumeroProfessor(vetor) {
//   let maior = vetor[0];

//   for(let i = 1; i < vetor.length; i++) {
//     if(vetor[i] > maior) {
//       maior = vetor[i];
//     }
//   }
//   return maior;
// }

// console.log(`Dentre os elemetos, o maior é: ${maiorNumeroProfessor(elementos)}`);

// Exercício 3 : Reverter um array
/*
function reverterArray(vetor) {

  let arrayInverso = [];

  for(let i = vetor.length - 1; i >= 0; i--) {
      arrayInverso.push(vetor[i]);
  }
  return arrayInverso;
}

console.log(reverterArray(elementos));
*/

// Exercício 4 : Somar todos os elementos de uma matriz

//let matrizElementos = [[1,2,3,4],[5,6,7,8]];
/*

function somarMatriz(matriz) {
  let soma = 0;

  for(let i = 0; i < matriz.length; i++) {
    for(let j = 0; j < matriz[i].length; j++) {
      soma += matriz[i][j];
    }
  }
  return soma;
}

console.log(somarMatriz(matrizElementos));

*/

// Exercício 5 : Encontrar o maior número em uma matriz
/*
function maiorNumeroMatriz(matriz) {
  let maiorNumero = matriz[0][0];

  for(let i = 0; i < matriz.length; i++) {
    for(let j = 0; j < matriz[i].length; j++) {
      if(matriz[i][j] > maiorNumero) {
        maiorNumero = matriz[i][j];
      }
    }
  }
  return maiorNumero;
}

console.log(maiorNumeroMatriz([[1,2,3,4],[5,6,7,8]]));

*/

// Exercício 06 : Retornar data de hoje

let data = new Date();

console.log(`${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`);


// milissegundos entre data
let data1; 
let msegundos = Math.abs(data.getTime() - data1.getTime());

let dataFormatada = new Date().toLocaleDateString('pt-BR');