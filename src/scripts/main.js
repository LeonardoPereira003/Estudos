document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('form-sorteio').addEventListener('submit', function(event){
        event.preventDefault(); // Impede a página de recarregar

        let numeroMaximo = document.getElementById('numero-maximo').value; 
        numeroMaximo = parseInt(numeroMaximo); // Converte para número inteiro
        
        if (isNaN(numeroMaximo) || numeroMaximo < 2) {
            alert("Por favor, insira um número válido maior ou igual a 2.");
            return;
        }

        let numeroAleatorio = Math.floor(Math.random() * numeroMaximo) + 1;

        document.getElementById('resultado').innerText = numeroAleatorio;
    })
})
