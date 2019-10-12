const user = {
    username: 'daniel',
    password: '12345',
};

// elements
let inpUsername;
let inpPassword;

function init() {
    inpUsername = getElement('inp-username');
    inpPassword = getElement('inp-password');
}

function login() {
    const username = inpUsername.value;
    const password = inpPassword.value;
    if (user.username === username
        && user.password === password) {
        navigate('../index.html');
    } else {
        alert('no');
    }
}