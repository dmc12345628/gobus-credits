function isUserLoggedIn() {
    const user = localStorage.getItem('user');
    window.location = "index.html";
    return user !== null ? user : false;
}