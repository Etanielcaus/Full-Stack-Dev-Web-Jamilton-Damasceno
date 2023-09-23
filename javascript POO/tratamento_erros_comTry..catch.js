//Tratamento de erros com Try Catch
//Essas estruturas permitem que você envolva um bloco de código que pode gerar exceções em um bloco try e capture qualquer exceção lançada dentro desse bloco usando um bloco catch.

function contarQuantidadeLetras( produto ){
    try{ //tentar
        console.log(produto.nome.length);
        console.log("teste");
    } catch( erro ){ //pegar, aqui ele mostra o erro para o usuario final
        //tratarErro(erro);
        console.log("Erro ao processar");
    } //finally{
     //   console.log("finally");
    //}
}

//function tratarErro(erro) {
//    throw new Error("Erro ao processar: ");
//  }

const produto = {
    nom: "Notebook", //aqui esta o erro do código
    preco: 1200
}

//tratarErro("Erro de exemplo"); // Passando um argumento para a função tratarErro
contarQuantidadeLetras(produto);