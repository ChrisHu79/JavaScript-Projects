function my_Dictionary() { // The name of the function //
    var Animal = {         // The name of the variable //
        Species:"Dog",     // These are the types of variable //
        Color:"Brown",
        Breed:"Border_Terrier",
        Age:5,
        Sound:"Bark!" 
    };
    delete Animal.Sound;  // This will delete the Sound KVP //
    document.getElementById("Dictionary").innerHTML = Animal.Sound;
}