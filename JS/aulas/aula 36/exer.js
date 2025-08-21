const pessoas = [
    { nome: 'luiz', idade: 65},
    { nome: 'miguel', idade: 19},   
    { nome: 'eduardo', idade: 23}, 
    {nome : 'leticia', idade: 45}, 
    {nome: 'rosana', idade: 55},
    ];
    //const nomes = pessoas.map (function(obj) 
    const idades = pessoas.map (function (obj) {
delete obj.nome
return obj; 
    });
    console.log (idades);