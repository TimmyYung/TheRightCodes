function test1() {
    var age = prompt("How old are you?");
    var helloPerson = prompt("You don't look " + age + ". Are you sure?");

    if(helloPerson == "No"){
        console.log("hah, He thinks I don't know");
    }
    else if (helloPerson == "Yes"){
        console.log("He didn't do it right");

    }
}


/*
Bigger Number Game
*/

function max(){
    var num1, num2;
    num1 = window.prompt("Input the First integer", "0");
    num2 = window.prompt("Input the second integer", "0");
                                                           
    if(parseInt(num1) > parseInt(num2)) 
    { 
    window.alert("The larger of "+ num1+ " and "+ num2+ " is "+ num1+ ".");
        }   
    else
    if(parseInt(num2) > parseInt(num1)) 
    {
    window.alert("The larger of "+ num1+" and "+ num2+ " is "+ num2+ ".");
        }                  
    else
    {
    window.alert("The values "+ num1+ " and "+ num2+ " are equal.");
        }
}


/*
Product of 3 Numbers
*/

function product(){
    var x, y, z;
    x = window.prompt ("Input the First integer", "0")
    y = window.prompt ("Input the Second integer", "0")
    z = window.prompt ("Input the Third integer", "0")
    if (x>0 && y>0 && z>0)
    {
        alert("The sign is +");
    }
    else if (x<0 && y<0 && z<0)
        {
            window.alert("The sign is -");
        }
     else if (x>0 && y<0 && z<0)
        {
            window.alert("The sign is +");
        }
    else if (x<0 && y>0 && z<0)
        {
            window.alert("The sign is +");
        }
     else
        {
            window.alert("The sign is -");
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
            window.alert(a + ", " + b + ", " +c);
        }
        else
        {
            window.alert(a + ", " + c + ", " +b);
        }
}
else if (b>a && b >c)
{
        if (a>c)
        {
            window.alert(b + ", " + a + ", " +c);
        }
        else
        {
            window.alert(b + ", " + c + ", " +a);
        }
}
else if (c>a && c>b)
{
        if (a>b)
        {
            window.alert(c + ", " + a + ", " +b);
        }
        else
        {
            window.alert(c + ", " + b + ", " +a);
        }
}        
}

/*
FizzBuzz
*/

function fizzBuzz() {  
    var i;
    i = window.prompt ("Insert an integer", "0")

      if ( i % 3 == 0 && i % 5 == 0 ) {
        window.alert("FizzBuzz");
      }
      else if ( i % 3 == 0 ) {
        window.alert("Fizz");
      }
      else if ( i % 5 == 0 ) {
        window.alert("Buzz");
      }
      else {
        window.alert("None");
      }
    }

/*
Pyramid Pattern
*/
function displayPyramid (height) {
    for (var i = 1; i <= height; i++) {
      var row = '';
  
      for (var j = 1; j <= i; j++) {
        row += '*';
      }
  
      console.log(row);
    }
  }