//!Arrays

let lista = []
let lista2 = new Array()//NOTE - Aqui é algumas maneiras de criar um array

let nomes = ['João', 'Maria', 'Pedro', 'Ana']
let frutas = new Array('maçã', 'banana', 'uva')
console.log(nomes);
console.log(frutas);

let nomes2 = ['João', 'Maria', 'Pedro', 'Ana']
console.log(nomes2.push('Bia')); //NOTE - push adiciona mais um elemento ao array  
console.log(delete nomes2[2]); //NOTE - delete remove um elemento do array
console.log(nomes2[2] = "Teste"); //NOTE - Aqui ele adiciona o "Teste" ao elemento que foi removido
console.log(nomes2.sort()); //NOTE - Aqui ele ordena os elementos do array de A para Z
console.log(nomes2); //NOTE - Aqui 'Bia' já esta adicionado e o Pedro foi removido e 'Teste' foi sobrescrevido em Pedro
console.log(nomes2.length); //NOTE - Aqui ele conta a quantidade de elementos do array