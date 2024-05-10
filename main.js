
const meuElemento = document.getElementById('#tarefa')

$('header img').click(function(){
    $('form').slideDown()
})

$('#cancel').click(function(){
    $('form').slideUp();
})


$('form').on('submit', function(e){
    e.preventDefault();
    const enrderecoNovaTarefa = $('#endereço-terefa-nova').val()
    const novoItem = $('<li></li>')
    $(`<p>${enrderecoNovaTarefa} </p>`).appendTo(novoItem)
    $(
        `<div class="link" 
            <p>
                Finalizar Tarefa
            </p>
        </div>    
    `).appendTo(novoItem)

    $(novoItem).appendTo('ul')
    console.log(novoItem)

    meuElemento.style.textDecoration = "line-through"

})