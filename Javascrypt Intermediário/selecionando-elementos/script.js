
// #region Modificar botão
var elemento = document.getElementById("meuElemento");//NOTE -  Captura o elemento e armazena em uma variável
            
            var botao = document.getElementById("meuBotao");//NOTE -  Captura o botão
            
            botao.addEventListener("click", function() { //NOTE - Adiciona um evento de clique ao botão
                elemento.innerHTML = "Teste"; //NOTE - Aplica as mudanças no elemento capturado
                
            });
// #endregion]]

//const colecao = document.getElementsById('meuElemento'); //NOTE - Aqui ele puxa por id do elemento
//const obj1 = document.getElementsByTagName('li') //NOTE - Aqui ele puxa por tag
//const obj = document.getElementsByClassName('vermelho') //NOTE - Aqui ele puxa a classe de um elemento
//const obj = document.getElementsByName('nome'); //NOTE - Aqui ele puxa todos os elementos que possuem nome
//const obj = document.querySelector('li.primeiro'); //NOTE - Aqui ele puxa uma classe css
const obj = document.querySelectorAll('li.primeiro');//NOTE - Aqui ele puxa todos os elementos
/*for (let i=0; i<obj.length; i++) {
    console.log(obj[i].textContent);
} */
//const lista = Array.from(colecao);
//const funcao = function(item,index) {
//    console.log(item.textContent);
//}
//lista.forEach(funcao)
//console.log(lista.reduce);
//console.log(obj);




