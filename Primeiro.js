const form = document.getElementById("form-deposito");
const campoA = document.getElementById("campoA");
const campoB = document.getElementById("campoB");
let formEValido = false;


form.addEventListener("submit", function(e) {
    e.preventDefault();

    const ValorcampoA = Number(campoA.value);
    const ValorcampoB = Number(campoB.value)
    const mensagemSucesso = `O valor do campo B (${ValorcampoB}) é maior que o campo A (${ValorcampoA}). Sua afirmação está correta.`;
    const mensagemErro = `O valor do campo A (${ValorcampoA}) é maior ou igual ao campo B (${ValorcampoB}), portanto sua afirmação está incorreta.`;
    
formEValido = ValorcampoB > ValorcampoA

    if(formEValido) {
        const containerMensagemSucesso =  document.querySelector(".success-mensage")
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        campoA.style.border = "3px solid #006400"
        campoB.style.border = "3px solid #006400"
        containerMensagemSucesso.style.display = "block"
        
        campoA.value ="";
        campoB.value ="";
    } else {
        const containerMensagemErro =  document.querySelector(".erro")
        containerMensagemErro.innerHTML = mensagemErro;
        campoB.style.border = "3px solid #ff000f"
        campoA.style.border = "3px solid #ff000f"
        containerMensagemErro.style.display = "block"
        
    }    

})







