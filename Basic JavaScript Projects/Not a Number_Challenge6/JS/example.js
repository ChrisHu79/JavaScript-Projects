function my_Function() {
    document.getElementById("Test").innerHTML = 0/0; // This returns a NaN statement because you cannot divide 0 by 0 //
}

function my_Function2() {
    document.getElementById("Test2").innerHTML = isNaN('This is a string');  // This returns a TRUE statement because the value is a string //
}

function my_Function3() {
    document.getElementById("Test3").innerHTML = isNaN('007');  // This returns a FALSE statement because 007 IS a number //
}
    
function my_Function4(){
    document.getElementById("Test4").innerHTML =  2E310;
}

function my_Function5(){
    document.getElementById("Test5").innerHTML = -3E310;
}


document.write(2E310)

document.write(-3E310)
