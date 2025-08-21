function pessoas (nome, sobrenome) {
    this.nome = nome; 
    this.sobrenome = sobrenome;
    this.nomecompleto = () => this.nome + '' + this.sobrenome
}

const pessoa1 = new pessoa ('Miguel', 'Silva') // <- pessoa = função construtora
const data = new Date (); //date = função construtora

console.dir(pessoa1);
console.dir(data);