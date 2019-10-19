/* var divUsername;
*/
var divCreditos;

function init() {
    /*
    divUsername = document.getElementById('div-username');
    divCreeditos = document.getElementById('div-creditos');
    if (isUserLoggedIn()) {
        divUsername.innerHTML = getUsername();
        */
        divCreditos.innerHTML = getCreditos();
        /*
    } else {
        window.location.href = './login/login.html';
    }

*/
}
function mostrarVentanaCreditos(){
    var ventana = document.getElementById("ventanaCreditos");
    ventana.style.display = "block";
}

function cerrarVentanaCreditos(){
    var ventana = document.getElementById("ventanaCreditos");
    ventana.style.display = "none";
}
 function addCredits(creditsToAdd){
     alert
 }