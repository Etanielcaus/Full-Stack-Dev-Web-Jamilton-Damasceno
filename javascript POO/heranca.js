//Herança- Reutilização e manutenção
//Ambos funcionam de maneira que um tem herança sobre o outro, ou seja, os atributos podem ser de ambos.

class Animal { //Este é a classe que junta ambas classes (cao, passaro)
    constructor(pCor, pTamanho, pPeso) { //Dentro dos () você passa parametros
        this.cor = pCor
        this.tamanho = pTamanho
        this.peso = pPeso
    }

    correr() {
        console.log("correr");
        console.log("como");
        console.log("um");
        //30 linhas
    }

    dormir(){
        console.log("dormir");
    }
}


class Cao extends Animal { //extends faz com que a classe cão se extenda para a classe animal
    constructor(pCor, pTamanho, pPeso, tamanhoOrelha){
     super(pCor, pTamanho, pPeso); //Super permite criar atributos a está classe especifica  
     this.tamanhoOrelha = tamanhoOrelha
    }

    latir(){
        console.log("latir");
    }

    correr() {
        super.correr() //ele herda "correr" da classe pai
        console.log("cao");
        //5 linhas
    }
}

class Passaro extends Animal { //extends faz com que a classe passaro se extenda para a classe animal
    constructor(pCor, pTamanho, pPeso){
        super(pCor, pTamanho, pPeso);
    }
    voar (){
        console.log("voar");
    }

    correr() {
        super.correr() //ele herda "correr" da classe pai
        console.log("passaro");
        //5 linhas
    }
}

class Papagaio extends Passaro { //Aqui cria uma subclasse de outra subclasse

    constructor(pCor, pTamanho, pPeso, sabeFalar){
            super(pCor, pTamanho, pPeso);
            this.sabeFalar = sabeFalar;
        }
    falar(){
        console.log("falar");
    }
}



//instancia
//const animal = new Animal("Amarelo", 60, 3) //Aqui ele recebe aqueles parametros
const cao = new Cao("Amarelo", 60, 3, 5)
const passaro = new Passaro("Amarelo", 60, 3, "Sei falar sim seu zé buceta")
const papagaio = new Papagaio("Vermelho", 20, 1, "Sei falar sim seu zé buceta")

console.log(papagaio.sabeFalar); 
//console.log(passaro.sabeFalar);
//console.log(cao.cor);
//console.log(animal.tamanho);
//animal.cor = "Amarelo"
//cao.correr()
//passaro.correr()
//passaro.cor = "Amarelo"
//passaro.voar()
//console.log(passaro.cor);
//papagaio.correr()
//papagaio.voar()
//papagaio.falar()


/*cao.correr()
cao.latir()
passaro.correr()
passaro.dormir()
*/


