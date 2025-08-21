// factory funtions // constructor 

function pessoa (nome, sobrenome, idade, genero) { 
this.nome = nome; 
this.sobrenome = sobrenome; 
this.idade = idade; 
this.genero = genero;

}

const p1 = new pessoa ('Miguel', 'Silva', '19', 'Masculino');
Object.freeze(p1)

console.log (p1);



function localização (local, hora, dia,) {

this.local = local; 
this.hora = hora;
this.dia = dia; 
}

const lc = new localização ('Paulista', '16:50', '21/08/2025')

console.log (lc)

// {} <- this 