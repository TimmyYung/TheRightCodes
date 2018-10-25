function test1(){
    var age = prompt("How old are you?");
    var helloPerson = prompt("You don't look " + age + ". Are you sure?");

    if(helloPerson == "No"){
        console.log("hah, He thinks I don't know");
    }
    else if (helloPerson == "Yes"){
        console.log("He didn't do it right");


    }

}