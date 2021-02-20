var botaoAdc = document.querySelector("#adicionar-paciente");

botaoAdc.addEventListener("click", function (event) {
  event.preventDefault();
  var form = document.querySelector("#form-adiciona");

  //Extraindo as info do paciente do form
  var paciente = obtemPacientesDoFormulario(form);

  //cria tr e td do paciente
  var pacienteTr = montaTr(paciente);

  //valida paciente

  var erros = validaPaciente(paciente);
  console.log(erros);
  if (erros.length > 0) {
    exibeMensagensDeErro(erros);
    return;
  }

  //adicionando o paciente na tabela
  var tabela = document.querySelector("#tabela-pacientes");
  tabela.appendChild(pacienteTr);

  form.reset();
  var mensagensErro =  document.querySelector('#mensagens-erro')
  mensagensErro.innerHTML = ''
});

function exibeMensagensDeErro(erros) {
  var ul = document.querySelector("#mensagens-erro");
  ul.innerHTML = ''

  erros.forEach(function (erro) {
    var li = document.createElement("li");
    li.textContent = erro;
    ul.appendChild(li);
  });
}

function obtemPacientesDoFormulario(form) {
  var paciente = {
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calculaImc(form.peso.value, form.altura.value),
  };

  return paciente;
}

function montaTr(paciente) {
  var pacienteTr = document.createElement("tr");
  pacienteTr.classList.add("paciente");

  var colunas = ["nome", "peso", "altura", "gordura", "imc"];
  colunas.forEach((col) =>
    pacienteTr.appendChild(montaTd(paciente[col], `info-${col}`))
  );
  console.log(pacienteTr);
  return pacienteTr;

  // pacienteTr.appendChild(montaTd(paciente.nome, 'info-nome'))
  // pacienteTr.appendChild(montaTd(paciente.peso, 'info-peso'))
  // pacienteTr.appendChild(montaTd(paciente.altura, 'info-altura'))
  // pacienteTr.appendChild(montaTd(paciente.gordura, 'info-gordura'))
  // pacienteTr.appendChild(montaTd(paciente.imc, 'info-imc'))
}

function montaTd(dado, classe) {
  var td = document.createElement("td");
  td.textContent = dado;
  td.classList.add(classe);

  return td;
}

function validaPaciente(paciente) {
  var erros = [];

  if(paciente.nome.length == 0) erros.push(`O nome não pode ser em branco`)

  if(paciente.gordura.length == 0) erros.push(`A gordura não pode ser em branco`)
  
  if(paciente.peso.length == 0 ) erros.push (`O peso não pode ficar em branco`)

  if (!validaPeso(paciente.peso)) erros.push(`Peso é inválido`);

  if (!validaAltura(paciente.altura)) erros.push(`Altura é inválida`);

  return erros;
}