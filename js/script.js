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

        let buttonFin = document.createElement("button");
        buttonFin.textContent = "X";
        Tabela.appendChild(buttonFin);



        // buttonFin.addEventListener("click", function(evento) {
        //     if (Tabela.parentNode) {
        //         Tabela.paarentNode.removeChild(tabelaFin);
        //     }
        // })
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
            if (Tabela.parentNode) {
                Tabela.parentNode.removeChild(Tabela);
            }
        })

    }
})