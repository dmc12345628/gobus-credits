function init() {
    if (isUserLoggedIn()) {
        console.log('si');
    } else {
        window.location.href = './login/login.html';
    }
}