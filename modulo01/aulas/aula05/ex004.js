const nota = 60;

if (nota  >= 60) {
   console.log('APROVADO');
} else if (nota >= 40 && nota <= 59) {
  console.log('Está de recuperação!');
} else {
  console.log('REPROVADO');
}

/*
Estrutura de decisão semelhante ao if/else, mas com sintaxe mais enxuta
*/

/*
<condição> ? <verdadeiro> : <falso>;
*/

let resultadoTernario = (10 < 100) ? true : false;
console.log(resultadoTernario);

const promp = require('prompt-sync')();

let teste = prompt('Digite aqui seu nome: ');
