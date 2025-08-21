function produto (nome, preco) { 
this.nome = nome; 
this.preco = preco;
}

produto.prototype.aumento = function (quantia) {
this.preco += quantia; 
}; 
produto.prototype.desconto = function (quantia) { 
this.preco -=quantia; 
}; 
function camiseta (nome, preco, cor) { 
produto.call(this, nome, preco);

}
const camiseta1 = new camiseta ('regata', 180, 'preta')
console.log(camiseta1)