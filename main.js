

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

// // Evento para mostrar o formulário ao clicar na imagem do cabeçalho
// $('header img').click(function(){
//     $('form').slideDown();
// });

// // Evento para esconder o formulário ao clicar no botão "Cancelar"
// $('#cancel').click(function(){
//     $('form').slideUp();
// });

// // Evento para lidar com o envio do formulário
// $('form').on('submit', function(e){
//     e.preventDefault(); // Evita o comportamento padrão do formulário de recarregar a página
//     const enderecoNovaTarefa = $('#endereco-tarefa-nova').val(); // Corrige a variável "enrderecoNovaTarefa"
//     const novoItem = $('<li></li>'); // Cria um novo item de lista
//     $('<p>').text(enderecoNovaTarefa).appendTo(novoItem); // Adiciona o texto da nova tarefa ao item de lista
//     $('<div>').addClass('link').append('<p>Finalizar Tarefa</p>').appendTo(novoItem); // Adiciona o link "Finalizar Tarefa" ao item de lista
//     $(novoItem).appendTo('ul'); // Adiciona o novo item de lista à lista existente
//     console.log(novoItem);
// });

// // Evento para aplicar estilo ao clicar no elemento "meuElemento"
// $('#meuElemento').click(function(){
//     $('.Conteudo').css('text-decoration', 'line-through'); // Seleciona e aplica o estilo corretamente
// });