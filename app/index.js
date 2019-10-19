/*function init() {
    if (isUserLoggedIn()) {
        console.log('si');
    } else {
        window.location.href = 'index.html';
    }

}*/

function CerrarSesion(){
    location.href="file:///C:/Users/asael/OneDrive/Escritorio/gobus-credits-master/app/login/login.html";
}
function mostrarVentana(){
    var ventana = document.getElementById("miVentana");
    ventana.style.marginTop = "50px";
    ventana.style.display = "block";
}
function ocultarVentana(){
    var ventana = document.getElementById("miVentana");
    ventana.style.display = "none";
}

