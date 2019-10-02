const containerPrincipal = document.getElementById("container");
const form = document.getElementById("form");
// Adicionar texto no campo adicioneTarefas 
const adicioneTexto = document.getElementById("adicioneTarefa");

// adicionar click no botao ADD 
const botaoRoxo = document.getElementById("btn-roxa");
const tabela = document.getElementById("Tabela");


botaoRoxo.addEventListener("click", function(evento) {
    evento.preventDefault();
    if (adicioneTexto.value.trim() === "") {
        adicioneTexto.getAttribute("placeholder", "Digite tarefa!");
    } else {
        const tabelaFin = document.createElement("li");
        tabelaFin.textContent = adicioneTexto.value;
        console.log("clickou");
        tabela.appendChild(tabelaFin);
        form.reset();
    }
})

const div = document.createElement("div");
tabelaFin.appendChild(div);
div = setAttribute("text", "");
const removerLinha = document.createElement("button");
tabela.appendChild(removerLinha);








const BotaoRemover = document.getElementById("btn-remover");