function renderApp() {
    document.getElementById("ter").innerHTML = "Welcome!";
}

function renderLogin() {
    document.getElementById("ter").innerHTML = "Please log in";
}

let authenticated = true;

if (authenticated) {
    renderApp();
} else {
    renderLogin();
}