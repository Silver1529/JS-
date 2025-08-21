// factory funtions // constructor 

function pessoa (nome, sobrenome, idade, genero) { 
this.nome = nome; 
this.sobrenome = sobrenome; 
this.idade = idade; 
this.genero = genero;

}

const p1 = new pessoa ('Miguel', 'Silva', '19', 'Masculino');

console.log (p1);


// {} <- this 