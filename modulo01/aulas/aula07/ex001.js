// ARRAY OU VETOR

// 1 - Primeira maneira de declarar um array
let listaCompras = array();
// Atribuir valor
listaCompras[0] = 'Shampoo';
listaCompras[1] = 'Condicionador';
listaCompras[2] = 100;

console.log(listaCompras);

// 2 - Segunda maneira de criar arrays
let listaFrutas = ['Banana', 'Morango'];

console.log(listaFrutas);

// 3 - Terceira maneira de criar arrays
let listaViagem = [];

// 4 - Quarta maneira de criar arrays
let listaTarefas = Array('Banho', 'Varrer');

console.log(listaTarefas);

// ARRAY MULTIDIMENSIONAL OU MATRIZ

let listaCoisas = Array();
listaCoisas['Frutas'] =  Array();
listaCoisas['Frutas'][0] = 'Morango';

// INSERÇÃO DE ELEMENTOS NO FINAL DO ARRAY

listaCoisas['Frutas'].push('Banana');
console.log(listaCoisas);

// INSERÇÃO DE ELEMENTOS NO COMEÇO DO ARRAY

listaCoisas['Frutas'].unshift('Limão');
console.log(listaCoisas);

// EXCLUIR ELEMENTOS NO FINAL DO ARRAY  

listaCoisas['Frutas'].pop();
console.log(listaCoisas);

// EXCLUIR ELEMENTOS NO INÍCIO DO ARRAY

listaCoisas['Frutas'].shift();
console.log(listaCoisas);

// PESQUISA

let listaProdutos = Array('Computador', 'Caneta', 'Chuteira', 'Garrafa de água');

let aux = listaProdutos.indexOf('Computador');

if(aux === -1) {
  console.log('Elemento não existe no Array');
} else {
  console.log('Elemento existe e está na posição ' + aux);
}

// ORDENAÇÃO

console.log(listaProdutos.sort());