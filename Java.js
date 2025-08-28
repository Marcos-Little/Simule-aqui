document.getElementById("simuladorForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const consumo = parseFloat(document.getElementById("consumo").value);
  const valorConta = parseFloat(document.getElementById("valorConta").value);
  const cidade = document.getElementById("cidade").value;
  const tipo = document.getElementById("tipo").value;

  // Cálculo estimado
  const economiaMensal = valorConta * 0.85; // 85% de economia
  const potenciaSistema = consumo / 30 * 0.50; // estimativa simples
  const custoSistema = potenciaSistema * 3500; // R$ por kWp instalado
  const retorno = custoSistema / (economiaMensal * 12); // em anos

  const resultado = `
    <h2>Resultado da Simulação</h2>
    <p><strong>Cidade:</strong> ${cidade}</p>
    <p><strong>Tipo de imóvel:</strong> ${tipo}</p>
    <p><strong>Potência recomendada:</strong> ${potenciaSistema.toFixed(2)} kWp</p>
    <p><strong>Economia mensal estimada:</strong> R$ ${economiaMensal.toFixed(2)}</p>
    <p><strong>Custo aproximado do sistema:</strong> R$ ${(custoSistema/1000).toFixed(3)}</p>
    <p><strong>Retorno do investimento:</strong> ${retorno.toFixed(1)} anos</p>
  `;

  const resultadoDiv = document.getElementById("resultado");
  resultadoDiv.innerHTML = resultado;
  resultadoDiv.style.display = "block";
});