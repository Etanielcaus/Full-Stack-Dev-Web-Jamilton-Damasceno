//Funções construtoras
class Produto {

}

const Hotel = function() { //TODO - Esta declaração atinge o mesmo objetivo da anterior
    this.nome = 'Hotel';
    this.quantidadeSuites = 30
    this.suitesOcupadas = 25

    this.reservar = function(){
        this.suitesOcupadas++
        console.log("total de suites do Hotel ocupadas: " + this.suitesOcupadas);
    }

}

const hotel = new Hotel();
const produto = new Produto();
hotel.reservar();
hotel.reservar();
hotel.reservar();
typeof Produto; //Function
typeof produto; //TODO - Object, quando um function é instanciado, ele se torna objeto

//Funções construtoras - Encapsulamento
const Motel = function() { //Esta declaração atinge o mesmo objetivo da anterior
    this.nome = 'Hotel';
    this.quantidadeSuites = 30
    let suitesOcupadas = 25 //TODO - Aqui torna para ele não seja possivel ser acessado por fora do objeto

    this.reservar = function(){ //Aqui ele faz basicamente a reserva do hotel
        if(suitesOcupadas < this.quantidadeSuites){
            suitesOcupadas++
            console.log("Suites do Motel ocupadas: " + suitesOcupadas);
        }else{
            console.log("Estamos lotados");
        }
        
    }

}

const motel = new Motel();
motel.reservar(); //Aqui é como se ele fizesse a reserva do hotel
motel.reservar();
motel.reservar();
motel.reservar();
motel.reservar();
hotel.suitesOcupadas = 20 //TODO -  Ele não permite fazer essa mudança na classe
motel.reservar();

