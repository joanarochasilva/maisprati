// Prompt-Sync
const input = require('prompt-sync')();

// QUESTÕES

/*1. Escreva um programa para calcular a redução do tempo de vida de um fumante.
Pergunte a quantidade de cigarros fumados por dias e quantos anos ele já fumou.
Considere que um fumante perde 10 min de vida a cada cigarro. Calcule quantos dias de
vida um fumante perderá e exiba o total em dias.*/

const numCigarsPerDay = parseInt(input('Digite o número de cigarros por dia: '));
const numSmokingYears = parseInt(input('Digite o número de anos: '));

const timeLostPerCigar = 0.00694; // 10 min ~= 0.00694 day
const lifeTimelost = (numCigarsPerDay * timeLostPerCigar) * (numSmokingYears * 360);

console.log(`O número de dias perdidos fumando ${numCigarsPerDay} por dia é igual a ${Math.round(lifeTimelost)}`)

/*2. Escreva um programa que pergunte a velocidade de um carro. Caso ultrapasse 80 Km
h-1, exiba uma mensagem dizendo que o usuário foi multado. Nesse caso, exiba o valor da
multa, cobrando R$ 5,00 por cada Km acima da velocidade permitida.*/

const velocidadeCarro = input("Digite a velocidade do carro: ");

const statusVelocidade = velocidadeCarro > 80 ? `Você foi multado! O valor da multa é igual a ${(velocidadeCarro - 80) * 5}` : "";

console.log(`${statusVelocidade === "" ? "Você está andando na velocidade correta!" : statusVelocidade}`);

/*3. Faça um algoritmo que pergunte a distância que um passageiro deseja percorrer em
Km. Calcule o preço da passagem, cobrando R$ 0.50 por Km para viagens até 200 Km e
R$ 0.45 para viagens mais longas.*/

const distanciaDesejada = input("Digite a distância que planeja percorre: ");
const precoPassagem = (distanciaDesejada <= 200 ? distanciaDesejada * 0.50 : distanciaDesejada * 0.45).toLocaleString('pt-br', {style: "currency", currency: "BRL"});

console.log(precoPassagem);

/*4. Crie um programa que leia o tamanho de três segmentos de reta. Analise seus
comprimentos e diga se é possível formar um triângulo com essas retas.
Matematicamente, para três segmentos formarem um triângulo, o comprimento de cada
lado deve ser menor que a soma dos outros dois.*/

const lados = {ladoA: input("Digite um valor para o lado A: "), 
               ladoB: input("Digite um valor para o lado B: "),
               ladoC: input("Digite um valor para o lado C: ")};

const analiseLadoA = lado[ladoA] > lados[ladoB] + lados[ladoC];
const analiseLadoB = lado[ladoB] > lados[ladoA] + lados[ladoC];
const analiseLadoC = lado[ladoC] > lados[ladoB] + lados[ladoA];

const eTriangulo = analiseLadoA && analiseLadoB && analiseLadoC ? "Os valores dados aos lados A, B e C formam um triângulo." : "Os valores dads aos lados A, B e C não formam um triângulo";

console.log(eTriangulo);


/*5. Crie um jogo de JoKenPo (Pedra-Papel-Tesoura).*/
const pedra = 1;
const papel = 2;
const tesoura = 3;

const jogador01 = input("Digite a sua escolha (Pedra = 1, Papel = 2 ou Tesoura = 3): ");
const jogador02 = input("Digite a sua escolha (Pedra = 1, Papel = 2 ou Tesoura = 3): ");

if(jogador01 === pedra && jogador02 === tesoura) {
    console.log("O Jogador 01 ganhou!");
} else if(jogador02 === pedra && jogador01 === tesoura) {
    console.log("O Jogador 02 ganhou!");
} else if(jogador01 === pedra && jogador02 === papel) {
    console.log("O Jogador 02 ganhou!")
} else if(jogador02 === pedra && jogador01 === papel) {
    console.log("O Jogador 01 ganhou!")
} else if(jogador01 === papel && jogador02 === tesoura) {
    console.log("O Jogador 02 ganhou!")
} else if(jogador02 === papel && jogador01 === tesoura) {
    console.log("O Jogador 01 ganhou!")
} else {
    console.log("Deu empate!")
}

