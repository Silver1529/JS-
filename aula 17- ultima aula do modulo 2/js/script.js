(function meuEscopo() {
  const form = document.querySelector('.form');
  const campoNome = document.querySelector('.nome');
  const campoSobrenome = document.querySelector('.sobrenome');
  const campoPeso = document.querySelector('.peso');
  const campoAltura = document.querySelector('.altura');
  const resultado = document.querySelector('.resultado');
  const lista = document.querySelector('.lista');

  // --- estado + persistência ---
  const STORAGE_KEY = 'cadastros';
  let cadastros = [];

  function carregar() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      cadastros = raw ? JSON.parse(raw) : [];
    } catch {
      cadastros = [];
    }
  }

  function salvar() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cadastros));
  }

  function renderizar() {
    lista.innerHTML = '';
    cadastros.forEach(({ nome, sobrenome, peso, altura, imc }) => {
      const li = document.createElement('li');
      li.textContent = `${nome} ${sobrenome} — Peso: ${peso}kg, Altura: ${altura}m, IMC: ${imc}`;
      lista.appendChild(li);
    });
  }

  // --- helpers ---
  const toNum = (str) => Number(String(str).replace(',', '.'));

  function limparForm() {
    form.reset();
    campoNome.focus();
  }

  // --- init ---
  carregar();
  renderizar();

  // --- submit ---
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nome = campoNome.value.trim();
    const sobrenome = campoSobrenome.value.trim();
    const peso = toNum(campoPeso.value);
    const altura = toNum(campoAltura.value);

    if (!nome || !sobrenome || !peso || !altura || Number.isNaN(peso) || Number.isNaN(altura)) {
      resultado.innerHTML = '<p class="erro">Preencha todos os campos corretamente.</p>';
      return;
    }

    const imc = (peso / (altura * altura)).toFixed(2);

    // feedback
    resultado.innerHTML = `
      <p class="ok">Salvo com sucesso!</p>
      <p>Nome: <b>${nome} ${sobrenome}</b></p>
      <p>Peso: ${peso} kg — Altura: ${altura} m — IMC: <b>${imc}</b></p>
    `;

    // persiste
    cadastros.push({ nome, sobrenome, peso, altura, imc });
    salvar();
    renderizar();
    limparForm();
  });
})();
