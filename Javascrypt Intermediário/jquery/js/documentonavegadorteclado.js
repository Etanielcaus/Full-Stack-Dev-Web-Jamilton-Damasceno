
//!SECTION Documento
//FIXME - ready, load, unload
// #region elemento pronto
//$(document).ready(function () { //NOTE - Ready sinaliza que o arquivo está pronto
//    $('[acao-clique]').on('click', function () {
//        $('h1').addClass('destaque');
//        console.log('clique');
//    });
//});

//$(function(){
//    $('[acao-clique]').on('click', function () {
//        $('h1').addClass('destaque');
//        console.log('clique');
//    });
//})
// #endregion

// #region Load 
//$(window).on('load', function () { //NOTE - Ele vai ser chamado quando a pagina ja tiver carregada
 //   console.log('load');
//});

//$(window).on('unload', function () {
//    console.log('unload'); //NOTE - Aqui ele chama quando a pagina está carregando
//});
// #endregion´

//!SECTIONNavegador
//FIXME - error, resize, scroll

// #region Navegador
//$(window).on('resize', function () {
//    console.log('resize');
//});

//$(window).on('error', function () {
//    console.log('error');
//});

//$(window).on('scroll', function () {
//    console.log('scroll');
//});
// #endregion

//!SECTIONMouse
//FIXME - click, dblclick, mouseup, mousedown, mouseover, mousemove, mouseout, hover

$(function(){
    $('[acao-clique]').on('click', function () {
        $('h1').addClass('destaque');
        console.log('clique');
    });
})

