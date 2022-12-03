document.write((typeof "Word")+"<br>"); // This returns a string //

document.write((9>3)+"<br>");  // This returns a TRUE statement //

document.write((9<3)+"<br>");  // This returns a FALSE statement //

console.log((2 + 2)+"<br>");  // This returns an addition in the console window //

document.write(("10 + 5")+"<br>"); // This prints the statement 10 + 5 //

console.log((9<3)+"<br>");  // This returns a FALSE statement inn the console window //

document.write((15==15)+"<br>"); // This compares the values either side of the == symbol and returns a true or false statement //

document.write((4==12)+"<br>");  // Same as above //

x = 10;
y = 10;
document.write((x===y)+"<br>");  // The === symbol compares the values each side to see if the values are the same and the datat is the same //

x = 10;
y = "Twelve";
document.write((x===y)+"<br>");  // Same as above //

x = "10";
y = 10;
document.write((x===y)+"<br>");  // Same as above //

x = "Chris";
y = "Sam";
document.write((x===y)+"<br>");  // Same as above //

document.write((5 > 2 && 10 > 5)+"<br>"); // The && symbol means AND, This statement will return a TRUE statement because 5 is greater than 2 //

document.write((5 > 10 && 6 > 12)+"<br>");

document.write((6 < 12 || 6 > 3)+"<br>"); // The || symbol means OR, This statement will return a TRUE statement because 6 is less than 12 //

document.write((6 > 12 || 12 < 6)+"<br>");

function not_Function() {
    document.getElementById("Not").innerHTML = ! ((5<10)+"<br>"); // The !(Not) symbol checks if something is true or not, this returns a TRUE statement //
}

function not_Function1(){
    document.getElementById("Not1").innerHTML = ! ((20>10)+"<br>"); // This returns a FALSE statement //
}