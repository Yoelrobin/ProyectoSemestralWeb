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

