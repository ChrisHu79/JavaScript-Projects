function Color_Function() {
    var Color_Output;
    var Colors = document.getElementById("Color_Input").value;
    var Color_String = " is a great color!";
    switch(Colors) {
    case "Red":
        Color_Output = "Red" + Color_String;
    break;
    case "Yellow":
        Color_Output = "Yellow" + Color_String;
    break;
    case "Green":
        Color_Output = "Green" + Color_String
    break;
    case "Blue":
        Color_Output = "Blue" + Color_String
    break;
    case "Pink":
        Color_Output = "Pink" + Color_String
    break;
    case "Purple":
        Color_Output = "Purple" + Color_String
    break;
    default:
        Color_Output = "Please enter a color exactly as written on the above list.";                 
    }
    document.getElementById("Output").innerHTML = Color_Output;
}

// Assignment 57 //

function change_Function () {
    var A = document.getElementsByClassName("Click");
    A[1].innerHTML = "The text has changed!";
}

// Challenge 16 //

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(100, 75, 50, 0, 2 * Math.PI);
ctx.stroke();

// Challenge 17 //

var c = document.getElementById("My_Canvas");
var ctx = c.getContext("2d");

var grd = ctx.createLinearGradient(0, 0, 170, 0);
grd.addColorStop(0, "blue");
grd.addColorStop(1, "white");

ctx.fillStyle = grd;
ctx.fillRect(0, 0, 500, 250);