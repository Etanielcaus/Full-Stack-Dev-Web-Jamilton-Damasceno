//Paradigma -> exemplo ou padrão a ser seguido, não se trata de uma linguagem, mas a forma como você soluciona problemas usando uma linguagem de programação
//A diferença entre a programação convencional e a programação orientada a objetos reside na forma como o código é estruturado e organizado. A POO introduz conceitos como classes, objetos, herança e polimorfismo, possibilitando uma modelagem mais eficiente e uma abordagem mais modular do desenvolvimento de software.

//Javascript é multi paradigma

//Procedual 
//A programação convencional é baseada em uma abordagem procedural, onde o código é organizado em uma sequência de instruções que são executadas uma após a outra. Nesse estilo de programação, o foco está nas tarefas a serem realizadas e nas funções que as executam. As variáveis e os dados são tratados de forma separada das funções.
//verificar quantidade de quartos (exemplo)
/*function verificarDisponibilidade(quartos,ocupados){
    let res = quartos - ocupados
    console.log("Disponiveis: " + res)
}*/
/*
let quartos = 20
let ocupados = 5
verificarDisponibilidade(quartos,ocupados)
*/

//Orientado a objetos
const hotel = {
    quartos: 20,
    ocupados : 10,
    verificarDisponibilidade: function(){
        let res = this.quartos - this.ocupados
        console.log("Disponiveis: " + res)
    }
}

hotel.ocupados = 5
hotel.verificarDisponibilidade();
