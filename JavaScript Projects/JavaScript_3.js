function displayType (character) {
    var characterType = character.getAttribute ("data-character-type");
    alert(characterType + " favourite thing is " + character.innerHTML + " ");
}