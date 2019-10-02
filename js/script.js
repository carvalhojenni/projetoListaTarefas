const containerPrincipal = document.getElementById("container");
const form = document.getElementById("form");
const adicioneTexto = document.getElementById("adicioneTarefa");
const botaoRoxo = document.getElementById("btn-roxa");
const tabela = document.getElementById("Tabela");

botaoRoxo.addEventListener("click", function(evento) {
    evento.preventDefault();
    if (adicioneTexto.value.trim() == "") {
        adicioneTexto.getAttribute("placeholder", "Por favor, digite a sua tarefa:");

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
    }
})