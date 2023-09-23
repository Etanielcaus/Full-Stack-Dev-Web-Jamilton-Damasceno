//NOTE -  Adicionando elementos ao final do array
const array1 = [1, 2, 3, 4, 5, 6];
array1.push(4);
console.log(array1); // [1, 2, 3, 4]

//NOTE - Adicionando elementos no início do array
const array3 = [2, 3, 4];
array3.unshift(1);
console.log(array3); // [1, 2, 3, 4]

 //NOTE - Removendo o último elemento do array
const array2 = [1, 2, 3, 4];
array2.pop();
console.log(array2); // [1, 2, 3]

 //NOTE - Removendo o primeiro elemento do array
const array4 = [1, 2, 3, 4];
array4.shift();
console.log(array4); // [2, 3, 4]

//NOTE - Retorna um novo array
const novoArray1 = array1.splice(0, 3, 'a', 'b'); //emendar
console.log("teste 111" + novoArray1); 

//NOTE - Cortar um array
const novo = array1.slice(0, 3);
console.log("Aqui " + novo);

 //NOTE - Obtendo o tamanho do array
const array5 = [1, 2, 3, 4];
console.log(array5.length); // 4

 //NOTE - Acessando elementos do array por índice
const array6 = [1, 2, 3];
console.log(array6[0]); // 1

 //NOTE - Verificando se um elemento existe no array
const array7 = [1, 2, 3];
console.log(array7.includes(2)); // true

 //NOTE - Encontrando o índice de um elemento no array
const array8 = [1, 2, 3];
console.log(array8.indexOf(2)); // 1

 //NOTE - Iterando sobre os elementos do array
const array9 = [1, 2, 3];
array9.forEach(elemento => {
  console.log(elemento);
});

 //NOTE - Mapeando um novo array com base nos elementos existentes
const array10 = [1, 2, 3];
const novoArray = array10.map(elemento => elemento * 2);
console.log(novoArray); // [2, 4, 6]

 //NOTE - Filtrando elementos do array com base em uma condição
const array11 = [1, 2, 3, 4, 5];
const arrayFiltrado = array11.filter(elemento => elemento % 2 === 0);
console.log(arrayFiltrado); // [2, 4]

 //NOTE - Reduzindo os elementos do array a um único valor
const array12 = [1, 2, 3, 4, 5];
const resultado = array12.reduce((acumulador, elemento) => acumulador + elemento, 0);
console.log(resultado); // 15

//NOTE - Converter um array para string
const usuarios = ["Jan", "Maria", "Pedro"];
let texto = usuarios.join();
let arrayTexto = texto.split(",");
console.log(texto);
