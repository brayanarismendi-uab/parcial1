const boton = document.querySelector("#btn-confirmar");
const mensaje = document.querySelector("#mensaje");

function confirmarP(){

    mensaje.textContent = "pedido aceptado "
    mensaje.classList.remove("oculto")
}

boton.addEventListener("click", confirmarP)

