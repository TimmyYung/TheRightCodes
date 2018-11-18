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
Guess the Number
*/

var rand = Math.floor((Math.random() * 1000) );

console.log(rand);
function GTN() {
    var guess;
   
    guess = prompt("Guess the number that I am thinking of", "0")



    do{
        console.log(rand);
        if (guess == rand){
            alert("You got it!");
        }     
        else if (guess < rand){
            guess = window.prompt("Too low, try again");
        }
            else if (guess > rand) {
                guess= window.prompt("Too high, try again");
                }
            }      
    }

while(guess != rand)}