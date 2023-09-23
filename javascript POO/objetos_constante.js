//Objetos constantes
//isso significa que ela é uma constante e seu valor não pode ser alterado após a atribuição inicial. No entanto, ao trabalhar com objetos em JavaScript, é importante entender que a constância se aplica à referência do objeto, não aos valores das suas propriedades.

const produto = { //Não é possivel adicionar novas propriedades dentro de uma constante.
    nome: 'Caneta',
    preco: 7.99,
    desconto: 0.15
}

//produto = {
//    nome: "Celular"
//}

Object.freeze( produto )
produto.nome = "Borracha" //freeze não permite alterar o valor de uma propriedade.

console.log(produto.nome)