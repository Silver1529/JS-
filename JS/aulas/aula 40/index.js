
const pessoa1 = new Object (); 
pessoa1.nome = 'Miguel'; 
pessoa1.sobreNome = 'Silva'; 
pessoa1.idade = 19;
pessoa1.falarNome = function () {
    return (`${this.nome} esta falando seu nome`)
};
pessoa1.getdatanascimento  = function () {

const dataatual = new Date ();
return dataatual.getFullYear () - this.idade

}

for (chaves in pessoa1)
console.log(pessoa1)












/*
const pessoa2 = new Object (); 
pessoa2.nome = 'Giovana'; 
pessoa2.sobreNome = 'Justo'; */

// console.log (pessoa1, pessoa2)