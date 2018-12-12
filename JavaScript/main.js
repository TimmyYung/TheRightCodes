/*
Bigger Number Game
*/

function max(){
    var num1, num2;
    num1 = prompt("Input the First integer", "0");
    num2 = prompt("Input the second integer", "0");
                                                           
    if(parseInt(num1) > parseInt(num2)) 
    { 
        document.getElementById("bigger").innerHTML = ("Bigger Number");
        document.getElementById("Answer").innerHTML = ("The larger of "+ num1+ " and "+ num2+ " is "+ num1+ ".");
        }   
    else
    if(parseInt(num2) > parseInt(num1)) 
    {
        document.getElementById("bigger").innerHTML = ("Bigger Number");
        document.getElementById("Answer").innerHTML = ("The larger of "+ num1+" and "+ num2+ " is "+ num2+ ".");
        }                  
    else
    {
        document.getElementById("bigger").innerHTML = ("Bigger Number");
        document.getElementById("Answer").innerHTML = ("The values "+ num1+ " and "+ num2+ " are equal.");
        }
}


/*
Product of 3 Numbers
*/

function product(){
    var x, y, z;
    x = prompt ("Input the First integer", "0")
    y = prompt ("Input the Second integer", "0")
    z = prompt ("Input the Third integer", "0")
    if (x>0 && y>0 && z>0)
    {
        document.getElementById("product").innerHTML = ("Multiply Numbers")
        document.getElementById("Answer").innerHTML = ("The sign is +");
    }
    else if (x<0 && y<0 && z<0)
        {
            document.getElementById("product").innerHTML = ("Multiply Number");
            document.getElementById("Answer").innerHTML = ("The sign is -");
        }
     else if (x>0 && y<0 && z<0)
        {
            document.getElementById("product").innerHTML = ("Multiply Number");
            document.getElementById("Answer").innerHTML = ("The sign is +");
        }
    else if (x<0 && y>0 && z<0)
        {
            document.getElementById("product").innerHTML = ("Multiply Number");
            document.getElementById("Answer").innerHTML = ("The sign is +");
        }
     else
        {
            document.getElementById("product").innerHTML = ("Multiply Number");
            document.getElementById("Answer").innerHTML = ("The sign is -");
        }
    }

/*
Sort the Numbers
*/

function sort(){
    var a, b, c;
    a = window.prompt ("Input the First integer", "0")
    b = window.prompt ("Input the Second integer", "0")
    c = window.prompt ("Input the Third integer", "0")

    if (a>b && a>c)
{
        if (b>c)
        {
            document.getElementById("sort").innerHTML = ("Sort Number");
            document.getElementById("Answer").innerHTML = (a + ", " + b + ", " +c);
        }
        else
        {
            document.getElementById("sort").innerHTML = ("Sort Number");
            document.getElementById("Answer").innerHTML = (a + ", " + c + ", " +b);
        }
}
else if (b>a && b >c)
{
        if (a>c)
        {
            document.getElementById("sort").innerHTML = ("Sort Number");
            document.getElementById("Answer").innerHTML = (b + ", " + a + ", " +c);
        }
        else
        {
            document.getElementById("sort").innerHTML = ("Sort Number");
            document.getElementById("Answer").innerHTML = (b + ", " + c + ", " +a);
        }
}
else if (c>a && c>b)
{
        if (a>b)
        {
            document.getElementById("sort").innerHTML = ("Sort Number");
            document.getElementById("Answer").innerHTML = (c + ", " + a + ", " +b);
        }
        else
        {
            document.getElementById("sort").innerHTML = ("Sort Number");
            document.getElementById("Answer").innerHTML = (c + ", " + b + ", " +a);
        }
}        
}

/*
FizzBuzz
*/

function fizzBuzz() {  
    var i;
    i = window.prompt ("Insert an integer for Fizzbuzz", "0")

      if ( i % 3 == 0 && i % 5 == 0 ) {
        document.getElementById("fizz").innerHTML = ("FizzBuzz");
        document.getElementById("buzz").innerHTML = ("FizzBuzz");
      }
      else if ( i % 3 == 0 ) {
        document.getElementById("fizz").innerHTML = ("FizzBuzz");
        document.getElementById("buzz").innerHTML = ("Fizz");
      }
      else if ( i % 5 == 0 ) {
        document.getElementById("fizz").innerHTML = ("FizzBuzz");
        document.getElementById("buzz").innerHTML = ("Buzz");
      }
      else {
        document.getElementById("fizz").innerHTML = ("FizzBuzz");
        document.getElementById("buzz").innerHTML = ("None");
      }
    }

/*
Pyramid Pattern
*/
function displayPyramid (height) {
   var height;
    height = prompt("Insert an integer. Check the console for a results","0")
    for (var i = 1; i <= height; i++) {
      var row = '';
  
      for (var j = 1; j <= i; j++) {
        row += '*';
      }
  
      console.log(row);
    }
  }

/*
Length of a String
*/

function strlength(){
    var txt = window.prompt("Give me a sentence!");
    var size = txt.length;
    document.getElementById("Assign5").innerHTML = ("The string is " + size + " characters long.");
}

/*
Letter Capitalize
*/

 function alternateCase() {
    var txt = prompt("Sentence");
    var chars = txt.toLowerCase().split("");
    for (var i = 0; i < chars.length; i += 2) {
      chars[i] = chars[i].toUpperCase();
    }
    alert(chars.join(""));  
};

/*
Guess the Number
*/


function GTN() {

    var rand = Math.floor((Math.random() * 1000) + 1 );
    var guess;
    var guessCount = 0;
   
    guess = prompt("Guess the number that I am thinking of. It's between 1 and 1000", "0");

    do{
        console.log(rand);
       
        if (guess < rand){
            guessCount += 1;
            guess = prompt("Too low, try again. " +guessCount + " tries. Enter in q to quit.");
        }
            else if (guess > rand) {
                guessCount += 1;
                guess = prompt("Too high, try again. " +guessCount + " tries. Enter in q to quit.");
               }
            else if (guess == "q"){ break;}
            
            else{
                    guess = prompt ("Invalid input. Try again.");
                }

            }
            while(guess != rand);

    if (guess == rand){
        alert("You got it in " +guessCount  +" tries!");
}
    }

/* 
Encryption
*/

function convertUnicode(convertUni){
	let encrText = ""

	for(var i = 0; i < convertUni.length; i+= 1){ 
		encrText += convertUni.charCodeAt(i) 
		encrText += " " 
	}
	
	return encrText; 
}

function decodeUnicode(decodeUni){
	let decryptText = ""
    decodeUni.split(" ");
	for(var i = 0; i < decodeUni.length; i+= 1){ 
        decryptText += String.fromCharCode(decodeUni[i]);
		decryptText += " " 
    }
	
	return decryptText; 
}

function base64Encrypt() {
    // Define the string
    var string = prompt("Give me a sentence to encrypt.");

    // Encode the String
    var encodedString = btoa(string);
    reverse = encodedString.split('').reverse().join('');
    unicode = convertUnicode(reverse);
    alert(unicode); 
}

function base64Decrypt(){
    // Define the string
    var stringd = prompt("What should I decrypt for you?");

    // Decode the String
    decodeUnis = decodeUnicode(stringd);
    alert(decodeUnis);
    reversed = decodeUnis.split('').reverse().join(''); 
    decrypted = atob(reversed);
    alert(decrypted); 
}


