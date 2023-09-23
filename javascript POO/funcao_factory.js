//!SECTION - FActory - Design Patterns (padrão de design ou padrão de objetos)
//TODO - Padrão de projetos -> forma comum de resolver problemas

const produto1 = {
    nome: 'Notebook',
    preco: 2499
}

const produto2 = {
    nome: 'Celular',
    preco: 1500
}

const ProdutoFactory = function (nome, preco){ //NOTE - Aqui cria uma factory
 
    //dados    

    return{
        nome,
        preco,
        recuperarAvaliacoes(){
            console.log(`Avaliações para ${this.nome}`);
        }
    }
}

const produto = ProdutoFactory("Notebook", 2499) //NOTE - Aqui é como se criasse um novo produto a partir do factory
const produtoNovo = ProdutoFactory("Celular", 1800)
produto.recuperarAvaliacoes();
console.log(produtoNovo); 
console.log(produto);