//Herança- Reutilização e manutenção
//Ambos funcionam de maneira que um tem herança sobre o outro, ou seja, os atributos podem ser de ambos.

class Animal { //Este é a classe que junta ambas classes (cao, passaro)
    constructor() {
        this.cor = ""
        this.tamanho = 0
        this.peso = 0
    }

    correr() {
        console.log("correr");
    }

    dormir(){
        console.log("dormir");
    }
}


class Cao extends Animal { //extends faz com que a classe cão se extenda para a classe animal
    latir(){
        console.log("latir");
    }
}

class Passaro extends Animal { //extends faz com que a classe passaro se extenda para a classe animal
    voar (){
        console.log("voar");
    }
}



//instancia
const cao = new Cao()
const passaro = new Passaro()

//cao.correr()
passaro.correr()
passaro.cor = "Amarelo"
console.log(passaro.cor);

/*cao.correr()
cao.latir()
passaro.correr()
passaro.dormir()
*/
