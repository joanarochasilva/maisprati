// Prompt-Sync
const input = require('prompt-sync')();

// QUESTÕES

/*1. Escreva um programa para calcular a redução do tempo de vida de um fumante.
Pergunte a quantidade de cigarros fumados por dias e quantos anos ele já fumou.
Considere que um fumante perde 10 min de vida a cada cigarro. Calcule quantos dias de
vida um fumante perderá e exiba o total em dias.*/
/*
const numCigarsPerDay = parseInt(input('Digite o número de cigarros por dia: '));
const numSmokingYears = parseInt(input('Digite o número de anos: '));

const timeLostPerCigar = 0.00694; // 10 min ~= 0.00694 day
const lifeTimelost = (numCigarsPerDay * timeLostPerCigar) * (numSmokingYears * 360);

console.log(`O número de dias perdidos fumando ${numCigarsPerDay} por dia é igual a ${Math.round(lifeTimelost)}`)
*/
/*2. Escreva um programa que pergunte a velocidade de um carro. Caso ultrapasse 80 Km
h-1, exiba uma mensagem dizendo que o usuário foi multado. Nesse caso, exiba o valor da
multa, cobrando R$ 5,00 por cada Km acima da velocidade permitida.*/
/*
const velocidadeCarro = input("Digite a velocidade do carro: ");

const statusVelocidade = velocidadeCarro > 80 ? `Você foi multado! O valor da multa é igual a ${(velocidadeCarro - 80) * 5}` : "";

console.log(`${statusVelocidade === "" ? "Você está andando na velocidade correta!" : statusVelocidade}`);
*/
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

/*5. Crie um jogo de JoKenPo (Pedra-Papel-Tesoura).*/

/*6. Crie um jogo onde o computador vai sortear um número entre 1 e 5. O jogador vai
tentar descobrir qual foi o valor sorteado.*/

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
