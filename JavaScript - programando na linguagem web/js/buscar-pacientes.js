var botaoAdcionar = document.querySelector("#buscar-pacientes");

botaoAdcionar.addEventListener("click", function () {
  console.log("clicou no botao buscar");

  var xhr = new XMLHttpRequest();

  xhr.open("GET", "http://api-pacientes.herokuapp.com/pacientes");

  xhr.addEventListener("load", function () {
    if (xhr.status == 200) {
      var resposta = xhr.responseText;
      var pacientes = JSON.parse(resposta);

      pacientes.forEach(function (paciente) {
        adicionaPacienteNaTabela(paciente);
      });
    }else{
        console.log(xhr.status);
        console.log(xhr.responseText);
    }
  });

  xhr.send();
});
