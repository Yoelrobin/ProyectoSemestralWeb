function vNombre(){
    
    var cantidad = document.getElementById('nombre').value.length

    if(cantidad <3){
        document.getElementById('mensaje').innerHTML = 'Pocos Caracteres'
        document.getElementById('mensaje').style.color = 'red'
        document.getElementById('enviar').style.display = 'none'
    }
    if(cantidad >=3 && cantidad <=16){
        document.getElementById('mensaje').innerHTML = 'Correcto'
        document.getElementById('mensaje').style.color = 'green'
        document.getElementById('enviar').style.display = 'block'
    }
    if(cantidad >16){
        document.getElementById('mensaje').innerHTML = 'Muchos Caracteres'
        document.getElementById('mensaje').style.color = 'red'
        document.getElementById('enviar').style.display = 'none'
    }
}


$(document).ready(function() {
    $.get("https://api.imgflip.com/get_memes",function(data){
        $.each(data.data.memes, function(i, item) {
            $("#tabla").append("<tr><td>" +
                item.id + "</td><td>" + item.name +
                "</td><td><img src =" + item.url + "></td></tr>" );
            
                
        })

    })


});
