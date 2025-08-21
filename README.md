JS treinos
# JS Treinos 🚀

Aqui eu treino **JavaScript** e depois vou migrar para **TypeScript**.  
A ideia é praticar lógica, funções, manipulação de arrays, objetos e depois tipar tudo com TS.

---

## Exemplo em JavaScript

```js
// Função para gerar números aleatórios e filtrar apenas os pares
function gerarNumerosPares(qtd) {
  const numeros = Array.from({ length: qtd }, () => Math.floor(Math.random() * 100));
  return numeros.filter(n => n % 2 === 0);
}

console.log("Números pares:", gerarNumerosPares(10));
