const botaoRoxo = document.getElementById("btn-roxa");
const erro = document.querySelector(".erro");
const adicioneTexto = document.getElementById("adicioneTarefa");
botaoRoxo.addEventListener("click", function(evento) {
    const tabela = document.getElementById("tabela");
    const valueTabela = tabela.value;
    evento.preventDefault();
    if (valueTabela === "") {
        erro.textContent = "errouuu!";
    } else {
        let liTabela = document.createElement("li");
        liTabela.textContent = valueTabela;
        adicioneTexto.appendChild(liTabela);
        valueTabela = "";
        erro.textContent = "";
    }
});