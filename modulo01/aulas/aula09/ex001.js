
const pessoa = {
  nome:'Lucas',
  idade: 18,
  profissao: 'Músico',
  email: 'lucas@teste.com',
  empregada: true
}

pessoa.falar = function() {
  return `Meu nome é ${this.nome}`;
}
/*
console.log(pessoa.email);
console.log(pessoa);
console.log(pessoa['nome']);

delete pessoa.empregada; // método para tira um atributo
*/

// Exercício 01 : Crie um objeto que represente algo do mundo real

// const livro = {
//   nome: 'Biologia Molecular da Célula',
//   autor: 'Julian Lewis',
//   cor: 'vermelho',
//   genero: 'didático',
//   anoPublicacao: 2010,
//   edicao: 5,
//   editora: 'Artmed',
//   numeroPaginas : 1978
// }

// livro.nome = function() {
//   return `O nome do livro é ${this.nome}`;
// }

// ForIn()
/*
for(let chave in pessoa) {
  console.log(chave + ": " + pessoa[chave])
}
*/
// ForOf()
/*
let numeros = [10, 20, 100];

for(let numero of numeros) {
  console.log(numero);
}

let nomes = 'Jaques hyago';
for(let nome of nomes) {
  console.log(nome);
}
*/
// Exercício 02: Você tem uma lista de objetos que representam diferentes tipos de veículos e suas características.
// Seu objetivo é primeiro usar o For In para listar apenas os modelos dos veículos.
/*
const veiculos = [{modelo: 'kombi', cor: 'branca'}, {modelo: 'sedan', cor: 'vermelho'}];

for (let chave in veiculos) {
  console.log(veiculos[chave].modelo); //kombi, sedan
}

const veiculos2 =[{modelo: 'chevete', cor: 'azul'}, {modelo: 'fiat uno', cor: 'amarelo'}];

for(let atributo of veiculos2) {
  console.log(atributo.modelo); //chavete, fiat uno
}
*/
//forEach()
/*
let cores = ['Azul', 'Preto', 'Branco'];

cores.forEach((cor, indice) => {console.log(indice + ': ' + cor);});
*/
//Exercicio 03: Construa um array de números e calcule a soma total dos números e também imprima cada número multiplicado por dois.

const numeros = [5, 9, 4, 10];
let soma = 0;

numeros.forEach((numero) => {
  soma += numero;
  console.log(`O número ${numero} multiplicado por dois é ${numero * 2}`);
});

console.log(`A soma dos valores do array é igual a ${soma}`);

// Design Pattern

let BicicletaFactory = function(cor, tipo, marca) {
  return {
    identificadorUnico,
    cor,
    tipo,
    marca
  }
}

let bicicleta1 = BicicletaFactory(1, 'Azul', 'Speed', 'Caloi');
let bicicleta2 = BicicletaFactory(2, 'Preta', 'Mountain', 'BMX');

console.log(bicicleta1.cor);
console.log(bicicleta2);
