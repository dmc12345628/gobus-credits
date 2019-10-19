var user;
var pass;
const username = "user1";
const password = "password"

function init() {
user = document.getElementById("inp-username");
pass = document.getElementById("inp-password");
}
function login(){
    if(user === username && pass === password){
        localStorage.setItem("username","user1");
    }
}
