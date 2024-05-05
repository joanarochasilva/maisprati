// Prompt-Sync
const input = require('prompt-sync')();

//QUESTÕES

/*1. Escreva um algoritmo para ler uma temperatura em graus Celsius, calcular e escrever o
valor correspondente em graus Fahrenheit.*/

const grausCelsius = parseFloat(input('Digite a temperatura em °C: '));
const conversaoParaFahrenheit = grausCelsius * 1.8 + 32;

console.log(`${grausCelsius}°C (graus Celsius) é equivalente a ${conversaoParaFahrenheit}°F (graus Fahrenheit)`);


/*2. Escreva um algoritmo para ler o número de eleitores de um município, o número de
votos brancos, nulos e válidos. Calcular e escrever o percentual que cada um representa
em relação ao total de eleitores.*/

const numeroEleitores = parseInt(input('Digite nome de eleitores no seu município: '));
const numeroVotosBrancos = parseInt(input('Digite o número de votos brancos: '));
const numeroVotosNulos = parseInt(input('Digite o número de votos nulos: '));

const percentualVotosBrancos = (numeroVotosBrancos / numeroEleitores) * 100;
const percentualVotosNulos = (numeroVotosNulos / numeroEleitores) * 100;
const percentualVotosValidos = ((numeroEleitores - numeroVotosBrancos - numeroVotosNulos) / numeroEleitores) * 100;

console.log(`NÚMERO ELEITORES: ${numeroEleitores}\nNÚMERO VOTOS EM BRANCO: ${percentualVotosBrancos.toFixed(2)}%\nNÚMERO VOTOS NULOS: ${percentualVotosNulos.toFixed(2)}%\nNÚMERO VOTOS VÁLIDOS: ${percentualVotosValidos.toFixed(2)}%`);


/*3. Faça um algoritmo que leia quatro números inteiros e realize as seguintes operações:
● Some 25 ao primeiro inteiro;
● Triplique o valor do segundo inteiro;
● Modifique o valor do terceiro inteiro para 12% do valor original;
● Armazene no quarto inteiro a soma dos valores originais (os que o usuário digitou)
dos primeiros três inteiros.*/

let numero01 = parseInt(input('Digite o primeiro número: '));
let numero02 = parseInt(input('Digite o segundo número: '));
let numero03 = parseInt(input('Digite o terceiro número: '));
let numero04 = parseInt(input('Digite o quarto número: '));

numero04 = numero01 + numero02 + numero03;

numero01 += 25;
numero02 *= 3;
numero03 *= 0.12;

console.log(`RESULTADO: \nValor numero 01 = ${numero01}\nValor número 02 = ${numero02}\nValor número 03 = ${numero03}\nValor número 04 = ${numero04}`);


/*4. Escreva um algoritmo para ler as notas das duas avaliações de um aluno no semestre,
calcular e escrever a média semestral e a seguinte mensagem: ‘PARABÉNS! Você foi
aprovado’, somente se o aluno foi aprovado (considere 6.0 a nota mínima para
aprovação).*/

const avaliacao01 = parseFloat(input('Digite a nota da primeira avaliação: '));
const avaliacao02 = parseFloat(input('Digite a nota da segunda avaliação: '));

const media = (avaliacao01 + avaliacao02) / 2;

const statusAluno = media >= 6.0 ? `Sua média semestral foi ${media}.\nParabéns!Você foi aprovado.` : `Sua média semestral foi ${media}`;

console.log(statusAluno);


/*5. Acrescente ao exercício acima a mensagem ‘Você foi REPROVADO! Estude mais’ caso a
média calculada seja menor que 6,0*/

const avaliacao1 = parseFloat(input('Digite a nota da primeira avaliação: '));
const avaliacao2 = parseFloat(input('Digite a nota da segunda avaliação: '));

const mediaFinal = (avaliacao1 + avaliacao2) / 2;

const statusDoAluno = mediaFinal >= 6.0 ? `Sua média semestral foi ${mediaFinal}.\nParabéns!Você foi aprovado.` : `Sua média semestral foi ${mediaFinal}\nVocê foi REPROVADO!Estude mais.`;

console.log(statusDoAluno);


/*6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
Isósceles, escaleno ou eqüilátero.
Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)*/

const ladoA = parseFloat(input('Digite o valor do lado A: '));
const ladoB = parseFloat(input('Digite o valor do lado B: '));
const ladoC = parseFloat(input('Digite o valor do lado C: '));

const eTriangulo = ladoA < ladoB + ladoC && ladoB < ladoA + ladoC && ladoC < ladoA + ladoB;

const eIsoceles = eTriangulo && ((ladoA === ladoB && (ladoB !== ladoC || ladoA !== ladoC)) || (ladoA === ladoC && (ladoA !== ladoB || ladoC !== ladoB)) || (ladoB === ladoC && (ladoB !== ladoA || ladoC !== ladoA)));
const eEscaleno = eTriangulo && (ladoA !== ladoB && ladoA !== ladoC);
const eEquilatero = eTriangulo && (ladoA === ladoB && ladoB === ladoC);

if(eIsoceles) {
  console.log(`Isóceles`)
} else if(eEscaleno) {
  console.log(`Escaleno`)
}else if(eEquilatero) {
  console.log(`Equilátero`)
} else {
  console.log('Não é triângulo!')
}

/*7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
compradas, calcule e escreva o valor total da compra.*/

const numMaca = parseInt(input(`Digite o número de maçãs: `));
const valorTotalCompra = numMaca < 12 ? `Valor final: R$ ${numMaca * 0.30}` : `Valor final: R$ ${numMaca * 0.25}`;

console.log(valorTotalCompra);

/*8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
e escreve-los em ordem crescente.*/

