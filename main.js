    // Substitua a data e hora desejada (mês começa em 0 no JS, então julho é 6)
    const targetDate = new Date("2025-07-15T00:00:00").getTime();

    function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    // Se já passou da data
    if (distance < 0) {
        document.getElementById("countdown").innerText = "O evento já começou!";
        return;
    }

    // Cálculo de dias, horas, minutos e segundos
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Atualiza o texto do elemento countdown
    document.getElementById("countdown").innerText =
        `Faltam ${days}d ${hours}h ${minutes}m ${seconds}s`;
    }

    // Executa a função imediatamente e depois a cada 1 segundo
    updateCountdown();
    setInterval(updateCountdown, 1000);
