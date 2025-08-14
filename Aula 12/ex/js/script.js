const numero = Number(prompt('Digite um número:'));
const numerotitulo = document.getElementById('numero-titulo');
const divo = document.getElementById('texto');

numerotitulo.innerHTML = numero;

divo.innerHTML = ''; // limpa antes

divo.innerHTML += `<p>Raiz quadrada: ${Math.sqrt(numero)}</p>`;
divo.innerHTML += `<p>O número ${numero} é inteiro: ${Number.isInteger(numero)}</p>`;
divo.innerHTML += `<p>O número ${numero} é NaN: ${Number.isNaN(numero)}</p>`;
divo.innerHTML += `<p>Arredondando para baixo: ${Math.floor(numero)}</p>`;
divo.innerHTML += `<p>Arredondado para cima: ${Math.ceil(numero)}</p>`;
divo.innerHTML += `<p>Com duas casas decimais: ${numero.toFixed(2)}</p>`;


