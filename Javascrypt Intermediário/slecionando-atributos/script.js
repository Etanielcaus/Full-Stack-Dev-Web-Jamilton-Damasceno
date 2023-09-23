
//!SECTION - selecionando atributos

// #region Acessando atributos
//const img = document.querySelector('#imagem');
//let atributo = 'src'; //NOTE - Aqui ele torna uma variavel do atributo
//console.log(img.getAttribute(atributo)); //NOTE - getAttribute('src') acessa os atributos de um elemento
//console.log(img['width']);
//console.log(img.width);
// #endregion

// #region Modificar imagem
//const img = document.querySelector('#imagem');
//img.src = '/home/etaniel/Área de Trabalho/Dev Web/Javascrypt Intermediário/slecionando-atributos/img/grafico.png'
// #endregion

// #region modificar imagem com um botãos
const botao = document.getElementsByName('botao')[0];
botao.addEventListener('click', () => {
    const img = document.querySelector('#imagem');
    img.src = '/home/etaniel/Área de Trabalho/Dev Web/Javascrypt Intermediário/slecionando-atributos/img/grafico.png'
})
// #endregion


//!SECTION - atributos personalizados


