var mensajes = document.getElementsByClassName('mensaje');
// document.getElementById('whatsup').innerHTML = mensajes.length;

function elementos() {

  if (parseInt(mensajes) == 1) {
    document.getElementById("whatsup").innerHTML = "Es muy poco";
  } else if (parseInt(mensajes) < 4) {
      document.getElementById("whatsup").innerHTML = "No esta mal";
    } else if (parseInt(mensajes) >= 4){
        document.getElementById("whatsup").innerHTML = "Son muchos!!";
      }
}

elementos();
