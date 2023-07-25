function foo() {

    a = 1;                  // careful, `a` has been hoisted!

    if (a) {
        var a;              // hoisted to function scope!
        let b = a + 2;      // `b` block-scoped to `if` block!

        console.log( b );   // 3
    }

    console.log( a );       // 1
    console.log( b );       // ReferenceError: `b` is not defined
}

function init(){
//A button object calls the function:
    document.getElementById("btn").addEventListener("click", foo);
}

//The window object calls the function:
window.addEventListener("load", init);