function isUserLoggedIn() {
    const username = localStorage.getItem('username');
    return username !== null;
}


function getUsername() {
    return localStorage.getItem('username');
}
