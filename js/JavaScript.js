function vNombre() {

    var cantidad = document.getElementById('nombre').value.length

    if (cantidad >= 1 && cantidad <= 3) {
        document.getElementById('mensaje').innerHTML = 'Pocos Caracteres'
        document.getElementById('mensaje').style.color = 'red'
    }
    if (cantidad >= 3 && cantidad <= 16) {
        document.getElementById('mensaje').innerHTML = 'Correcto'
        document.getElementById('mensaje').style.color = 'green'
    }
    if (cantidad >= 16) {
        document.getElementById('mensaje').innerHTML = 'Muchos Caracteres'
        document.getElementById('mensaje').style.color = 'red'
        
    }
}

//Funcion para validad email
//let valor = document.getElementById('email').value
function vEmail(valor){
    re = /^([\da-z_\.-]+)@([\da-z\.-]+)\.([\a-z\.]{2,6})$/
    if(!re.exec(valor)){
        document.getElementById('alerta').innerHTML = 'Email no valido';
        document.getElementById('alerta').style.color = 'red';
        document.getElementById('enviar').disabled = true;
    }else {
        document.getElementById('alerta').innerHTML = 'Email valido';
        document.getElementById('alerta').style.color = 'green';
    }
}



//Funcion para validad numero de telefono

function vCelular(){
    var cantidad = document.getElementById('celular').value.length
    var primerNumero = document.getElementById('celular').value.substring(1, 1)

    if(cantidad  <9){
       document.getElementById('mensajeCelu').innerHTML = 'Debe ser de largo 9'
       document.getElementById('mensajeCelu').style.color = 'red'
       document.getElementById('enviar').style.display = 'none'

    }
    if(primerNumero != 9){
        document.getElementById('mensajeCelu').innerHTML = 'Debe comenzar con 9'
        document.getElementById('mensajeCelu').style.color = 'red'
        document.getElementById('enviar').style.display = 'none'
    }
}


//Pagina de memes
$(document).ready(function () {
    $.get("https://api.imgflip.com/get_memes", function (data) {
        $.each(data.data.memes, function (i, item) {
            $("#tabla").append("<tr><td>" +
                item.id + "</td><td>" + item.name +
                "</td><td><img src =" + item.url + "></td></tr>");


        })

    })


});
