function executar(){
    console.log("Executar");
}

function submit(event){
    console.log("Submit");
    event.preventDefault();
}
const form = document.formulario
const entrada = form.entrada

// #region Controla os eventos em uma caixa de texto
//entrada.addEventListener("input", executar)//NOTE - Valor de qualquer elemento <input> mudou
//entrada.addEventListener("cut", executar) //NOTE - Usuário “recorta” o conteúdo de um campo de formulário
//entrada.addEventListener("copy", executar) //NOTE - Usuário “copia” o conteúdo de um campo de formulário
//entrada.addEventListener("paste", executar) //NOTE - Usuário “cola” o conteúdo de um campo de formulário
//entrada.addEventListener("select", executar) //NOTE - Usuário “seleciona” o conteúdo de um campo de formulário
// #endregion

// #region Change
const selecao = form.selecao
//selecao.addEventListener("change", executar) //NOTE - O valor em uma caixa de seleção ou botão de rádio mudou

const radio = form.idade
//console.log(radio);
//radio[0].addEventListener("change", executar) //NOTE - O valor em uma caixa de seleção ou botão de rádio mudou
//radio[1].addEventListener("change", executar)
// #endregion



//form.addEventListener("reset", executar) //NOTE - Usuário clica em um botão reset ( pouco usado atualmente )
//form.addEventListener("submit", submit) //NOTE - Usuário envia um formulário ( usando botão ou tecla )


