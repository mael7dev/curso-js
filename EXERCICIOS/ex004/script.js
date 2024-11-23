// Carrega os dados do LocalStorage ao iniciar
let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
let idAtual = usuarios.length ? usuarios[usuarios.length - 1].id + 1 : 1;

// Função para atualizar a tabela
function atualizarTabela() {
  const tabelaUsuarios = document.getElementById('tabela-usuarios');
  tabelaUsuarios.innerHTML = '';

  usuarios.forEach((usuario) => {
    const row = `
      <tr>
        <td>${usuario.id}</td>
        <td>${usuario.nome}</td>
        <td>
          <button onclick="editarUsuario(${usuario.id})">Editar</button>
          <button onclick="deletarUsuario(${usuario.id})">Deletar</button>
        </td>
      </tr>
    `;
    tabelaUsuarios.innerHTML += row;
  });

  localStorage.setItem('usuarios', JSON.stringify(usuarios));
}

// Função para adicionar um novo usuário
function adicionarUsuario() {
  const nome = document.getElementById('nome').value;
  if (nome.trim() === '') {
    alert('Por favor, insira um nome.');
    return;
  }

  usuarios.push({ id: idAtual++, nome });
  document.getElementById('nome').value = '';
  atualizarTabela();
}

// Função para editar um usuário existente
function editarUsuario(id) {
  const novoNome = prompt('Digite o novo nome:');
  if (novoNome.trim() === '') {
    alert('Nome inválido.');
    return;
  }

  const usuario = usuarios.find((u) => u.id === id);
  usuario.nome = novoNome;
  atualizarTabela();
}

// Função para deletar um usuário
function deletarUsuario(id) {
  usuarios = usuarios.filter((u) => u.id !== id);
  atualizarTabela();
}

// Inicializa a tabela na primeira carga
atualizarTabela();
 