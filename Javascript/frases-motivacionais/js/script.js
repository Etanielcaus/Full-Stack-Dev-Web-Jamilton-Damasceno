function novaFrase(){
    
    const frases = [
        "frase1", "frase2", "frase3", "frase4", "frase5", "frase6", "frase7", "frase8", "frase9", "frase10"
    ]
    
    const numeroAleatorio = Math.floor(Math.random() * 10)
    const frase = frases [numeroAleatorio]

    document.getElementById('frase').innerHTML = frase

}