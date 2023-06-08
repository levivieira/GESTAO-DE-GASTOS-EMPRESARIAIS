document.getElementById("despesa-form").addEventListener("submit", adicionarDespesa);

class Despesa {
  constructor(descricao, categoria, valor, data) {
    this.descricao = descricao;
    this.categoria = categoria;
    this.valor = valor;
    this.data = data;
  }
}

const despesas = [];

function adicionarDespesa(e) {
  e.preventDefault();

  const descricao = document.getElementById("descricao").value;
  const categoria = document.getElementById("categoria").value;
  const valor = parseFloat(document.getElementById("valor").value);
  const data = document.getElementById("data").value;

  const despesa = new Despesa(descricao, categoria, valor, data);
  despesas.push(despesa);

  document.getElementById("descricao").value = "";
  document.getElementById("categoria").value = "";
  document.getElementById("valor").value = "";
  document.getElementById("data").value = "";

  exibirDespesas();
}

function exibirDespesas() {
  const tabelaDespesas = document.getElementById("tabela-despesas");
  const tbody = tabelaDespesas.getElementsByTagName("tbody")[0];

  // Limpar a tabela antes de exibir as despesas
  tbody.innerHTML = "";

  // Percorrer o array de despesas e criar as linhas da tabela
  despesas.forEach((despesa) => {
    const row = tbody.insertRow();

    const cellDescricao = row.insertCell();
    cellDescricao.textContent = despesa.descricao;

    const cellCategoria = row.insertCell();
    cellCategoria.textContent = despesa.categoria;

    const cellValor = row.insertCell();
    cellValor.textContent = despesa.valor;

    const cellData = row.insertCell();
    cellData.textContent = despesa.data;
  });
}
