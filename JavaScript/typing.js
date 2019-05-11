const texts = ["HTML", "CSS", "Javascript", "Python"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

//Invoke a function so it does it at the same time it is declared
(function type(){
    if(count === texts.length){
        count = 0;
    }
    currentText = texts[count];
    // Goes through each letter in the array
    letter = currentText.slice(0, ++index);

    document.querySelector(".typing").textContent = letter;
    //After it goes through the first word, then goes through the next word
    if(letter.length === currentText.length){
        count++;
        index = 0;
    }
    setTimeout(type, 250);
})();