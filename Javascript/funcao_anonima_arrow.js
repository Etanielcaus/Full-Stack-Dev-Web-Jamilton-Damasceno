//Uma função anônima em JavaScript é uma função que não possui um nome associado a ela. Ela também é conhecida como função sem nome ou função inline. Em vez de declarar uma função com um nome, você pode definir uma função diretamente em um local onde ela é necessária.

//A sintaxe básica de uma função anônima em JavaScript é a seguinte:


var minhaFuncao = function() {
  // corpo da função
};


//Nesse exemplo, `minhaFuncao` é uma variável que armazena uma função anônima. Você pode usar essa variável para chamar a função mais tarde. Por exemplo:


minhaFuncao();


//Funções anônimas também podem ter parâmetros, assim como as funções nomeadas. Você pode passar argumentos para a função quando a chama. Por exemplo:


var saudacao = function(nome) {
  console.log("Olá, " + nome + "!");
};

saudacao("João"); // Output: Olá, João!


//As funções anônimas são comumente usadas como callbacks em JavaScript, onde são passadas como argumentos para outras funções e executadas posteriormente. Elas também são úteis para criar closures e expressões de função mais concisas.

//É importante notar que, apesar de serem úteis, as funções anônimas podem dificultar a depuração do código, pois não têm um nome para referência durante a análise de erros ou rastreamento. Portanto, é recomendável usar funções nomeadas sempre que possível, a menos que a situação exija o uso de uma função anônima.


//+ Função literal
function somar(d,c){
    console.log(d+c)
}
somar(1,4)

// Função anonima (sem nome)
const somar2 = function(a,b){
    console.log(a+b)
}
somar2(1,2)

//Função arrow (seta)
const somar3 = (e,f) => {
    console.log(e+f)
}
somar3(1,2)

//Função arrow (retorno implícito)
const somar4 = (g,h) => console.log(g+h)
const exibir = n => console.log("nome: " + n)
exibir("Jamilton")