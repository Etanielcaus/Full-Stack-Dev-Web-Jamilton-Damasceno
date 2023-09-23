//! Função Callback
//NOTE - Function que pucha outra função
function processar (callbackSucesso, callbackErro) {

    //Ações
    //...

    let resultadoProcessamento = true;
    if (resultadoProcessamento) {
            callbackSucesso();
        } else {
            callbackErro();
        }
}


const salvarResultado = function(){
    /*
    ...
    */
    console.log("Resultado Salvo");    
}

const erro = function(){
    /*
    ...
    */
    console.log("Erro");    
}

processar(salvarResultado, erro);