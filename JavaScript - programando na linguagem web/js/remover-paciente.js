var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function (event) {
    
    event.target.parentNode.classList.add('fadeOut')

    setTimeout(function(){
        event.target.parentNode.remove()

    }, 500 )
});

//Dessa forma remove apenas a TD
//var pacientes = document.querySelectorAll('.paciente')
// pacientes.forEach(function(paciente){
//     paciente.addEventListener('dblclick', function(){
//         console.log(`fui clicado com um duplo click`)
//         this.remove()
//     } )
// })
