function criaPessoa (nome, sobrenome){ 
  const pessoaPrototype =   {
   fala () { 
    console.log (`${this.nome}esta falando oi!`);
        },
        comer () {
        console.log (`${this.nome} esta comendo`)
    
        },
    
        beber () {
    console.log (`${this.nome} esta bebendo`)
        },
    }
    return Object.create (pessoaPrototype,{
    nome: {value: nome},
    sobrenome:{value:sobrenome}, 
    }); 
}
const p1 = criaPessoa('Miguel', 'Silva'); 