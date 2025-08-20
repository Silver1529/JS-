//if else e else 
/*
entre 0 - 11 -> bom dia 
entre 12 - 17 -> boa tarde 
entre 18 - 23 -> boa noite 

// if pode ser usado sozinho 
// else não pode ser usado sozinho
// precisa de um if 
//posso ter varios if and else
// só pode ter um else na checagem 
//podemos usar condições apenas com if e else 
*/

const hora =13;
if (hora >= 0 && hora <= 11) {
    console.log('bom dia');

} else if (hora >= 12 && hora <= 17) {
    console.log('boa tarde');

} else if (hora >= 18 && hora <= 23) {
    console.log('boa noite');
} else {
    console.log('hora inválida');

}
    
