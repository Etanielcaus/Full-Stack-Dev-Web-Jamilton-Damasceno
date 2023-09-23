/*Em JavaScript, a concatenação é o processo de juntar duas ou mais strings para formar uma nova string. Isso pode ser feito usando o operador de adição (+) ou o método concat(). O operador de adição é mais comumente usado para concatenar strings, onde a segunda string é simplesmente adicionada ao final da primeira string. Por exemplo:

```javascript
var string1 = "Olá";
var string2 = "mundo!";
var resultado = string1 + " " + string2; // Resultado: "Olá mundo!"
```

O método concat() também é usado para concatenar strings, mas permite concatenar mais de duas strings de uma vez. Ele retorna uma nova string que é uma combinação de todas as strings fornecidas. Por exemplo:

```javascript
var string1 = "Hello";
var string2 = "world";
var string3 = "!";
var resultado = string1.concat(" ", string2, string3); // Resultado: "Hello world!"
```

Além disso, é importante lembrar que em JavaScript, as strings são imutáveis, o que significa que uma vez que uma string é criada, ela não pode ser alterada. Portanto, a concatenação de strings cria uma nova string em vez de modificar as strings originais. */


const nome = "Jamilton"
const numero = 2

console.log( "Bem vindo " + nome)

const texto = `Bem 
vindo ${nome} você tem ${numero}` //Aqui se utiliza uma crase, o ${ } permite que você utilize a variavel dentro da linha de código, aqui também é permitido a quebra de texto.
console.log( texto )


var string1 = "Olá";
var string2 = "mundo!";
var resultado = string1 + " " + string2; // Resultado: "Olá mundo!"
console.log(resultado)

var string1 = "Hello";
var string2 = "world";
var string3 = "!";
var resultado = string1.concat(" ", string2, string3); // Resultado: "Hello world!"