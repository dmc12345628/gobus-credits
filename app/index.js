function init() {
    if (isUserLoggedIn()) {
        console.log('si');
    } else {
        navigate('./login/login.html');
    }
}