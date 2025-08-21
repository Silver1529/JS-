function produto (nome, preço, estoque ) { 
    this.nome = nome; 
    this.preço = preço;
    
    Object.defineProperty(this, 'estoque', {
    enumerable: true, // mostra a chave 
    configurable: false, // configuravel
    get: function () { 
return estoque ;
    },
set: function (valor){
    console.log (valor);
    if (typeof valor !== 'number') {
    
    console.log ('bad value')
        return;
    };


}
    });
 }
    
    const p1 = new produto ('laranja', 2.5, 300);
    //console.log (p1);