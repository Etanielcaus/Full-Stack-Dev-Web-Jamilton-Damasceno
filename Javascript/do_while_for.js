/* O "do-while" e o "for" são duas estruturas de loop usadas em JavaScript para executar um bloco de código repetidamente com base em uma condição específica.

O "do-while" é uma estrutura de loop na qual o bloco de código é executado primeiro e, em seguida, a condição é verificada. Se a condição for verdadeira, o bloco de código será executado novamente e o processo se repetirá até que a condição seja falsa. O "do-while" garante que o bloco de código seja executado pelo menos uma vez, mesmo se a condição inicialmente for falsa. A estrutura do "do-while" é a seguinte:

```javascript
do {
  // Bloco de código a ser executado
} while (condição);
```

Por exemplo:

```javascript
let i = 0;
do {
  console.log(i);
  i++;
} while (i < 5);
```

O "for" é outra estrutura de loop que é amplamente utilizada em JavaScript. Ele consiste em três partes: inicialização, condição de continuação e atualização. A inicialização é executada uma vez antes do início do loop. A condição de continuação é verificada a cada iteração do loop e, se for verdadeira, o bloco de código é executado. A atualização é executada após cada iteração do loop. A estrutura do "for" é a seguinte:

```javascript
for (inicialização; condição; atualização) {
  // Bloco de código a ser executado
}
```

Por exemplo:

```javascript
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

O "for" é frequentemente utilizado quando o número de iterações é conhecido ou quando é necessário percorrer uma coleção de elementos, como um array. Ele oferece uma sintaxe concisa e fácil de entender para a execução de loops.

Em resumo, o "do-while" é útil quando você precisa garantir que o bloco de código seja executado pelo menos uma vez, enquanto o "for" é comumente usado quando o número de iterações é conhecido ou quando é necessário percorrer uma coleção de elementos. Ambas as estruturas de loop desempenham um papel importante em JavaScript, fornecendo controle sobre a repetição de um bloco de código com base em condições específicas. */



//While
let numero = 1
while( numero <= 5){
    //console.log("Executou " + numero)
    //numero = numero + 1
    numero++ //aqui é a mesma estrutura que em cima 
}

//do...while {Ele faz uma primeira execução e depois verifica se a condição é verdadeira}
let numero2 = 0
do{
    //console.log("Executou " + numero2)
    //numero = numero + 1
    numero2-- //aqui é a mesma estrutura que em cima 
}while( numero2 >= 5)

//for
for( let numero3 = 1; numero3 <= 5; numero3++ ){
    console.log("Executor " + numero3)
}

let postagens2 = [
    "Non consequat dolore do sit ex ullamco consectetur elit mollit.",
    "Amet tempor labore exercitation laboris.",
    "Ex ex mollit commodo occaecat mollit.",
    "Ex tempor et adipisicing magna irure ea.",
    "Proident Lorem pariatur in cillum esse consequat ex culpa esse.",
    "loremUt non nostrud eiusmod irure sit in reprehenderit ullamco.",
    "loremUt non nostrud eiusmod irure sit in reprehenderit ullamco234235."
]

for( indice in postagens2 ){
    console.log(postagens2[indice])
}