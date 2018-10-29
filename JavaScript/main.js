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

