//Very Easy//

var s = 33;
var d = 11;

console.log(`The difference between ${s} and ${d} is ${s-d}`);


//Easy//

var opersonName = "dina";
var personName = "sawyer";

// console.log(personName.length > opersonName.length)

console.log( "The name " + personName + " is longer than " + opersonName + " by " + (personName.length - opersonName.length) + " characters.")


//Medium//
var inp = prompt("Enter Something");

if (inp != null && inp.length > 0) {
  
  if (inp === inp.toLowerCase()) {
    console.log("This user was whispering.")
  }
  else if (inp === inp.toUpperCase()){
    console.log("This user was shouting.")
      } 
  else { 
    console.log("This user was talking normally.")
    }
  }
 

//Hard//
function add(a,b){
  return a + b ;
}
function subtract(a,b){
  return a - b;
}
function multiply(a,b){
  return a * b;
}
function divide(a,b){
  return a / b;
}
 



//Very Hard//
var x = prompt("Enter a number.");
var y = prompt("Enter an operator:either +, -, * or /");
var z = prompt("Enter another number");
var num1 = parseInt(x);
var num2 = parseInt(z);

if ( y === "+"){
  console.log( x + ("+") + z + ("=")  + add(num1,num2));
}
if ( y === "-"){
  console.log(x + ("-") + z + ("=")+ subtract(num1,num2));
} 
if ( y === "/"){
  console.log( x + ("/") + z + ("=") + divide(num1,num2));
}
if ( y === "*"){
  console.log( x + ("*") + z + ("=") + multiply(num1,num2));
}
