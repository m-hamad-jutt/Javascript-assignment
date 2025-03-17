/* 1=>  Variables and Scope
Declare a variable age and calculate your birth year. Output both.
Declare a variable x inside a function and try to access it outside. What happens? */

let age = 20;
let currentYear = 2025;
let birthYear = currentYear - age;
console.log(birthYear); 

console.log("\n-----------------")

function myFunction() {
    var myName = "Muhammad Hamad";
    console.log("Inside of function access", myName); 
}

myFunction()
// console.log("Outside of function access", myName);  (It is not accessable outsde the function because only var can be accessable outside the {} but here it is a function scoped variable so it cannot be accessable)

console.log("\n-------------------------------------------------------------------")

/* 2=>  Data Types and Operators
Calculate the sum, difference, product, and quotient of two numbers.
Convert a string "123" to a number and back to a string. Print both.
Check if a number is even or odd using the modulo operator. */

let num1 = 50;
let num2 = 20;

console.log("The sum of two numbers is", num1 + num2);
console.log("The difference of two numbers is", num1 - num2);
console.log("The product of two numbers is", num1 * num2);
console.log("The quotient of two numbers is", num1 / num2);

console.log("\n-----------------")

let str = "123";
console.log(str, "is", typeof(str));
console.log(str, "is", typeof(Number(str)));
console.log(str, "is", typeof(String(str)));

console.log("\n-----------------")

let number = 45;
if (number % 2 == 0) {
    console.log(number,"is an even number")
}
else{
    console.log(number,"is an odd number")
}

console.log("\n-------------------------------------------------------------------")

/* 3=>  Control Flow (if-else, ternary, switch)
Write a program that checks if a person is a child, teenager, adult, or senior based on age.
Use a ternary operator to check if a number is positive, negative, or zero.
Simulate a traffic light with a switch statement: "Stop", "Ready", or "Go". */

let personAge = 25;

if (13 < personAge < 18) {
    console.log("The person is a child");
}
else if (personAge == 18){
    console.log("The person is a teeager");
}
else if(18 < personAge < 30){
    console.log("The person is an adult");
}

else{
    console.log("The person is a senior");
}

console.log("\n-----------------")

let digit = 32;
console.log(digit > 0?"Numbr is positive": digit === 0?"Numbr is zero":"Numbr is negative")

console.log("\n-----------------")

let light = "Green";

switch(light){
    case "Red":
        {
            console.log("Stop");
        }
    case "Yellow":
        {
            console.log("Ready");
        }
    case "Green":
        {
            console.log("Go");
        }
}

console.log("\n-------------------------------------------------------------------")

/* 4=>  Loops (for, while, do-while)
Print the numbers 1 to 10 using a for loop.
Create a while loop that asks the user for input until they type "stop".
Print the multiplication table of 5 using a do-while loop. */

for(let a = 1; a<=10; a++){
    console.log(a);
}

console.log("\n-----------------")

let type = "";
while (type !== "stop"){
    type = prompt("Enter an input and write stop for exit:");
}

console.log("\n-----------------")

let i = 1;

do{
    console.log("5 *",i,"=", 5*i);
    i++;
}
while(i<=10);

console.log("\n-------------------------------------------------------------------")

/* 5=>   Functions
Write a greet function that takes a name and prints a greeting.
Create a function that returns the sum of two numbers.
Write a function that returns the highest number from a list of numbers. */

function greeting(){
    let name = prompt("Enter your name:");
    alert("welcome", name);
}
greeting();

console.log("\n-----------------")

function sum(number1, number2){
    return number1 + number2;
}
console.log(sum(45,55));

console.log("\n-----------------")

function highestNumber(){
    let list = [45,32,12,89,54,90];
    return Math.max(...list);
}
console.log(highestNumber());

console.log("\n-------------------------------------------------------------------")

/* 6=>  Arrow Functions
Convert the greet function into an arrow function.
Write an arrow function square that returns the square of a number.
Write an arrow function that returns the first string longer than 5 characters from a list. */

let name = prompt("Enter your name:");
const greeting = (name) => "Welcome, ${name}!";
console.log(greeting(name));

console.log("\n-----------------")

const sqrnumber = (num) => num * num;
console.log(sqrnumber(5));

console.log("\n-----------------")

const firstLongerThanFive = (list) => list.find((string) => string.length > 5);
console.log(firstLongerThanFive(["hello", "world", "python", "javascript"]));

console.log("\n-------------------------------------------------------------------")

/* 7=>  Arrays
Create an array of numbers and sum all the elements using a loop.
Find the longest name in an array of names.
Remove duplicates from an array of numbers manually. */ 

let listNum = [1,2,3,4,5,6,7,8,9,10];
let sumNum = 0;
for(let v=0; v < listNum.length; v++){
    sumNum += listNum[v];
}
console.log(sumNum);

console.log("\n-----------------")

let names = ["John", "Mary", "John", "Jane", "Marysmus", "Jan"]
let longestName = "";
for(let n=0; n < names.length; n++){
    if(names[n].length > longestName.length){
        longestName = names[n];
    } 
}
console.log(longestName);

console.log("\n-----------------")

let numberslist = [2,1,1,5,32,2,24,14,5,1];
function removeDuplicate(numberslist){
    let newlist = [];
    for(let i=0; i < numberslist.length; i++){
        if(!newlist.includes(numberslist[i])){
            newlist.push(numberslist[i]);
        }
    }
    return newlist;
}
console.log(removeDuplicate(numberslist));