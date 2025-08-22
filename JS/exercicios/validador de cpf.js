function validarCPF(cpf) {
    // Limpa o CPF (remove caracteres não numéricos)
    cpf = cpf.replace(/\D+/g, '');

    // Verifica se tem 11 dígitos
    if (cpf.length !== 11) return false;

    // Verifica se todos os dígitos são iguais
    if (/^(\d)\1{10}$/.test(cpf)) return false;

    // Validação do primeiro dígito verificador
    let soma = 0;
    for (let i = 0; i < 9; i++) {
        soma += Number(cpf[i]) * (10 - i);
    }
    let primeiroDigito = (soma * 10) % 11;
    if (primeiroDigito === 10) primeiroDigito = 0;

    if (Number(cpf[9]) !== primeiroDigito) return false;

    // Validação do segundo dígito verificador
    soma = 0;
    for (let i = 0; i < 10; i++) {
        soma += Number(cpf[i]) * (11 - i);
    }
    let segundoDigito = (soma * 10) % 11;
    if (segundoDigito === 10) segundoDigito = 0;

    if (Number(cpf[10]) !== segundoDigito) return false;

    return true;
}

// Exemplo de uso:
const cpf = '492.615.238-03';
console.log(validarCPF(cpf)); // true ou false