var titulo = document.querySelector(".titulo");
titulo.textContent = 'Nutrição'


// pacientes.forEach((paciente)=>{
// var tdPeso = paciente.querySelector('.info-peso')
// var peso = tdPeso.textContent;

// var tdAltura = paciente.querySelector('.info-altura')
// var altura = tdAltura.textContent;

// var imc = peso / (altura * altura)
// var tdImc = paciente.querySelector('.info-imc') 
// tdImc.textContent = imc.toFixed(2)
// })
var pacientes  = document.querySelectorAll('.paciente')

for(var i=0; i < pacientes.length; i++){

var paciente = pacientes[i];

var tdPeso = paciente.querySelector('.info-peso')
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector('.info-altura')
var altura = tdAltura.textContent;

var imc = peso / (altura * altura)
var tdImc = paciente.querySelector('.info-imc') 
tdImc.textContent = imc.toFixed(2)


var pesoEhValido = validaPeso(peso);
var alturaEhValida = validaAltura(altura);

if (!pesoEhValido){
    console.log("peso invalido")
    pesoEhValido = false;
    tdImc.textContent = 'Peso inválido!';
    paciente.classList.add('paciente-invalido') // para pegar o estilo com a class que foi criada no css 
}

if (!alturaEhValida){
    console.log("Altura inválida");
    alturaEhValida = false;
    tdImc.textContent = "Altura inválida!";
    paciente.classList.add('paciente-invalido')
}

if (alturaEhValida && pesoEhValido){

    var imc = calculaImc(peso,altura)
    tdImc.textContent = imc

}
 
}


function validaPeso(peso){
    if(peso >=0 && peso < 1000){
        return true
    }else{
        return false
    }
   
} 

function validaAltura(altura){
    if(altura >=0 && altura <= 3.0){
        return true
    }else{
        return false
    }
}

function calculaImc(peso,altura){
    var imc = 0 
    imc = peso / (altura * altura )
    return imc.toFixed(2)
}

