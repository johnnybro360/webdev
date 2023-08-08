function foo() {

    const numbers = [65, 44, 12, 4];
    const newArr = numbers.map(myFunction);

    document.getElementById("theMap").innerHTML = newArr;

    function myFunction(num) {
        return num * 10;
    }
}

function init(){

    document.getElementById("btn").addEventListener("click", foo);
}

//The window object calls the function:
window.onload = init;