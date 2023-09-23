//!Funções nativas - Manipulação de datas
// Obtendo a data atual
const dataAtual = new Date();
console.log(dataAtual);

//Converter data para string
const dataString = dataAtual.toString();
console.log(dataString);

// Obtendo o ano atual
const anoAtual = dataAtual.getFullYear();
console.log("Estamos no ano " + anoAtual);

// Obtendo o mês atual (0-11, onde 0 é janeiro)
const mesAtual = dataAtual.getMonth() + 1;
console.log("Estamos no mes " + mesAtual);

// Obtendo o dia do mês atual (1-31)
const diaAtual = dataAtual.getDate();
console.log("Hoje é dia " + diaAtual);

// Obtendo o dia da semana atual (0-6, onde 0 é domingo)
const diaSemanaAtual = dataAtual.getDay();
console.log("Hoje é: " + diaSemanaAtual);

// Obtendo a hora atual (0-23)
const horaAtual = dataAtual.getHours();
console.log("A hora atual é: " + horaAtual);

// Obtendo os minutos atuais (0-59)
const minutosAtuais = dataAtual.getMinutes();
console.log("O minuto atual é: " + minutosAtuais);

// Obtendo os segundos atuais (0-59)
const segundosAtuais = dataAtual.getSeconds();
console.log("O segundo atual é: " + segundosAtuais);

// Criando uma nova data com valores específicos
const dataEspecifica = new Date(2023, 6, 1);
console.log(dataEspecifica);

// Formatando a data em uma string específica
const dataFormatada = dataAtual.toLocaleDateString('pt-BR');
console.log(dataFormatada);

// Adicionando ou subtraindo dias de uma data
const dataModificada = new Date();
dataModificada.setDate(dataModificada.getDate() + 7);
console.log("Data modificada: " + dataModificada);

// Calculando a diferença em milissegundos entre duas datas
const data1 = new Date('2023-01-01');
const data2 = new Date('2023-12-31');
const diferencaEmMilissegundos = data2 - data1;
console.log(diferencaEmMilissegundos);

//NOTE - puxando as datas par apresentação da data atual
console.log(`data: ${diaAtual}/${mesAtual}/${anoAtual}`);

//NOTE - puxando a hora especificada
console.log(`hora: ${horaAtual}:${minutosAtuais}:${segundosAtuais}`);

