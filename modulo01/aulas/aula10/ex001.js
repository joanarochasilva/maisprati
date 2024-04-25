/*const professor = {
  nome: 'Tony Stark',
  materia: 'Matemática',
  notas: {
    aluno1: 3.5,
    aluno2: 4.0,
    aluno3: 2.8
  }
}
*/

/* Exercício 1 : For in para iterar sobre as propriedades dentro das notas, calcule a média e imprima a média da turma.*/
/*
let mediaTurma;
let soma = 0;
let quant = 0;

for(let nota in professor.notas) {
  soma += professor.notas[nota];
  quant++;  
}

mediaTurma = soma / quant;

console.log(`A média das notas é igual a ${mediaTurma.toFixed(2)}`);
console.log(mediaTurma >= 3 ? `A turma do professor ${professor.nome} está acima da média de aprovação.` : `A média da turma do professor ${professor.nome} está acima da média de aprovação`); 
*/

/* Exercício 2: For of para iterar sobre o array biblioteca
Para cada livro, verifique se foi publicado antes de 2000
Imprimir o título e o ano dos livros que atendem essa condição


const biblioteca = [
  { titulo: '12 Regras para a Vida', autor: 'Jordan Peterson', ano: 1925 },
  { titulo: 'O Hobbit', autor: 'J.R.R Tolkien', ano: 1937},
  { titulo: 'A Senhora do Jogo', autor: 'Disney', ano: 1940},
  { titulo: 'Zé Carioca', autor: 'Disney', ano: 1940 },
  { titulo: 'Nação Dopamina', autor: 'Anna Lembke', ano: 2021 }
]

for(livro of biblioteca) {
  if(livro.ano < 2000) {
    console.log(`Livro : ${livro.titulo}\nAno : ${livro.ano}`);
  }
}
*/

// Exercício 03: Com forEach para iterar sobre o array, crie um ojeto para armazenar a contagem de filmes por gênero. Para cada filme no array, verifique se o gênero já existe no objeto contagem. Se existir, incremente a contagem, se não, adicione o gênero ao objeto com contagem inicial de 1. Após loop, imprima cada gênero e o número de filmes correspondentes.

/*
const filmes = [
  { titulo: 'Tropa de Elite', genero: 'Ação'},
  { titulo: 'Capitão', genero: 'Drama'},
  { titulo: 'O Poderoso Chefão', genero: 'Crime'},
  { titulo: 'Clube da Luta', genero: 'Biografia'},
  { titulo: 'Oppenheimer', genero: 'Biografia'},
  { titulo: 'High School Musical', genero: 'Musical'},
  { titulo: 'Barbie', genero: 'Live Action'}
]

const contagemGeneros = {};

filmes.forEach((filme) => {
  if(contagemGeneros[filme.genero]) {
    contagemGeneros[filme.genero]++;
  } else {
    contagemGeneros[filme.genero] = 1;
  }
})

// contagemGeneros[filme.genero] - estrutura para avaliar se algo é verdadeiro

for(let genero in contagemGeneros) {
  console.log(`${contagemGeneros[genero]} filmes do gênero ${genero}`);
}
*/

// Exercício 04: Desenvolva um algoritimo que seja capaz de receber uma lista e um valor correto. E execute uma pesquisa binária para encontrar o valor certo.
/*
const binarySearch = (list, item) => {
  let low = 0;
  let high = list.length - 1;

  while(low <= high) {
    const mid = Math.floor((low + high) / 2);
    const guess = list[mid];

    if(guess === item) {
      return mid;
    } else if(guess > item) {
      high  = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return null;
}

const myList = [1, 3, 5, 7, 9];
console.log(binarySearch(myList, 3)); //1
*/

// Spread
/*
let listaTimes = ['Grêmio', 'Footbal Porto Alegrense'];
let listaTimes2 = ['São José', 'Pelotas'];

let listaFilmesCompletos = ['Flamengo', 'São Paulo', ...listaTimes, ...listaTimes2]; //spread
console.log(listaFilmesCompletos);

let tituloArtigo = 'Movimento Ágil';
console.log(...tituloArtigo); // separa em string
console.log([...tituloArtigo]); //separa em array
*/
// Rest
/*
function soma (... param) {
  let resultados = 0;

  console.log(param);
  param.forEach(v => resultado += v);
  return resultado;
}

console.log(soma(3,8,5,7));
*/
function multiplicando(m, ... p) {
  console.log(m);
  console.log(p);

  let resultado = 0;

  p.forEach(elemento => resultado += m * elemento);

  return resultado;
}

console.log(multiplicando(5,7,12,3,50));