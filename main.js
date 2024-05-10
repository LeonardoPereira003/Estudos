

$('header img').click(function(){
    $('form').slideDown()
})

$('#cancel').click(function(){
    $('form').slideUp();
})
$('form').on('submit', function(e){
    e.preventDefault();
    const enrderecoNovaImagem = $('#endereço-imagem-nova').val()
    const novoItem = $('<li></li>')
    $(`<img src="${enrderecoNovaImagem}" />`).appendTo(novoItem)
    $(
        `<div class="link" />
            <a href="${enrderecoNovaImagem}" target=_"blank" title="Ver imagem em tela cheia">
                Ver imagem em tela cheia
            </a>
        </div>    
    `).appendTo(novoItem)

    $(novoItem).appendTo('ul')
    console.log(novoItem)
})