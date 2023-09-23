function caclularMelhorPreco(){

    //validar campos
    let precoAlcool = document.getElementById('alcool').value
    let precoGasolina = document.getElementById('gasolina').value

    if ( precoAlcool != "" ){
      if( precoGasolina != "" ){

        /*Calcular se é melhor usar alcool ou gasolina
         * se valorAlcool / valorGasolina >= 0.7 é melhor
         utilizar gasolina
         * senão é melhor utilizar álcool
        */
        
        let resultado = precoAlcool / precoGasolina
        if( resultado >= 0.7 ){
          //alert("Melhor utilizar gasolina")
          document.getElementById('resultado').innerHTML = "Melhor utilizar gasolina"
        }else{
          //alert("Melhor utilizar alcool")
          document.getElementById('resultado').innerHTML = "Melhor utilizar alcool"
        }

        

      }else{
        alert("Preencha o preço da gasolina")
      }
      }else{
      alert("Preencha o preço do alcool")
    }
    
  }