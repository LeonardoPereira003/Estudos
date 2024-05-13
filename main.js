
// Animações dos Botões 
$('header img').click(function(){
    $('form').slideDown()
})

$('#cancel').click(function(){
    $('form').slideUp();
})
// Criado a ação de click do form
$('form').on('submit', function(e){
    e.preventDefault();
    const enrderecoNovaTarefa = $('#endereço-terefa-nova').val()
    const novoItem = $('<li></li>')
    $(`<p>${enrderecoNovaTarefa} </p>`).appendTo(novoItem)
    $(
        `<div class="link" 
            <p></p>
        </div>    
    `).appendTo(novoItem)

    $(novoItem).appendTo('ul')
    console.log(novoItem)
})

const meuValor = $('meuElemento')
const meuElemento = document.querySelector('.Conteudo')

// Evento para aplicar estilo ao clicar no elemento "meuElemento"

$('ul').on('click', 'li', function() {
    $(this).css('text-decoration', 'line-through');
});
