// Métodos - parâmetros e retornos

class Usuario {
    constructor(){
        this.email = "",
        this.senha = "",
        this.subtotalCompra = 0
    }

    logar(){//Aqui simula uma function de login

        let emailBD = "ja@gmail.com" //Estes simulam somente o login
        let senhaBD = "1234" // salvo dentro do banco de dados

        if(senhaBD == this.senha ){ //Se senha válida, então OK
            //console.log("senha valida") //console.log exibe no console
            return "Senha válida" //Return retorna o texto
        }else{ //senão....
            //console.log("senha invalida") //console.log exibe no console
            return "Senha inválida" //Return retorna o texto
        }

    }

    calcularDesconto( cupom ){

        let desconto = 0
        if( cupom == "DESC20" ){
            desconto = 20
        }else if( cupom == "FESTA10" ){
            desconto = 10
        }

        return this.subtotalCompra - desconto
        

    }
}

const usuario = new Usuario() //cria o objeto com base em outro
usuario.subtotalCompra = 500
let mensagem = usuario.calcularDesconto( "DESC20" )
console.log(mensagem) //aqui exibe no console

/*
usuario.email = "ja@gmail.com"//aqui simula dados coletados
usuario.senha = "1235" //Dado coletado no momentos do login

let mensagem = usuario.logar() //aqui retorna a função
console.log(mensagem) //aqui exibe no console
*/