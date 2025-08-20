/*
function funcao () { 
let total = 0;
for (let argumentos of arguments) {
total += argumentos;
}
console.log(total)
}
funcao ( 1, 2, 3,); 
*/
//argument sustenta todos os argumentos enviados 
/*
function funcao({nome, sobreNome, idade}) {
console.log (nome, sobreNome, idade ); 
}
let obj = {nome: 'Miguel', sobreNome: 'Silva', idade: 19}
funcao (obj); */

function conta(operador, acumula, ...numeros) {
for (let numero of numeros) {
    if (operador === '+') {
        setTimeout(() => {
            acumula += numero;
            console.log(`Soma: ${acumula} (adicionou ${numero})`);
        }, 1000);
    }
    if (operador === '-') {
        setTimeout(() => {
            acumula -= numero;
            console.log(`Subtração: ${acumula} (subtraiu ${numero})`);
        }, 2000);
    }
    if (operador === '/') {
        setTimeout(() => {
            acumula /= numero;
            console.log(`Divisão: ${acumula} (dividiu por ${numero})`);
        }, 3000);
    }
    if (operador === '*') {
        setTimeout(() => {
            acumula *= numero;
            console.log(`Multiplicação: ${acumula} (multiplicou por ${numero})`);
        }, 4000);
    }
}
setTimeout(() => {
    console.log(`Resultado final: ${acumula}`);
}, 5000);
}
conta('*', 5, 20, 30, 40, 50)