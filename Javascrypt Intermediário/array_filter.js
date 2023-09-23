//!Filter Method
// #region Usuarios maior de idade
const usuarios = [
    {nome: 'Diego', idade: 25},
    {nome: 'Ana', idade: 16},
    {nome: 'Maria', idade: 17}
]
const funcao = function(item, index, array){
    //console.log(this.filtro);
    /*if( item.idade >= 18 ){
        return true
    }else{
        return false
    }*/
    return item.idade >= this.filtro
} 

const filtro = {
    filtro: 20
}
const usuariosMaiorIdade = usuarios.filter(funcao, filtro)
//console.log(usuariosMaiorIdade);

// #endregion

// #region Filtrar Carros Hyundai
const carros = [
    {nome: 'Gol', marca: "volkswagem"},
    {nome: 'iX35', marca: "hyundai"},
    {nome: 'Santa Fé', marca: "hyundai"},
    {nome: 'Polo', marca: "volkswagem"}
]

const funcaoFiltrar = function(item, index, array){
    return item.marca == this.marca
}


const filtro1 = {
    marca: "hyundai"
}

const filtrarHyundai = carros.filter(funcaoFiltrar,filtro1)
console.log(filtrarHyundai);
// #endregion


