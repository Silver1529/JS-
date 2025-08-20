function retornaFuncao (){
const nome = 'miigs'
return function (){
    return nome;
};
}

const funcao = retornaFuncao (); 
console.log (funcao); 

//habilidade que a função tem de acessar seu escopo 