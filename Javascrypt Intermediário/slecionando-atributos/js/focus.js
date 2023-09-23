function executar(){
    console.log("Executar");
}

const obj = document.getElementById("entrada"); 
//obj.addEventListener("focus", executar); //NOTE - O elemento ganha o foco
obj.addEventListener("blur", executar); //NOTE - O elemento perde o foco