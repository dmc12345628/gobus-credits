function init() {
    if (isUserLoggedIn()) {
        console.log('si');
    } else {
        window.location.href = './login/login.html';
    }
}

function loadCredit() {
    var divCreditosValue = document.getElementById("div-creditos-value");
    divCreditosValue.innerHTML = getCredits();
}