var divUsername;

function init() {
    divUsername = document.getElementById('div-username');
    if (isUserLoggedIn()) {
        divUsername.innerHTML = getUsername();
    } else {
        window.location.href = './login/login.html';
    }
}