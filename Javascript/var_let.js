// Var vs let (escopo)
//let numero = 10; // global (fica visível dentro de qualquer bloco)

//{
//    let numero = 5; //let está disponivel somente sobre o escopo, diferente de var (da resultado de erro)
//    console.log(numero);
//}

function calcular() {

    var numero = 12; //dentro de uma função, o var só vai estar disponivel dentro da função
    //console.log(numero); // Exibe o valor da variável "numero" dentro da função "calcular"
}

console.log(numero);
//calcular(); // Chama a função "calcular"