const valor01 = parseInt(input('Digite o primeiro valor: '));
const valor02 = parseInt(input('Digite o segundo valor: '));

const ordemCrescente = valor01 > valor02 ? `${valor02}\n${valor01}` : `${valor01}\n${valor02}`;

console.log(ordemCrescente);

/*9. Escreva um algoritmo que leia o código de origem de um produto e imprima a região
do mesmo, conforme a tabela abaixo:*/

const codOrigemProduto = parseInt(input(`Digite o código do produto: `));

const sul = codOrigemProduto === 1;
const norte = codOrigemProduto === 2;
const leste = codOrigemProduto === 3;
const oeste = codOrigemProduto === 4;
const nordeste = codOrigemProduto === 5 || codOrigemProduto === 6 || (codOrigemProduto >= 25 && codOrigemProduto <= 50);
const sudeste = 7 || 8 || 9;
const centroOeste = codOrigemProduto >= 10 && codOrigemProduto <= 20;

if(sul) {
  console.log(`Região Sul`);
} else if(norte) {
  console.log(`Região Norte`);
} else if(leste) {
  console.log(`Região leste`);
} else if(oeste) {
  console.log(`Região Oeste`);
} else if(nordeste) {
  console.log(`Região Nordeste`);
} else if(sudeste) {
  console.log(`Região Sudeste`);
} else if(centroOeste) {
  console.log(`Região Centro Oeste`);
} else {
  console.log(`Produto Importado`);
}

/*10. Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.*/

const numeroParaRepetir = parseInt(input(`Digite um número: `));
for(let i = 0; i <= numero; i++) {
  console.log(numeroParaRepetir);
}

/*11. Escreva um algoritmo para ler uma quantidade indeterminada de valores inteiros. Para
cada valor fornecido escrever uma mensagem que indica se cada valor fornecido é PAR
ou ÍMPAR. O algoritmo será encerrado imediatamente após a leitura de um valor NULO ou
NEGATIVO.*/

let valorInteiro = parseInt(input(`Digite um número (digite 0 ou um número negativo para parar): `));
let condicaoParada = valorInteiro <= 0;
let tipoNumero;

while(!condicaoParada) {
  tipoNumero = valorInteiro % 2 === 0 ? `Esse número é par!` : `Esse número é ímpar!`;
  console.log(tipoNumero);

  valorInteiro = parseInt(input(`Digite um número (digite 0 ou um número negativo para parar): `));
  parada = valorInteiro <= 0;
}

/*12. Escreva um algoritmo que gere os números de 1000 a 1999 e escreva aqueles que,
divididos por 11, dão resto igual a 5.*/

for(let i = 1000; i < 2000; i++) {
  if(i % 11 == 5 ) console.log(i);
}

/*13. Escrever um algoritmo que leia 5 valores para uma variável N e, para cada um deles,
calcule e mostre a tabuada de 1 até N. Mostre a tabuada na forma:
1 x N = N
2 x N = 2N
3 x N = 3N
*/

let n;
let tabuada;

for(let i = 0; i <= 5; i++) {
  n = parseInt(input(`Digite um valor: `));
  tabuada = ``;
  for(let j = 1; j <= n; j++) {
    tabuada += `${j} X ${n} = ${n * j}\n`;
  }
  console.log(tabuada);
}

/*
Utilizar somente while do exercício 14 ao 16
14. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
a média aritmética desses números.*/

let somaAritimetica = 0;
let quantidadeAritimetica = 0;
let mediaAritimetica;

let numeroDecimalAritimetico = parseFloat(input(`Digite um número: `));

while(numeroDecimalAritimetico !== 0) {
  somaAritimetica += numerosDecimais;
  quantidadeAritimetica++;

  numeroDecimalAritimetico = parseFloat(input(`Digite um número: `));
}

mediaAritimetica = somaAritimetica / quantidadeAritimetica;
console.log(mediaAritimetica);

/*15. Fazer um algoritmos para receber um número decimal e o peso de cada número até
que o usuário digite o número 0. Fazer a média ponderada desses números e pesos
respectivos.*/

let numeroDecimalPonderado = parseFloat(input(`Digite um número (digite 0 para finalizar) : `));
let pesoMediaPonderada = parseFloat(input(`Digite o peso (digite 0 para finalizar) : `));
let condicaoParadaPonderada = (numero === 0) || (peso === 0);

let somaPonderada = 0;
let quantidadePonderada = 0;
let mediaPonderada;

while(!condicaoParadaPonderada) {
  somaPonderada += numeroDecimalPonderado * pesoMediaPonderada;
  quantidadePonderada += pesoMediaPonderada;

  numeroDecimalPonderado = parseFloat(input(`Digite um número (digite 0 para finalizar) : `));
  pesoMediaPonderada = parseFloat(input(`Digite o peso (digite 0 para finalizar) : `));

  condicaoParadaPonderada = (numeroDecimalPonderado === 0) || (pesoMediaPonderada === 0);
}

mediaPonderada = somaPonderada / quantidadePonderada;
console.log(mediaPonderada);


/*16. Escreva um algoritmo para imprimir os 50 primeiros número primos maior que 100.
Obs.: Número primo é aquele divisível somente por 1 e ele mesmo.*/

let numeroTeste = 101;
let numeroAnterior;
let quantidaDeDivisores;
let quantidadeNumerosPrimos = 0;

while(quantidadeNumerosPrimos <= 50) {
  quantidaDeDivisores = 0;
  numeroAnterior = 1;

  while(numeroAnterior <= numeroTeste) {
    if(numeroTeste % numeroAnterior === 0) quantidaDeDivisores++;
    numeroAnterior++;
  }

  if(quantidaDeDivisores === 2) {
    console.log(numeroTeste);
    quantidadeNumerosPrimos++;
  }
  numeroTeste++;
}
