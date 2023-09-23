//!Prototype

//Em JavaScript, o `prototype` é um conceito fundamental que está relacionado aos objetos e à herança. Cada objeto em JavaScript tem uma propriedade interna chamada `prototype` que aponta para outro objeto.

//O `prototype` é usado para estabelecer a herança entre objetos. Quando você cria um objeto a partir de uma função construtora ou usando a sintaxe de literal de objeto, o objeto recém-criado herda automaticamente as propriedades e métodos do `prototype` do objeto pai.

//A propriedade `prototype` é uma referência ao objeto que será usado como protótipo para criar novas instâncias. Ela permite que você adicione propriedades e métodos ao protótipo, que estarão disponíveis para todas as instâncias criadas a partir desse protótipo.

//Você pode acessar a propriedade `prototype` de uma função usando `NomeDaFuncao.prototype` e adicionar propriedades ou métodos a ela. Por exemplo:


function Pessoa(nome) {
  this.nome = nome;
}

Pessoa.prototype.dizerOla = function() {
  console.log("Olá, meu nome é " + this.nome);
};

var pessoa1 = new Pessoa("João");
pessoa1.dizerOla(); // Saída: Olá, meu nome é João


//Nesse exemplo, a função construtora `Pessoa` possui uma propriedade `prototype` que foi modificada para adicionar o método `dizerOla()`. Todas as instâncias criadas a partir dessa função construtora terão acesso a esse método.

//O uso do `prototype` é importante para economizar memória, pois as propriedades e métodos compartilhados são armazenados apenas uma vez no objeto `prototype`, em vez de serem duplicados em cada instância.

//Em resumo, o `prototype` em JavaScript é uma propriedade que permite estabelecer a herança entre objetos, compartilhar propriedades e métodos entre instâncias e economizar memória.


//SECTION - Descendetes de Object

//Isso comprova que mesmo vazio, o mesmo possui alguns métodos não declarados em obj.

Object.prototype
const obj = {

}

console.log(obj.toString()); //Resultado: [object Object]
console.log(obj.__proto__ == Object.prototype); //Resultado: true


//SECTION - Prototype

class Carro {
    constructor() {
            this.placa = "AMP-1230";
        }
}

class Bmw extends Carro {
    constructor() {
                super();
                this.nome = "BMW 320i"
            }
}

const objBmw = new Bmw();
console.log(objBmw.placa); //Resultado: AMP-1230
console.log(objBmw.nome); //Resultado: BMW 320i

//SECTION - Prototype Chain - encadeamento de objetos

const veiculo = {
    motor: "50 cavalos"
}

const carro = {
    placa: "AWP-3210",
    __proto__: veiculo, //NOTE - Aqui ele vai criar uma relação de herança entre o objeto carro e o objeto veiculo
    acelerar() {
        console.log("Acelerando");
    }
}

const bmw = {
    nome: "BMW 320i",
    __proto__: carro //NOTE - Aqui ele vai criar uma relação de herança entre o objeto carro e o objeto bmw
}

console.log(bmw.placa); //Resultado: AWP-3210
console.log(bmw.motor); //Resultado: "50 cavalos"
carro.acelerar(); //Resultado: Acelerando
bmw.acelerar(); //Resultado: Acelerando
