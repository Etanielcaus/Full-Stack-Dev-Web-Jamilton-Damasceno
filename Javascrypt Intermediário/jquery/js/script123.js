function callback(){
    alert('A animação terminou')
}

$(function(){

    $(document).keydown(function(e) {
        var objetoMovido = $('#conteudo');
        var passo = 40; // Quantidade de pixels que o objeto deve se mover a cada pressionamento de tecla

        switch (e.keyCode) {
            case 37: // Seta para a esquerda
                objetoMovido.animate({left: "-=" + passo});
                break;
            case 38: // Seta para cima
                objetoMovido.animate({top: "-=" + passo});
                break;
            case 39: // Seta para a direita
                objetoMovido.animate({left: "+=" + passo});
                break;
            case 40: // Seta para baixo
                objetoMovido.animate({top: "+=" + passo});
                break;
        }
    });


    $('[acao-direita]').on('click', function () {
        $('#conteudo').animate(
            {
                left: "+=40",
                right: "-=40"
            }
        )
    });
    $('[acao-esquerda]').on('click', function () {
        $('#conteudo').animate(
            {
                right: "+=40",
                left: "-=40"
            }
        )
    });

    $('#conteudo').on('click', function () {
        $('#conteudo').animate(
            //{width:600},
            //{width:'100%'},
            {
                right: 20,
                bottom: 50,
                padding: "+=50",
                opacity: 0.2
            },
            1000,
            callback
        )
    })
    

})