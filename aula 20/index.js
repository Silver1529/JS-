//avaliação de curto circuito
/*
&& -> false && true
|| -> true || false -> vai retornar o valor "verdadeiro"
valores falsos 
*false 
0
"" , '' e  ``
null/ undefined
NAN 
*/
// console.log ('luiz otavio' && NaN && "maria")

/*function falaoi () {
    return 'oi' ; 
}
let vaiEscutar ='Miguel';

console.log(vaiEscutar && falaoi());
*/

const corUsuario = null;
const corPadrao = corUsuario || "preto";

console.log(corPadrao);
