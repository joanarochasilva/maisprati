const nome = document.getElementById("nome");
const idade = document.getElementById("idade");
const botao = document.getElementById("botao");

botao.addEventListener("click", () => {

    document.write(`<h1>Nome: ${nome.value}, Idade: ${idade.value}</h1>`)
})
