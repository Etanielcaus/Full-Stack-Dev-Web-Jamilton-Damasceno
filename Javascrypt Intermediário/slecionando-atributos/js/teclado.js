function executar(){
    console.log("Executar");
}

const obj = document.getElementById('entrada');
//obj.addEventListener('keydown', executar); //NOTE - Aqui se permanecer executo qualquer tecla, ele vai executar a função executar
//obj.addEventListener('keyup', executar); //NOTE - Usuário solta uma tecla, ele vai executar a função executar
obj.addEventListener('keypress', executar); //NOTE - Caracteres estão sendo inseridos, ele vai executar a função executar