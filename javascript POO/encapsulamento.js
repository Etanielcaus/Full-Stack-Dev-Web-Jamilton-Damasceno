//Encapsulamento
// Esconder detalhes da implementação, dando mais segurança a sua aplicação. O Encapsulamento serve para controlar o acesso aos atributos e métodos de uma classe.
class Carro {
    constructor(){
        this.modelo = "Gol",
        this.cor = "Vermelho"
    }

    frear(){
        console.log("parar o carro")
    }

}

const carro = new Carro()
carro.frear()

//Encapsulamento, modificadores de acesso e getters e setter
class ContaBancaria {

    constructor(){
        //Moddificadores de acesso: private, protected e public
        //É possivel utilizar o underline antes do atributo para esconder.
        this._numeroConta = 0
        this._saldo = 0
    }

    sacar( valorSaque ){
        this._saldo = this._saldo - valorSaque
    }

    depositar( valorDeposito ){
        this._saldo = this._saldo + valorDeposito
    }

    get numeroConta(){ //pseudo-property
           return "Número: " + this._numeroConta
        }
    set numeroConta(numero){
        if(numero > 0){
            this._numeroConta = numero + 1
            return "Numero: " + this._numeroConta
        }
        
    }

    get saldo(){
            return "Saldo: " + this._saldo
        }

    set saldo(novoSaldo){
        if(novoSaldo > 0){
            this._saldo = novoSaldo
            return "Saldo: " + this._saldo
        }
    }
    

}

const conta = new ContaBancaria()
//conta._numeroConta =  - 50
//conta.numeroConta = 8
conta.saldo = 500 //para recuperar este saldo de maneira segura:
conta.sacar(500) //Estes números se correlatam
conta.depositar(100) //550


//console.log(conta._numeroConta);
//console.log(conta._numeroConta);
console.log( conta.saldo )



