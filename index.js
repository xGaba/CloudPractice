const posibilidades = ['piedra', 'papel', 'tijera'];

let started = false;




$('body > button').on('click', function(){
    started = true;
    var letters = /^[A-Za-z]+$/
    let nombre = $('input > [name="nombre"]').value
    if (nombre.match(letters)){
        alert("Your name it's accepted");
    } else {
        alert ('asojikfdjas')
    }
})

$('#jugador > img').on('click', function() {
    $(this).attr('class', '.seleccionado')
})

let randomPosibilidad = Math.floor((Math.random()*posibilidades.length));

$('h2 > button').on('click', function () {
    $('#maquina > img').attr('src', './source/' + posibilidades[randomPosibilidad] + '.jpeg')
})

let streak = 0;


