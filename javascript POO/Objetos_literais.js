//Objetos literals
//Um objeto literal em JavaScript é uma estrutura de dados que permite armazenar valores e funcionalidades relacionadas em uma única entidade. 
//Simula a captura de um formulario
let nome = "Notebook"
let preco = 1200

const produto = { 
    nome: nome,
    preco: preco,
    exibirProduto: function(produto) {
        console.log(`${this.nome},${this.preco}, ${this.categoria} `);//Esta linha faz com que não torne necessário escrever todos os códigos (nome, preco, categoria)
    }
}

const pro = produto
pro.preco = 2000

console.log(pro.preco);
console.log(produto.preco);

//Esta linha faz com que não torne necessário escrever todos os códigos (nome, preco, categoria)
//produto.categoria = "Eletronicos"
//produto.nome = "Celular"
//produto.exibirPreco = function() {
//    console.log(`Preço: ${this.preco}`);
//}

//produto.exibirProduto()
//produto.exibirPreco()
//console.log(produto.nome);