//Abstração
/*
Modelo, Entidade, Identidad,
Características e Ações
*/

class Carro {
    constructor(){
        this.marca = "Volkswagem",
        this.modelo = "gol",
        this.cor = "prata",
        this.placa = "EMJ-2565"
    }
    ligar(){

    }
}

const carro = new Carro()
carro.modelo = "Golf"
carro.cor = "vermelho"
console.log(carro.modelo)

const carro3 = new Carro()
carro3.modelo = "fusca"
carro3.cor = "azul"
console.log("O modelo deste veícula é: " + carro3.modelo)
console.log("A cor do fusca é: " + carro3.cor)

const carro2 = new Carro()
console.log("o modelo do carro 2 é: " + carro2.modelo)


//Loja virtual

class Produto {
    constructor(){

        //roupas
        this.tamanho = "M",
        this.cor = "Vermelho",
        this.preco = "45,90"
        
        //Eletronicos
        this.altura = "50cm",
        this.largura = "30cm"
        
    }
}

