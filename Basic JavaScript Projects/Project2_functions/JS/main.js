function My_First_Function () { //Naming the function
    var str ="This is my first example";//Adding a string of text
    var result = str.fontcolor("blue");//Setting the colour of the text
    document.getElementById("Blue_Text").innerHTML = result;//This shows the result of the variable string and colour value
}

function myFunction() {
    var sentence = "I am Learning";////Adding a string of text
    sentence += " a lot from this course!";//Adding a string of text
    document.getElementById("Concatenate").innerHTML = sentence;
}

function my_Function() {
    var str = "This is a simple function";
    var result = str.fontcolor("red");
    document.getElementById("Red_Text").innerHTML = result
}