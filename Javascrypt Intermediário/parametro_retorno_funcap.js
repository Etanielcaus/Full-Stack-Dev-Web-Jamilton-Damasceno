//!Parametros e retornos de funções

//SECTION - Parametro padrão
/*function somar(numero1, numero2){
    numero1 = isNaN(numero1) ? 0 : numero1
    numero2 = isNaN(numero2)? 0 : numero2
    return numero1 + numero2
}*/

//SECTION - Valor padrão do es2015
function somar(numero1=0, numero2=0){
    return numero1 + numero2
}

somar(2)

//NOTE - NaN -> Not a Number

//SECTION - Parâmetro e retornos opcionais

function calcularSalario(salario, desconto){
    //desconto = isNaN(desconto)? 0 : desconto
    if(salario == 0){
        console.log('O salário não informado')
    }else{
        return salario - desconto
    }
    
}

let resultado = calcularSalario(100,20)
console.log(resultado);