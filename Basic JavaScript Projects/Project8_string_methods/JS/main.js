//! ASSIGNMENT #44 !//
function complete_Sentence() {
    var part_1 = "I am ";
    var part_2 = "finding this ";
    var part_3 = "quite difficult ";
    var part_4 = "to learn, ";
    var part_5 = "Coding is ";
    var part_6 = "not easy.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4, part_5, part_6);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}
//! ASSIGNMENT #45 !//
function slice_Method() {
    var Sentence = "All this coding and no breaks makes Chris tired.";
    var Section = Sentence.slice(30,48);
    document.getElementById("Slice").innerHTML = Section;
}
//! CHALLENGE #10 !//
function upper_Function() {
    let text = document.getElementById("upper").innerHTML;
    document.getElementById("upper").innerHTML = text.toUpperCase();
}

function search_Function() {
    let text = "Use this method to search for the first instance of a word within a string";
    document.getElementById("search").innerHTML = text.search("word");
}
//! ASSIGNMENT #46 !//
function num_String() {
    var X =1979;
    document.getElementById("Number_method").innerHTML = X.toString();
}
//! ASSIGNMENT #47 !//
function precise_Method() {
    var X = 357410.1220379456;
    document.getElementById("precise").innerHTML = X. toPrecision(12);
}
//! CHALLENGE #11 !//
function fixed_Method() {
    let num = 7.789056;
    let n = num.toFixed();
    document.getElementById("fixed").innerHTML = n;
}

function valueOf_method() {
    let text = "This is text";
    let result = text.valueOf();
    document.getElementById("text").innerHTML = result;
}