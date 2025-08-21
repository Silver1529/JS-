//filter -> retorna um array  com a mesma quantidade de elementos ou menos 
/*
const numeros = [5, 20, 30, 40, 58, 70]
const numerosFiltrados = numeros.filter(valor => valor > 10)

console.log(numerosFiltrados)
*/

const pessoas = [
{ nome: 'luiz', idade: 65},
{ nome: 'miguel', idade: 19},   
{ nome: 'eduardo', idade: 23}, 
{nome : 'leticia', idade: 45}, 
{nome: 'rosana', idade: 55},
];
const pessoas5 = pessoas.filter (obj => obj.nome.length >= 7);
console.log(pessoas5)

const idade50m = pessoas.filter (obj => obj.idade >=20); 

console.log(idade50m)

const nomeA = pessoas.filter(obj => obj.nome.toLowerCase().endsWith('a'));