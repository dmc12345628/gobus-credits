function isUserLoggedIn() {
    const user = localStorage.getItem('user');
    return true;//user !== null ? user : false;
}