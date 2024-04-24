// FUNÇÕES
const input = require('prompt-sync')();

function calcularAreaTerreno(largura, comprimento) {
  
  let area = largura * comprimento;
  return area;
}

let largura = input('Digite a largura do terreno em metros: ');
let comprimento = input('Digite o comprimento do terreno em metros: ');

// chamada da função
let resultado = calcularAreaTerreno(largura, comprimento);

console.log(`O terreno possui ${resultado} em metros quadrados.`);

// ESCOPOS

// FUNÇÃO ANÔNIMA

function() {
  console.log('Olá');
}

let exibirFuncao = function() {
  console.log('Olá');
}

exibirFuncao();

// FUNÇÃO CALLBACK

function exibirAlgo(callbackSucesso, callbackErro) {
  if(true) {
    callbackSucesso('Funções de callback em caso de sucesso.');
  } else  {
    callbackErro('Função de callback em caso de erro.');
  }
}

let callbackSucesso = function(titulo) {
  console.log(titulo);
}

let callbackErro = function(erro) {
  console.log(erro);
}

exibirFuncao(callbackSucesso, callbackErro);

// Calculadora usando preceitos de função anônima

let soma = function(num1, num2) {
  return num1 + num2;
}
let subtracao = function(num1, num2) {
  return num1 - num2;
}
let divisao = function(num1, num2) {
  return num1 / num2;
}
let multiplicacao = function(num1, num2) {
  return num1 * num2;
}

function calculadora(operacao, num1, num2, soma, subtracao, multiplicacao,divisao) {
  switch(operacao) {
    case "soma":
      soma(num1, num2);
      break;
    
  }
}

calculadora("soma", 10, 10, soma);