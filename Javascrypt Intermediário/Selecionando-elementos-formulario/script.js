

//const obj = document.getElementsByName('cadastro') //NOTE - Aqui ele capturou o formulario (form)
//console.log(obj[0]);
//NOTE - [0],[1] seleciona o elemento especifico

//console.log(document.forms[1]);
//console.log(document.cadastro.sexo);//NOTE - Aqui ele puxa (document.Name)
//document.cadastro.nome.value = "Jamilton" //NOTE - Aqui ele aparece o valor do input dentro do value do input nome
//document.cadastro.sexo.value = "masculino" //NOTE - Aqui ele aparece o valor do input dentro do value (seria o mesmo que escrever o value dentro do html, porém aqui é possivel adicionar mais funcionalidades)
/*
// #region Forma de fazer o desafio da aula com addEventListener
const meuBotao = document.getElementsByName('meuBotao')[0];

meuBotao.addEventListener('click', () => {
    document.cadastro.nome.value = "Jamilton"
    document.cadastro.email.value = "hzdkv@example.com"
});
// #endregion
*/

/*
// #region Outra maneira de fazer o desafio
function salvar() {
    document.cadastro.nome.value = "Jamilton"
    document.cadastro.email.value = "hzdkv@example.com"
    document.cadastro.sexo.value = "masculino"
}
// #endregion
*/

// #region Recuperar as informações do formulario
function salvar() {
    //let nome = document.cadastro.nome.value
    //let email = document.cadastro.email.value
    //let sexo = document.cadastro.sexo.value
    //console.log(nome);
    //console.log(email);
    //console.log(sexo);
    const obj = document.getElementsById('nome')
    console.log(obj.value);
}
// #endregion