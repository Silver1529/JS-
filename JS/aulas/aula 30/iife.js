// IIFE - Immediately Invoked Function Expression
// Função que é executada imediatamente após ser definida

// Exemplo 1: IIFE básico
(function() {
    console.log('IIFE básico executado!');
})();

// Exemplo 2: IIFE com parâmetros
(function(nome, idade) {
    console.log(`Olá ${nome}, você tem ${idade} anos!`);
})('Miguel', 19);

// Exemplo 3: IIFE que retorna valor
const resultado = (function(a, b) {
    return a + b;
})(10, 20);
console.log('Resultado da soma:', resultado);

// Exemplo 4: IIFE com variáveis privadas
const calculadora = (function() {
    // Variáveis privadas (não acessíveis de fora)
    let contador = 0;
    
    // Métodos públicos (retornados pelo objeto)
    return {
        incrementar: function() {
            contador++;
            console.log('Contador:', contador);
        },
        decrementar: function() {
            contador--;
            console.log('Contador:', contador);
        },
        obterValor: function() {
            return contador;
        }
    };
})();

// Usando a calculadora
calculadora.incrementar(); // Contador: 1
calculadora.incrementar(); // Contador: 2
calculadora.decrementar(); // Contador: 1
console.log('Valor atual:', calculadora.obterValor()); // Valor atual: 1

// Exemplo 5: IIFE com arrow function
(() => {
    console.log('IIFE com arrow function!');
})();

// Exemplo 6: IIFE que cria namespace
const MeuApp = (function() {
    // Variáveis privadas
    let usuarios = [];
    
    // Funções privadas
    function validarUsuario(usuario) {
        return usuario.nome && usuario.email;
    }
    
    // API pública
    return {
        adicionarUsuario: function(usuario) {
            if (validarUsuario(usuario)) {
                usuarios.push(usuario);
                console.log('Usuário adicionado:', usuario.nome);
            } else {
                console.log('Usuário inválido!');
            }
        },
        listarUsuarios: function() {
            return usuarios;
        },
        totalUsuarios: function() {
            return usuarios.length;
        }
    };
})();

// Usando o namespace
MeuApp.adicionarUsuario({nome: 'João', email: 'joao@email.com'});
MeuApp.adicionarUsuario({nome: 'Maria', email: 'maria@email.com'});
MeuApp.adicionarUsuario({nome: 'Pedro'}); // Inválido - sem email

console.log('Total de usuários:', MeuApp.totalUsuarios());
console.log('Lista de usuários:', MeuApp.listarUsuarios());
