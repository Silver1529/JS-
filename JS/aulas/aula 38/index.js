// Exemplo 1: numeros -> filtra (>10) -> mapeia (dobra) -> reduz (soma)
const numeros = [5, 50, 80, 1, 2, 3, 5, 7, 11, 8, 15, 22, 27];

const somaDobrosMaioresQue10 = numeros
  .filter((valor) => valor > 10)
  .map((valor) => valor * 2)
  .reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);

console.log('Soma dos números dobrados maiores que 10:', somaDobrosMaioresQue10);

// Exemplo 2: pessoas -> filtra (adultas com nome iniciando em "a")
//          -> mapeia (pega o tamanho do nome)
//          -> reduz (soma total de letras)
const pessoas = [
  { nome: 'Ana', idade: 17 },
  { nome: 'Carlos', idade: 22 },
  { nome: 'Amanda', idade: 30 },
  { nome: 'Bruno', idade: 16 },
  { nome: 'Alice', idade: 25 }
];

const totalLetrasNomesAdultasComA = pessoas
  .filter((pessoa) => pessoa.idade >= 18 && pessoa.nome.toLowerCase().startsWith('a'))
  .map((pessoa) => pessoa.nome.length)
  .reduce((acumulador, tamanhoNome) => acumulador + tamanhoNome, 0);

console.log('Total de letras dos nomes (adultas com A):', totalLetrasNomesAdultasComA);


