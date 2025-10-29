    function calcular() {
    let altura = document.getElementById("altura").value.replace(",", ".");
    let peso = document.getElementById("peso").value.replace(",", ".");

    if (!altura || !peso) {
        document.getElementById("resultado").innerText =
        "Preencha altura e peso corretamente!";
        return;
    }

    altura = parseFloat(altura);
    peso = parseFloat(peso);

    if (isNaN(altura) || isNaN(peso)) {
        document.getElementById("resultado").innerText =
        "Valores inválidos! Digite números.";
        return;
    }

    const imc = peso / (altura * altura);
    let classificacao = "";

    if (imc < 18.5) classificacao = "Magreza";
    else if (imc < 25) classificacao = "Normal";
    else if (imc < 30) classificacao = "Sobrepeso";
    else if (imc < 35) classificacao = "Obesidade I";
    else if (imc < 40) classificacao = "Obesidade II";
    else classificacao = "Obesidade III";

    document.getElementById("resultado").innerText =
        `Seu IMC é ${imc.toFixed(2)} — ${classificacao}`;
    }

    function limpar() {
    document.getElementById("altura").value = "";
    document.getElementById("peso").value = "";
    document.getElementById("resultado").innerText = "Informe os dados acima.";
    }
