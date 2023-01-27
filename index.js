//Variabels
/*

let firstname ="Jure";
let age = 20;
let student = true;

console.log( "Hello" , firstname);
console.log("You are: " , age);
console.log("Enroled: " , student);

document.getElementById("p1").innerHTML = "Hello " + firstname;
document.getElementById("p2").innerHTML = "You are " + age + " Years old";
document.getElementById("p3").innerHTML = "Enrolled: " + student;


*/

////////////////////////////////////////

//User input
/*

let username;
document.getElementById("myButton").onclick = function(){

    username = document.getElementById("myText").value;
    console.log(username);
    document.getElementById("myLabel").innerHTML = username;
}

*/


////////////////////////////////////////

//Type Conversion
/*
let age = window.prompt("How old are you?");

console.log(typeof age);
age = Number(age);
console.log(typeof age);
age += 1;

console.log("Happy Birthday! You are", age, "years old");


let x;
let y;
let z;

x= Number("3.14");
y = String(3.14);
z = Boolean("");//if something is inside it wil show true else false

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);

*/

////////////////////////////////////////

// Constant

/*

const PI = 3.14159;
let radius;
let circumference;

radius = window.prompt("Enter the radious of the circle");
radius = Number(radius);

circumference = 2 * PI * radius;

console.log("The circumference is:", circumference);
*/

////////////////////////////////////////

// Math

/*

let x = 3.14;

x = Math.round(x); //floor rounds always down, ceil rounds up, pow goes to the power of second number, sqrt is square root, abs absolut value, max maximum, min minimum

console.log(x);

*/

////////////////////////////////////////

//hipotenuza program

/*

let a;
let b;
let c;

document.getElementById("submitButton").onclick = function(){

    a = document.getElementById("aTextBox").value;
    a=Number(a);

    b= document.getElementById("bTextBox").value;
    b=Number(b);

    c = Math.pow(a, 2) + Math.pow(b, 2);
    c= Math.sqrt(c);

    document.getElementById("cLabel").innerHTML = "Side C:" +c;

}

*/

////////////////////////////////////////


//counter program
/*
let count = 0;

document.getElementById("decrease").onclick = function(){

    count-=1;
    document.getElementById("countLabel").innerHTML = count;
}

document.getElementById("reset").onclick = function(){

    count = 0;
    document.getElementById("countLabel").innerHTML = count;
}

document.getElementById("increase").onclick = function(){

    count+=1;
    document.getElementById("countLabel").innerHTML = count;
}
*/
////////////////////////////////////////

