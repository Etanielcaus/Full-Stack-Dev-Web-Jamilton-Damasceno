/*
O loop é uma estrutura fundamental em JavaScript que permite executar um bloco de código repetidamente com base em uma condição específica. Existem várias formas de loops em JavaScript, sendo as mais comuns o loop "for", o loop "while" e o loop "do-while".

O loop "for" é frequentemente utilizado quando o número de iterações é conhecido ou quando é necessário percorrer uma coleção de elementos. Ele consiste em três partes: a inicialização, a condição de continuação e a atualização. Por exemplo:

```javascript
for (let i = 0; i < 5; i++) {
  console.log(i); // Imprime os números de 0 a 4
}
```

O loop "while" é usado quando a condição de continuação é verificada antes da execução do bloco de código. Ele continuará executando o bloco enquanto a condição for verdadeira. Por exemplo:

```javascript
let i = 0;
while (i < 5) {
  console.log(i); // Imprime os números de 0 a 4
  i++;
}
```

O loop "do-while" é semelhante ao "while", mas a condição é verificada após a execução do bloco de código, garantindo que o bloco seja executado pelo menos uma vez. Por exemplo:

```javascript
let i = 0;
do {
  console.log(i); // Imprime os números de 0 a 4
  i++;
} while (i < 5);
```

Os loops são amplamente utilizados em situações em que é necessário iterar sobre uma lista de itens, processar arrays, realizar cálculos repetitivos, ler dados de entrada e muito mais. Eles permitem automatizar tarefas repetitivas e controlar o fluxo de execução do código com base em condições específicas.

É importante ter cuidado ao usar loops para evitar loops infinitos, garantir que a condição de término seja alcançada e evitar iterações desnecessárias para otimizar o desempenho do código. */


//Exemplo de uma pizza
let numero = 1
while( numero <= 4 ){
    console.log("comeu pedaço pizza " + numero)
    numero = numero + 1
}

/* -------------------------- */

//Simular uma lista de postagens
let postagens = [
    "Non consequat dolore do sit ex ullamco consectetur elit mollit.",
    "Amet tempor labore exercitation laboris.",
    "Ex ex mollit commodo occaecat mollit.",
    "Ex tempor et adipisicing magna irure ea.",
    "Proident Lorem pariatur in cillum esse consequat ex culpa esse.",
    "loremUt non nostrud eiusmod irure sit in reprehenderit ullamco."
]

let numero1 = 0 //Aqui é quando sabemos o limite de postagens possui

while ( numero1 <= 5 ){
    console.log("imagem")
    console.log( postagens[numero1] )
    console.log("----")
    numero1 = numero1 + 1
}

/* -------------------------- */

let postagens2 = [
    "Non consequat dolore do sit ex ullamco consectetur elit mollit.",
    "Amet tempor labore exercitation laboris.",
    "Ex ex mollit commodo occaecat mollit.",
    "Ex tempor et adipisicing magna irure ea.",
    "Proident Lorem pariatur in cillum esse consequat ex culpa esse.",
    "loremUt non nostrud eiusmod irure sit in reprehenderit ullamco.",
    "loremUt non nostrud eiusmod irure sit in reprehenderit ullamco."
]
const totalPostagens = postagens2.length

let numero2 = 0 //Aqui é quando não sabemos o limite de postagens possui

while ( numero2 < totalPostagens ){
    console.log("imagem")
    console.log( postagens2[numero2] )
    console.log("----")
    numero2 = numero2 + 1
}
