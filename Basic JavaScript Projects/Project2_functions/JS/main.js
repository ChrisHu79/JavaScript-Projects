function My_First_Function () { //Naming the function
    var str ="This is my first example";//Adding a string of text
    var result = str.fontcolor("blue");//setting the colour of the text
    document.getElementById("Blue_Text").innerHTML = result;//
}

function myFunction() {
    var sentence = "I am Learning";
    sentence += " a lot from this course!";
    document.getElementById("Concatenate").innerHTML = sentence;
}