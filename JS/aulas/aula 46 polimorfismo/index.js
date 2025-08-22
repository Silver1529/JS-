function conta (agencia, conta, saldo) {
this.agencia = agencia;
this.conta = conta; 
this.saldo = saldo
}
conta.prototype.sacar = function (valor) {
    if(this.saldo < valor) {
        this.versaldo(); 
        return; 
     }
this.saldo -= valor;
};
conta.prototype.depositar = function (valor) {
    this.saldo += valor;
    this.versaldo
};
conta.prototype.versaldo = function (valor) {
    console.log(this.versaldo)
};
const conta1 = new conta(11, 22,10)
console.log(conta1)
conta1.depositar(111)