// Definir a data do evento
const eventoData = new Date("October 21, 2025 00:00:00").getTime();

function atualizarContagem() {
    const agora = new Date().getTime();
    const diferenca = eventoData - agora;

    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

    document.getElementById("timer").innerHTML = `${dias}d ${horas}h ${minutos}m ${segundos}s`;

    if (diferenca < 0) {
        document.getElementById("timer").innerHTML = "Evento iniciado!";
    }
}

setInterval(atualizarContagem, 1000);

function garantirIngresso() {
    alert("Ingressos em breve disponíveis!");
}

