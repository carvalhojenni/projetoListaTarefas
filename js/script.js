const containerPrincipal = document.getElementById("container");
const form = document.getElementById("form");
const adicioneTexto = document.getElementById("adicioneTarefa");
const botaoRoxo = document.getElementById("btn-roxa");
const tabela = document.getElementById("Tabela");
const erro = document.classList("erro");

// const botaoRemover = document.getElementById("btn-remover");

form.addEventListener("click", function(evento) {
    evento.preventDefault();
    if (adicioneTexto === "") {
        erro.textContent = "erro";

    } else {
        const tabelaFin = document.createElement("li");
        tabelaFin.classList.add("tarefas");
        tabelaFin.textContent = adicioneTexto.value;
        tabela.appendChild(tabelaFin);
        form.reset();

        let buttonFin = document.createElement("span");
        buttonFin.textContent = "X";
        tabelaFin.appendChild(buttonFin);

        buttonFin.addEventListener("click", function() {
            if (buttonFin.parentNode) {
                tabelaFin.appendChild(buttonFin);
                tabela.removeChild(tabelaFin);
            }
        })
        tabelaFin.addEventListener("click", function() {
            console.log(tabelaFin.classList)
            if (tabelaFin.classList.contains("tarefas-completo")) {
                tabelaFin.classList.remove("tarefas-completo");
            } else {
                tabelaFin.classList.add("tarefas-completo");
            }
        })

        const botaoCheck = document.getElementById("btn-checar");
        botaoCheck.addEventListener("click", function() {
            if (tabelaFin.classList.add("tarefas-completo"));
        })

        const botaoRemover = document.getElementById("btn-remover");
        botaoRemover.addEventListener("click", function(e) {
            if (tabelaFin.parentNode) {
                tabelaFin.parentNode.removeChild(tabelaFin)
            }
        })

    }
})