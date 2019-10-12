window.onload = main;

function main() {
    setCorrectNavbar();
}

function setCorrectNavbar() {
    var navbars = {
        loggedOut: document.getElementById("loggedOut"),
        loggedIn: document.getElementById("loggedIn"),
    };

    navbars.loggedOut.setAttribute('class', 'show');
}
