function renderApp() {

    document.getElementById("ter").innerHTML = "Welcome!";
}

function renderLogin() {
    document.getElementById("ter").innerHTML = "Please log in";
}

// let authenticated = true;
let authenticated = false;

authenticated ? renderApp() : renderLogin(); //showing ternary operator