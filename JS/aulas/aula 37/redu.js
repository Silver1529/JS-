// reduce mais utilizado para reduzir a lista 
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27] 
const total = numeros.reduce (function (acumulador, valor, indice, array  ){
 acumulador = acumulador + valor;
return acumulador; 
}, []); 
console.log (total)