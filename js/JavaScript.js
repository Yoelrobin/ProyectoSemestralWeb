const camp = {
    nombre: false,
    email: false,
    celular: false
}

function vNombre() {
    var cantidad = document.getElementById('nombre').value.length
    nom = /^[a-zA-ZÀ-ÿ\s]{3,16}$/;
    if (cantidad >= 0 && cantidad <= 3) {
        document.getElementById('mensaje').innerHTML = 'Pocos Caracteres'
        document.getElementById('mensaje').style.color = 'red'
        document.getElementById('enviar').disabled = true

    }
    if (cantidad >= 3 && cantidad <= 16) {
        document.getElementById('mensaje').innerHTML = 'Correcto'
        document.getElementById('mensaje').style.color = 'green'
        camp['nombre'] = true;
        document.getElementById('enviar').disabled = false
    }
    if (cantidad >= 16) {
        document.getElementById('mensaje').innerHTML = 'Muchos Caracteres'
        document.getElementById('mensaje').style.color = 'red'
        document.getElementById('enviar').disabled = true
    }
}

//Funcion para validad email
//let valor = document.getElementById('correo').value
function vEmail() {
    re = /^([\da-z_\.-]+)@([\da-z\.-]+)\.([\a-z\.]{2,6})$/
    let valor = document.getElementById('correo').value
    if (!re.exec(valor)) {
        document.getElementById('alerta').innerHTML = 'Email no valido';
        document.getElementById('alerta').style.color = 'red';
        document.getElementById('enviar').disabled = true;
    } else {
        document.getElementById('alerta').innerHTML = 'Email valido';
        document.getElementById('alerta').style.color = 'green';
        camp['email'] = true;
        document.getElementById('enviar').disabled = false
    }
}



//Funcion para validad numero de telefono

function vCelular() {
    var cantidad = document.getElementById('celular').value.length
    var primerNumero = document.getElementById('celular').value.substring(0, 1)

    if (cantidad >= 1 && cantidad <= 9) {
        document.getElementById('mensajeCelu').innerHTML = 'Correcto'
        document.getElementById('mensajeCelu').style.color = 'green'
        camp['celular'] = true
        document.getElementById('enviar').disabled = false
    }
    if (primerNumero != 9) {
        document.getElementById('mensajeCelu').innerHTML = 'Debe comenzar con 9'
        document.getElementById('mensajeCelu').style.color = 'red'
        document.getElementById('enviar').disabled = true
    }
    if (cantidad > 9) {
        document.getElementById('mensajeCelu').innerHTML = 'Sobrepasaste los 9 Digitos'
        document.getElementById('mensajeCelu').style.color = 'red'
        document.getElementById('enviar').disabled = true
    }
    if (cantidad < 9) {
        document.getElementById('mensajeCelu').innerHTML = 'Menos de los 9 digitos'
        document.getElementById('mensajeCelu').style.color = 'red'
        document.getElementById('enviar').disabled = true
    }
}


/*function name() {
    $("#enviar").hover(function () {
        if (camp.nombre && camp.celular && camp.email) {
            document.getElementById('enviar').disabled = false
        } else {
            document.getElementById('enviar').disabled = true
        }
    });
    document.getElementById('enviar').disabled = false
}*/


function vacio() {
    var nom = document.getElementById('nombre').value.length
    var tel = document.getElementById('celular').value.length
    var em = document.getElementById('correo').value.length
    var pass = document.getElementById('contrasena').value.length
    if (nom == 0 || tel == 0 || em == 0 || pass == 0) {
        document.getElementById('enviar').disabled = true
    }else{
        document.getElementById('enviar').disabled = false
    }
}

$(document).ready(function () {
    document.getElementById('enviar').disabled = true
    $("#nombre").keyup(vNombre)
    $("#correo").keyup(vEmail)
    $("#celular").keyup(vCelular)
    $("#enviar").mouseenter(vacio)
    $("#enviar").click(function () {
        alert("datos enviado")
    });
})


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

$(document).ready(function () {
    $("#inpBus").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $("#tabla tr").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});
