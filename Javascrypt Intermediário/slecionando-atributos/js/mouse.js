function executar(){
    console.log("Executar");
}

const obj = document.getElementById("botao");
//obj.addEventListener("click", executar); //NOTE - Quando pressiona e solta o botão, executa a função
//obj.addEventListener("dblclick", executar); //NOTE - Double Click executa a função
//obj.addEventListener("mousedown", executar); //NOTE - Aqui executa a função quando o mouse é cliclado ou pressionado
//obj.addEventListener("mouseup", executar); //NOTE - Solta o botão do mouse sobre um elemento
//obj.addEventListener("mousemove", executar); //NOTE - Quando o mouse é movido, executa a função
//obj.addEventListener("mouseover", executar); //NOTE - Move o mouse sobre um elemento
obj.addEventListener("mouseout", executar); //NOTE - MOve o mouse para fora do elemento