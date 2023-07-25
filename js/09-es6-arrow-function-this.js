class Header {
    constructor() {
        this.color = "Red";
    }

    changeColor = function() {
        const color = 'red';
        // document.getElementById("demo").innerHTML += this;
        document.getElementById("demo").innerHTML += this;
        document.getElementById('demo').setAttribute("style", `background-color: ${this.color}`);
    }
}

const myheader = new Header();
window.color = 'red';

//The window object calls the function:
window.addEventListener("load", myheader.changeColor);

//A button object calls the function:
document.getElementById("btn").addEventListener("click", myheader.changeColor);
