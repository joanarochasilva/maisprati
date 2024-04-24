Nesta pasta estão armazenadas as listas de exercícios de cunho avaliativo.

Antes de executar os códigos dos scripts elaborados, é importante tomar algumas providências:

* Garanta que o Node.js foi instalado corretamente e está em sua versão mais atualizada;

* Os códigos desenvolvidos aqui utilizam o módulo Prompt-Sync para entrada de dados por usuários. É importante garantir a sua instalação antes de executar os códigos;

```sh
npm install prompt-sync
```
* O objeto *input* foi instanciado no início do script. Ele é utilizado por todas as questões das listas, sendo que elas se encontram todas em um mesmo script. A organização dos códigos é feita como exemplificado abaixo.

```js
  const input = require('prompt-sync')(); // entrada de dados

  // QUESTÕES

  /* 1. Essa é a primeira questão. todas as questões tem seus enunciados dispostos como comentários de muitas linhas e sua resolução logo abaixo.*/

  const respostas = `Os códigos de resposta são dispostos logo após seus enunciados.`

  /*...*/
```
