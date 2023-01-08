function Call_Loop() {
    var Digit = "";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Loop").innerHTML = Digit
}

// Challenge #13 //

function length_of_String() {
    let text = "This is a string";
    let length = text.length;
    document.getElementById("Length").innerHTML = length;
}

// Assignment #51 //

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop () {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

// Assignment #52 //

function array_Function() {
    var Pencil_case = [];
    Pencil_case[0] = "12 pencils";
    Pencil_case[1] = "2 pencils";
    Pencil_case[2] = "8 pencils";
    Pencil_case[3] = "5 pencils";
    Pencil_case[4] = "3 pencils";
    document.getElementById("Array").innerHTML = "In this Pencil case there are " +
    Pencil_case[4] + ".";
}

// Assignment #53 //

function constant_function() {
    const Vehicle = {type:"hatchback", brand:"Mazda", color:"blue"};
    Vehicle.color = "dark blue";
    document.getElementById("Constant").innerHTML = "The color of the " +
    Vehicle.brand + " is " + Vehicle.color
}

// Assignment #54 //
function Keyword() {
    var X = 88;
document.write(X);
{
    let X = 79;
    document.write("<br>" + X);
}
document.write("<br>" + X);
document.getElementById("Key").innerHTML = X
}

// Challenge #14 //

let X = myFunction(4, 3);
document.getElementById("Canon").innerHTML = X;

function myFunction(a, b) {
    return a * b;
}

// Assignment #55 //

let car = {
    make: "Audi ",
    model: "A4 ",
    year: "2022 ",
    color: "Blue ",
    description : function() {
        return "The car is a " + this.year + this.color + this.make + this.model;
    }
};
document.getElementById("Car_Object").innerHTML = car.description();

// Challenge #15 //

let text = "";
for (let i = 0; i < 10; i ++) {
    if (i === 3) { break; }
    text += "The number is " + i + "<br>";
}
document.getElementById("Break_").innerHTML = text;

// Challenge #15 //

let text1 = "";
for (let i = 0; i < 10; i++) {
  if (i === 3) { continue; }
  text1 += "The number is " + i + "<br>";
}
document.getElementById("demo").innerHTML = text1;
