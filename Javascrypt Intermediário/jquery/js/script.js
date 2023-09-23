//$('') //NOTE - A estrutura jquery é mais ou menos assim.

//$('p').hide(5000); //NOTE - .hide() é uma função que esconde o elemento. e os 5000 equivale a um 5 segundos. 

// #region Capturar um texto para o outro ambiente
//let itens = $('ul').text();
//$('#conteudo').text(itens); //NOTE - Aqui ele praticamente capturou o conteúdo do elemento ul e transferiu para o ambiente #conteudo
// #endregion

//$('p').addClass('destaque'); //NOTE - Aqui ele vai adicionando a classe destaque para todos os elementos p.

// #region trocar a cor atraves de um botão
$('[acao-clique]').click(function () {  //NOTE - Ele é uma função que é executada quando o botão é clicado.
    //$('p').addClass('destaque');  

    //let itens = $('ul').text();
   // $('#conteudo').text( $('ul').text() ); 
    $($('#conteudo').text( $('ul').text() )).toggle();
});
// #endregion

