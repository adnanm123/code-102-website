let x = 5;
let y = 20;
let z = x + y;

// STRING CONCATENATION
let message = "The value of z is " + z; // string plus variable equals string
console.log(message);
console.log(5+5); // number plus number equals number --> 10
console.log(5 + "5"); // number plus string equals string --> "55"
console.log("Hello" + " " +"world"); //string plus string plus string equals string --> hello world

// ARITHMETIC OPERATORS
x = x+5; // x is assigned the value of what it was before plus 5 --> evaluates to 10
x += 5; // x is assigned the value of what it was before plus 5 --> evaluates to 15

console.log("the value of x is: " + x) // prints our message to the console with the value of x
x -= 3; // x is assigned the value of what it was before minus 3 --> evaluates to 12
console.log("the value of x after x -= 3 is: " + x) // prints our message to the console with value of x
x++; // short-hand for adding 1
x--; // short-hand for subtracting 1

console.log(5 + 5 + "hello world"); // does the math first, then adds the string --> 10hello world

// COMPARISON OPERATORS
console.log(5 <= 5); // is 5 less than OR equal to 5 ? TRUE

// LOGICAL OPERATORS
// AND --> && --> both must be true for the expression to evaluate to true
console.log(5 < 10 && 10 > 1); 
//           true  && true // are BOTH true? TRUE

// OR --> || --> one OR the other must be true for the expression to evaluate to true
console.log(5>10 || 10>1); 
//         false || true // is one OR the other true? TRUE

// NOT --> ! --> basically the opposite
console.log(!true); // what is NOT true? FALSE

let password = "1234";
console.log(password == "password");
//           "1234"  == "password" // false
console.log(password != "password");
//          "1234"   != "password" // true



// ------------------------------------------------------------

// built in JS functions (or methods);
// alert("Our message goes here");
// console.log();
// document.write();
// prompt();

// Declaring or defining a function
// function name(optional parameters){code you want to happen when this function runs;}

// function name(parameters){
//   code you want to happen when this function runs;
// }

function addTwoNumbers(num1, num2){ // DECLARING/DEFINING <-- MAKING THE RULE/COMMAND
  // let number1 = 5;
  // let number2 = 42;
  let sum = num1 + num2;
  console.log(sum);
  return sum;
}

// // INVOKE or CALL our function <-- USING IT

// let myNewNumber = addTwoNumbers(17, 258);
// let myOtherNumber = addTwoNumbers(1, 45678);

// addTwoNumbers(myNewNumber, myOtherNumber);

// // *** Data Types ***
// // string --> surrounded with single or double quotation marks --> Example: 'words go in here'
// // number --> no quotation marks --> Example: 42
// // boolean --> true OR false 

// //-----------------------------------------------------------------------------------------------------

// // *** Declaring/Defining a variable ***
// // let <-- creating a variable that can be changed
// // const <-- constant, can NOT be changed

// // assignment operator is the = sign, it gives value to the variable

// // declaring a variable called myContainer AND assigning it the value of a string that says 'hello'
// let myContainer = 'Hello';

// // declaring a new variable called myOtherContainer AND assigning it the value of a string that says 'class'
// let myOtherContainer = 'class';

// // declaring a new variable called myName and giving it the value of "Kassie"
// // the value of this variable can NOT be changed later
// const myName = "Kassie"; 

// //-----------------------------------------------------------------------------------------------------

// // *** JavaScript built in commands ***

// // console.log() <-- whatever is in the () will print to the developer console

// let myAge = 34; // declare a variable and assign it the value 34
// console.log(myAge); // prints the value of the variable myAge to the developer console in browser
// myAge = 35; // re-assign the value of this variable to the number 35

// // alert() <-- pops up an alert box with the message we 
// alert("Hello everyone!"); // pop up box that says "Hello everyone!"

// // prompt() <-- pops up a message to the user and gives them the ability to provide input

// // document.write("I LIKE TURTLES") <-- use JavaScript to write content to your HTML document



// // *** CONDITIONAL LOGIC ***

// // if(this thing is true){do this} else if (this thing is true) {do this} else {do this}

// // 
// // if(this is true){                // check this condition first, is it true?
// //   execute this code              // if yes, do this
// // } else if (this thing is true){  // if the previous thing was false we check if THIS is true
// //   execute this code              // if yes, do this
// // } else {                         // otherwise, for literally anything else,
// //   execute this code              // do this 
// // }


// // alert() <-- pops up an alert box with the message we 

function greeting(){
  alert("Hello everyone!"); 
}

greeting();

function userName(){
  const user = prompt("What is your name?"); 
  console.log(user);
  return userName;
}

let user =  userName();

function nameUser(){
  if (user == "Adnan"){
    document.write("Welcome! ");
  } else if (user == "David") {
    document.write("Hi " + user + "!");
  }else if (user == "Luke") {
    document.write("Hi " + user+ "!");
  } else if (user == "Kassie") {
    document.write("Hi " + user + "!");
  } else if (user == "Dexter") {
    document.write("Hi " + user + "!");
  } else if (user == "Tonya") {
    document.write("Hi " + user + "!<br>");
  }
  else {
    document.write("Welcome! ");
  }
}


function coding(){
  document.write("This is my website! ");
}


 
// // The code prompts the user to answer whether they like sports, stores their 
// // response in the variable sport, and displays a pop-up alert message based on 
// // their answer ("Great!" if they answer "yes" and "Booo!" if they answer "no"). 
// // The user's input is also logged to the console.

function userSport(){
  const sport = prompt("Do you like sports? yes or no?");
  console.log(sport);
  if (sport.toLowerCase() === "yes") {
    alert("Great!");
    const favoriteSport = prompt("What is your favorite sport?");
    console.log(favoriteSport);
  } else if (sport.toLowerCase() === "no") {
    alert("Booo!");
  }
}

userSport();


