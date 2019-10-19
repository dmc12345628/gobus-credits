function isUserLoggedIn() {
    const username = localStorage.getItem('username');
    return username !== null ? username : false;
}