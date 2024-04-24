// const input = requeire('prompt-sync')();

// let dia = parseInt(input('Insira um número do dia de semana: '));

// let nomeDia;

// switch(dia) {
//   case 1:
//     nomeDia = 'Domingo';
//     break;
//   case 2:
//     nomeDia = 'Segunda-feira';
//     break;
//   case 3:
//     nomeDia = 'Terça-feira';
//     break;
//   case 4:
//     nomeDia = 'Quarta-feira';
//     break;
//   case 5:
//     nomeDia = 'Quinta-feira';
//     break;
//   case 6:
//     nomeDia = 'Sexta-feira';
//     break;
//   case 7:
//     nomeDia = 'Sábado'
//     break;
//   default:
//     console.log('Digite um número de 1 a 7: ')
//     break;
// }

// console.log(nomeDia);

// Exercicio 1: calculadora simples com switch-case

// const input = require('prompt-sync')();

// let num01 = parseInt(input('Digite o primeiro número: '));
// let num02 = parseInt(input('Digite o segundo número: '));
// let operacao = input('Digite a operação desejada (+, -, * ou /): ');

// let resultado;

// switch(operacao) {
//   case '+':
//     resultado = num01 + num02;
//     break;
//   case '-':
//     resultado = num01 - num02;
//     break;
//   case '*':
//     resultado = num01 * num02;
//     break;
//   case '/':
//     if(num02 !== 0) {
//       resultado = num01 / num02;
//       break;
//     } else {
//       console.log('Operação inválida! Não é possível dividir por zero.');
//       resultado = undefined;
//       break;
//     }
//   default:
//     console.log('Operação inválida!');
//     break;
// }

// if(resultado !== undefined) {
//   console.log(resultado);
// }

// Exercício 2: dias do mês

const input = require('prompt-sync')();

let mes = parseInt(input('Insira o número do mês (1 a 12): '));

let diasNoMes;

switch(mes) {
  case 1: case 3: case 5: case 7: case 8: case 10: case 12:
    diasNoMes = 31;
    break;
  case 4: case 6: case 9: case 11:
    diasNoMes = 30;
    break;
  case 2:
    diasNoMes = 28;
    break;
  default:
    diasNoMes = -1;
    break;
}

if(diasNoMes !== -1) {
  console.log('Mês inválido!')
}