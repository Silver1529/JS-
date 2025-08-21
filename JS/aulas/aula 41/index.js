function produto (nome, preço, estoque ) { 
this.nome = nome; 
this.preço = preço;

Object.defineProperty(this, 'estoque', {
enumerable: true, // mostra a chave 
value:estoque, // valor 
writable: false, // pode alterar 
configurable: false, // configuravel
});
}

const p1 = new produto ('laranja', 2.5, 300);
console.log (p1);