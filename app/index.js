/*function init() {
    if (isUserLoggedIn()) {
        console.log('si');
    } else {
        window.location.href = './login/login.html';
    }
}*/

function mostrarVentanaCreditos(){
    var ventana = document.getElementById("ventanaCreditos");
    ventana.style.display = "block";
}

function cerrarVentanaCreditos(){
    var ventana = document.getElementById("ventanaCreditos");
    ventana.style.display = "none";
}
