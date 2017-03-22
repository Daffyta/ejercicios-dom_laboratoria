var mensajes = document.getElementsByClassName('mensaje');
document.getElementById('whatsup').innerHTML = mensajes.length;
var numeroMensaje = mensajes.length;

function elementos() {

  if (numeroMensaje == 1) {
    document.getElementById("whatsup").innerHTML = "Es muy poco";
    // alert("Es muy poco");
  } else if (numeroMensaje < 4) {
      document.getElementById("whatsup").innerHTML = "No esta mal";
      // alert("No esta mal");
    } else if (numeroMensaje >= 4){
        document.getElementById("whatsup").innerHTML = "Son muchos!!";
        // alert("Son muchos!!");
      }
}

elementos();
