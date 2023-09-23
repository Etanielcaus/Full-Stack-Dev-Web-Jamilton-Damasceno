//!Reduce Method - array
//NOTE - O objetivo dele é reduzir o array em um novo array
//LINK - https://www.youtube.com/watch?v=dckGT8Rts-4&ab_channel=dpw
//FIXME - array.reduce(function(total, currentValue, currentIndex, arr), initialValue)

// #region Lançamentos de foguetes
const rockets = [
    { country: "Russia", launches: 32 },
    { country: "US", launches: 23 },
    { country: "China", launches: 16 },
    { country: "Europe", launches: 7 },
    { country: "India", launches: 4 },
    { country: "Japan", launches: 3 }
]

const totalLaunches = rockets.reduce( (prevVal, elem) => prevVal + elem.launches, 0)
console.log("Total de lançamentos: " + totalLaunches);
//NOTE - Explicação da linha 16: const totalLaunches = rockets.reduce- aqui é determinação do method ( (prevVal - valor anterior, elem-valor do numero de launches) => prevVal + elem.launches, 0) -Aqui ele faz a soma de ambos, e define o valor elem.launches e o valor 0 como a soma inicial.
// #endregion
console.log("-----------");
// #region numeros
const numeros = [
    2,3,5
]

//primeira => 6+2 =8 
//segunda => 3+5 = 11
//terceira => 11+5 = 16


const funcao1 = function(acumulador, atual, index, array ){
    console.log("i: " + index);
    console.log("ac: " + acumulador);
    console.log("a: " + atual);
    console.log("---------");
    return acumulador + atual;
}

const resultado = numeros.reduce(funcao1, 6)
console.log(resultado);
// #endregion

// #region Tem promoção?
const produtos = [
    {nome: "Notebook", promocao: true},
    {nome: "iPad", promocao: false}
]

const produtosPromocao = produtos.map(
    produto => produto.promocao
)

const funcao = function(acumulador,atual){
    return acumulador || atual;
}
const novo = produtosPromocao.reduce(funcao)
if(novo) console.log("Tem promocao");
// #endregion

// #region Lista <li>
const lista = [
    "Jamilton", "Ana", "Pedro"
]

const funcao2 = (acumulado,atual) => acumulado += `<li>${atual}</li>`

let listaHtml = lista.reduce( funcao2, "" )

console.log(listaHtml);
// #endregion