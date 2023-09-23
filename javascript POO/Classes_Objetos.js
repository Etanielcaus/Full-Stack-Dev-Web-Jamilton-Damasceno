//Notação literal
/*
const hotel = {
    quartos: 20,
    ocupados:10,
    piscinas: 2,
    verificarDisponibilidade: function(){
        let res = this.quartos - this.ocupados
        return "Disponível: " + res
    }
}

hotel.quartos = 25
hotel['quartos'] = 30
delete hotel.piscinas

console.log(hotel.piscinas) */

//Notação de construtor (objeto em branco)
/*
const hotel = new Object()
hotel.quartos = 20
hotel.ocupados = 10
hotel.verificarDisponibilidade = function(){
    let res =this.quartos - this.ocupados
    return "Disponivel: " + res
}
*/
//console.log(hotel.quartos)
//hotel.verificarDisponibilidade()

//Criando classes (mais simples)
class Hotel {
    constructor(){
        this.quartos = 20;
        this.ocupados = 10;
    }
}

class Motel {
    constructor(){
        this.quartos = 40;
        this.ocupados = 20;
    }
}

const motelObjeto = new Motel();
const hotelObjeto = new Hotel();

// Comparando o número de quartos
if (motelObjeto.quartos > hotelObjeto.quartos) {
    console.log("O Motel possui mais quartos do que o Hotel.");
} else if (motelObjeto.quartos < hotelObjeto.quartos) {
    console.log("O Hotel possui mais quartos do que o Motel.");
} else {
    console.log("O Hotel e o Motel possuem a mesma quantidade de quartos.");
}

// Comparando o número de quartos ocupados
if (motelObjeto.ocupados > hotelObjeto.ocupados) {
    console.log("O Motel possui mais quartos ocupados do que o Hotel.");
} else if (motelObjeto.ocupados < hotelObjeto.ocupados) {
    console.log("O Hotel possui mais quartos ocupados do que o Motel.");
} else {
    console.log("O Hotel e o Motel possuem a mesma quantidade de quartos ocupados.");
}


