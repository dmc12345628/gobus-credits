function isUserLoggedIn() {
    const user = localStorage.getItem('username');
    return true; //user !== null;
}

function getUsername() {
    return localStorage.getItem('username');
}
