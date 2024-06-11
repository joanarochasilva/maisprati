const numero01 = document.getElementById("numero01").value;
const numero02 = document.getElementById("numero02").value;
const areaResultado = document.getElementById("resultado");
const botao = document.getElementById("botao");

botao.addEventListener("click", () => {
    areaResultado.innerHTML = `Média = ${(numero01 + numero02) / 2}`;
})

