/* Funções
1) Desligar a torneira;
2) Pedir copo de água;
3) Ir ao mercado comprar arroz;
*/

//Ir ao mercado comprar arroz
function irMercadoComprarArroz(dinheiro){
    console.log("Pegar transporte")
    console.log("Procurar o arroz")
    
    return "arroz"
  }
  
  let retorno2 = irMercadoComprarArroz (10)
  console.log(retorno2)
  
  //Calcular Méida
  function calcularMedia( nota1, nota2 ){
    
    let totalNotas = nota1 + nota2
    let media = totalNotas / 2
    
    return media
    
  }
  
  let media = calcularMedia( 8,7 )
  console.log(media)