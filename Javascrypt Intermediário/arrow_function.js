//!Arrow Function
//NOTE - As arrow functions (funções de seta) são uma sintaxe alternativa para definir funções em JavaScript. Elas são mais concisas e possuem algumas diferenças de comportamento em relação às funções regulares. Aqui está uma breve descrição e exemplos de arrow functions em JavaScript:

//1. Sintaxe:
   //- Uma arrow function é definida usando a sintaxe `() => {}`, onde `()` representa os parâmetros da função (opcional, se a função não tiver parâmetros) e `{}` é o corpo da função.
   //- Se a função tiver apenas um parâmetro, os parênteses em volta do parâmetro podem ser omitidos.
   //- Se o corpo da função tiver apenas uma expressão, as chaves `{}` podem ser omitidas e o valor da expressão será retornado automaticamente.

//2. Exemplos:
   //- Exemplo 1: Arrow function sem parâmetros:
    
     const saudacao = () => {
       console.log("Olá!");
     };

     saudacao(); // Output: Olá!
    

   //- Exemplo 2: Arrow function com um parâmetro:
    
     const dobrar = (numero) => {
       return numero * 2;
     };

     console.log(dobrar(5)); // Output: 10
    

   //- Exemplo 3: Arrow function com apenas uma expressão:
    
     const quadrado = (numero) => numero * numero;

     console.log(quadrado(3)); // Output: 9
     

   //- Exemplo 4: Arrow function como argumento de outra função:
    
     const numeros = [1, 2, 3, 4, 5];

     const aoQuadrado = numeros.map((numero) => numero * numero);

     console.log(aoQuadrado); // Output: [1, 4, 9, 16, 25]
     

//As arrow functions são úteis quando você precisa de uma função mais concisa e simples, especialmente ao trabalhar com funções de ordem superior, como `map()`, `filter()`, `reduce()`, entre outras. Elas ajudam a melhorar a legibilidade e a escrita de código mais limpo.

//Espero que esses exemplos tenham ajudado a entender as arrow functions em JavaScript. Se você tiver mais dúvidas, fique à vontade para perguntar!