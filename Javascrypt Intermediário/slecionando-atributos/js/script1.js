// #region Rotina de tratamento HTML
function executar(){
    console.log("executar");
}
function executar2(){
    console.log("executar2");
}
// #endregion

// #region Rotina de Tratamento DOM tradicional
//const botao = document.getElementsByName('meuBotao')[0];
const botao = document.querySelector('[botao-acao]');
botao.onclick = executar; //NOTE - "elemento.evento = nomeDaFunção "
// #endregion

// #region Ouvinte de elementos DOM
const botao2 = document.querySelector('[botao-evento]');
const body = document.querySelector('body');

body.addEventListener('click', executar2, true); //NOTE - True ou false se refere, a qual vai ser reporuzido primeiro
botao2.addEventListener('click', executar, false); //NOTE - elemento.addEventListener(‘evento’, nomeDaFunção, booleano)
// #endregion