/*6. Crie um jogo onde o computador vai sortear um número entre 1 e 5. O jogador vai
tentar descobrir qual foi o valor sorteado.*/

const numSorteado = Math.random() * (5 - 1) + 1;
const chute = 0;

while (chute != numSorteado) {

    chute = parseInt(input("Digite um número entre 1 e 5: "));
    console.log("Você errou! Tente novamente.")
}

console.log(`Parabéns, você acertou! O número sorteado foi ${numSorteado}`);

/*7. Uma empresa de aluguel de carros precisa cobrar pelos seus serviços. O aluguel de um
carro popular custa R$ 90,00 por dia e um carro de luxo custa R$ 150,00. Além disso, o
cliente paga por Km percorrido. Faça um programa que leia o tipo de carro alugado
(popular ou luxo), quantos dias de aluguel e quantos Km foram percorridos. No final,
mostre o preço a ser pago de acordo com os dados a seguir:
Carros populares
- Até 100 Km percorridos: R$ 0,20 por Km
- Acima de 100 Km percorridos: R$ 0,10 por Km
Carros de luxo
- Até 200 Km percorridos: R$ 0,30 por Km
- Acima de 200 Km percorridos: R$ 0,25 por Km*/

const carroPopular = 90;
const carroLuxo = 150;

const tipoCarroAlugado = input("Digite o tipo de carro alugado (Carro Popular : 1, Carro de Luxo : 2): ");



/*
8. Um programa de vida saudável quer dar pontos por atividades físicas realizadas que
podem ser trocados por dinheiro. Cada hora de atividade física no mês vale pontos. O
sistema funciona assim:
- até 10 h de atividade no mês: ganha 2 pontos por hora
- de 10 h até 20 h de atividade no mês: ganha 5 pontos por hora
- acima de 20 h de atividade no mês: ganha 10 pontos por hora
- A cada ponto ganho, o cliente fatura R$ 0,05 (5 centavos)
Faça um programa que leia quantas horas de atividade uma pessoa teve por mês.
Calcule e mostre quantos pontos ela teve e quanto dinheiro ela conseguiu ganhar.
*/
/*
9. Desenvolva um aplicativo que leia o salário e o sexo de vários funcionários. No final,
mostre o total de salário pago aos homens e o total pago às mulheres. O programa vai
perguntar ao usuário se ele quer continuar ou não sempre que ler os dados de um
funcionário.
*/
/*
10. Crie um programa usando a estrutura “faça enquanto” que leia vários números. A
cada laço, pergunte se o usuário quer continuar ou não. No final, mostre na tela:
a) O somatório entre todos os valores;
b) Qual foi o menor valor digitado;
c) A média entre todos os valores;
d) Quantos valores são pares.
*/
/*
11. Desenvolva um programa que leia o primeiro termo e a razão de uma PA (Progressão
Aritmética), mostrando na tela os 10 primeiros elementos da PA e a soma entre todos os
valores da sequência.
*/
/*
12. Faça um programa que mostre os 10 primeiros elementos da Sequência de Fibonacci.
Ex.: 1, 1, 2, 3, 5, 8, 13, 21.
*/
/*
13. Crie um programa que preencha automaticamente (usando lógica, não apenas
atribuindo diretamente) um vetor numérico com 15 posições com os primeiros elementos
da sequência de Fibonacci.
*/

/*
14. Faça um programa que leia 7 nomes de pessoas e guarde-os em um vetor. No final,
mostre uma listagem com todos os nomes informados, na ordem inversa daquela em
que eles foram informados.
*/