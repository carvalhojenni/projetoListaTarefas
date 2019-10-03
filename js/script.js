const containerPrincipal = document.getElementById("container");
const form = document.getElementById("form");
const adicioneTexto = document.getElementById("adicioneTarefa");
const botaoRoxo = document.getElementById("btn-roxa");
const tabela = document.getElementById("Tabela");
const botaoCheck = document.getElementById("btn-checar");

form.addEventListener("click", function(evento) {
    evento.preventDefault();
    if (adicioneTexto.value.trim() === "") {
        // erro.textContent = "erro";

    } else {
        const tabelaFin = document.createElement("p");
        tabelaFin.classList.add("tarefas");
        tabelaFin.textContent = adicioneTexto.value;
        tabela.appendChild(tabelaFin);
        form.reset();

        let buttonFin = document.createElement("span");
        buttonFin.textContent = "X";
        tabelaFin.appendChild(buttonFin);

        buttonFin.addEventListener("click", function(evento) {
            if (buttonFin.parentNode) {
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
    const botaoCheck = document.getElementById("btn-checar");
    botaoCheck.addEventListener("click", function() {
        if (tabela.classList.add("tarefas-completo"));
    })
})