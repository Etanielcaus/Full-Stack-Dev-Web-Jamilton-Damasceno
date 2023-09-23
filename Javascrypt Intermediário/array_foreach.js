//!For each method
const lista = ["Jamilton", "Michael", "Jordan", "Ana", "Mary", "Jessica"];

/*for(indice in lista) {
    console.log(lista[indice]);
}*/

const percorrer = function(item,i,arr) { //NOTE - currentValue, index, arr
    console.log(item);
}

lista.forEach(item => percorrer(item));