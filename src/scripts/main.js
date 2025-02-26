document.addEventListener('DOMContentLoaded',function(){
    document.getElementById('Form-soteio').addEventListener('submit',function(){
        let numeroMaximo = document.getElementById('numero-maximo');
        numeroMaximo = parseInt(numeroMaximo);

        let numeroAleatorio = Math.random() * numeroMaximo;

        
        document.getElementById('resultado').innerText = numeroAleatorio
    })
})