function isUserLoggedIn() {
    const username = localStorage.getItem('username');
    return user !== null;
}

function getUsername() {
    return localStorage.getItem('username');
}
