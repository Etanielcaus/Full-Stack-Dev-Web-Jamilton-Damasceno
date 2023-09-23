//!SECTION Funções Nativas - Manipulações de textos

let nome = { //NOTE - Aqui seria como escrever let nome = "Ja", ou seja, só por criar a variável, ela ja recebe atributos sem a necesidade de especificar dessa forma/ Ela ja se torna um objeto.
    texto: "ja",
    length: 2,
    charAt(){}
}

let nome2 = "carro do Jamilton"

console.log(nome2.length); //Conta a quantidade de caracteres
console.log(nome2.charAt(1)); //Conta a posição do caractere

let n = nome2.replace("Jamilton", "pedro"); //NOTE - Substitui o caractere da String substuindo o caractere Jamilton por pedro, criando uma nova variavel (n)
console.log(n);
let frase = "O sucesso é ir de fracasso em fracasso sem perder o entusiasmo"
console.log(frase.slice(5,10) + "..."); //NOTE - Aqui ele faz o fatiamento da string

console.log("-------------------------------");

let nome3 = "jamilton damasceno"
let resultado = nome3.split(" "); //NOTE - Aqui ele cria como um array de strings
console.log(resultado);

let nome4 = "jamilton"
let sobrenome = "damasceno" 
let s = sobrenome.slice(0,6) //NOTE - Aqui ele faz o fatiamento da string
console.log(nome4 + s + "@empresa.com.br");

let nome5 = "Pedro Silva"
console.log(nome5.toUpperCase());
console.log(nome5.toLowerCase());

let nome6 = "Pedro Silva   -"
salvarItem = nome6.trim();//NOTE - Aqui ele remove os espaços em branco

let a = "Olá"
let b = "Jamilton"
let c = "Damasceno"
a.concat(b).concat(c);
console.log(a.concat(" ", b, " ", c));