
function isUserLoggedIn() {
    const user = localStorage.getItem('user');
    return user !== null ? user : false;
    
}

function getCredits() {
    const credits = localStorage.getItem('credits');
    return credits !== null ? parseInt(credits) : 0;
    //esto en un operador ternaro
}

function setCredits(creditsToAdd) {
    const actualCredit= getCredits();
    const credit=creditsToAdd+actualCredit;
    localStorage.setItem("credits",credit);
    

}
