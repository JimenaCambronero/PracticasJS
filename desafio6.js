// texto agregado con jquery


$(document).ready(function () {
    $('#main').append('<p class="textoJs">¡Si tienes algun otro tipo de mascota, que no sea un gato o un perro tambien podemos cuidarla, dale click al boton para saber más.</p> ');
    $('#contenido').html ('Podemos cuidar tortugas, peces, conejos o cualquier otro animal doméstico, el precio dependerá del tipo de mascota y los cuidados que requiera')
    $('#main').css("color", 'green');
    $('#contenido').addClass('text-danger');
    $('#contenido').css({background:'black', margin: '5em'})

    let parrafo = $('#contenido')

    $('.btn-primary').click(function(){
        parrafo.addClass('display-4');
    })

    $('.btn-danger').click(function(){
        parrafo.removeClass('display-4');
    })
    
    $('#formulario').submit(function(e){ 
        e.preventDefault();
        let comentario = $('#comentario').val();
        console.log(comentario);       
    });
});

