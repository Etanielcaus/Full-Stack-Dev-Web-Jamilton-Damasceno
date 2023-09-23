//!Array - Map 
//NOTE - Em JavaScript, o método map() é usado para criar um novo array com base em um array existente, aplicando uma função a cada elemento do array original. Ele retorna um novo array com os resultados das chamadas de função.
// #region Pessoas
const pessoas = [
    "Jamilton", "Ana", "Maria"
]


let funcao = (item, index, array) => {
    return {nome: item} //NOTE - Ele faz uma transformação nesses dados.
}

const novoArray = pessoas.map(funcao)
console.log(novoArray);
// #endregion

// #region Produtos
// 1 dólar = 3 reais
const produtosDolar = [
    { produto: "Notebook", preco: 1200, moeda: "USD" },
    { produto: "Celular", preco: 800, moeda: "USD" }
];

let conversao = (produto) => {
    return { produto: produto.produto, preco: produto.preco * 3, moeda: "BRL" };
};

const conversoes = produtosDolar.map(conversao);
console.log(conversoes);

// #endregion

