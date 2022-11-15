// These are all examples of Math Operations //
function add() {     // Addition //
    var sum = 2 + 2;
    document.getElementById("Math").innerHTML = "2 + 2 = " + sum;
}

function minus() {  // Subtraction //
    var sum = 3 - 2;
    document.getElementById("subtract").innerHTML = "3 - 2 = " + sum;
}

function multiplication() {  // Multiplication //
    var sum = 6 * 8;
    document.getElementById("multiply").innerHTML = "6 x 8 = " + sum;
}

function division() {  // Division //
    var sum = 48 / 6;
    document.getElementById("divide").innerHTML = "48 / 6 = " + sum
}

function multiple_operation (){   // This is an example of multiple operations in one //
    var sum = (1 + 2) * 10 / 2 -5;
    document.getElementById("multiple").innerHTML = "1 plus 2, multiplied by 10, divided in half and then subtracted by 5 = " + sum
}

function modulus_Operator (){   // This is an example of a modulus operator //
    var sum = 25 % 6;
    document.getElementById("mod").innerHTML = "When you divide 25 by 6 you have a remainder of: " + sum
}

function unary() {  // An example of a Unary operator //
    var sum = 2 + -2;
    document.getElementById("una").innerHTML = "2 + -2 = " + sum;
}

function increment() {  // An example of increasing a number in increments //
    var X = 5;
    X++
    document.getElementById("inc").innerHTML = "X++ = " + X;
}

function decrement() {  // Ane example of decreasing a number by increments //
    var Y = 5.25;
    Y--
    document.getElementById("dec").innerHTML = "Y++ = " + Y;
}

window.alert(Math.random() * 250);  // This creates an alert window and displays a random number between 0 to 250 //