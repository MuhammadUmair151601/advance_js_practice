// ********************************************Lecture #1
// 1st version of js was ECMAscript 1997
// european computer manufacturing association:
// now ECMAscript 5.1 is used:
// in 2015 ES6 was the major update which used the oops concept in js:
// till now ES9 is the latest updated version of js:
// we will cover regular expressions:
// new advance events and web APIs
// DOM new methods and properties:

// ********************************************Lecture #2
// Let and const variables:
// Let and const were introduced in ES6 version while the var was the old one:
// in case of var we can re declare it in the code:
// in case of let we cannot re declare the value with the same name but we can assign diff value:
// in case of const we cannot change anything:
// in terms of scope:
// var has a global scope we can access it anywhere in the code:
// let can be used in specific part and cannot be accessed outside then:-->  it is block scope:
// const has the same condition we cannot access it outside the block of the code:

// ******************************************Lecture #3
// template  strings or template literals:
// they are introduced in ES6 version of js:
// back tick ` is used and $ and {} are used for this method:
// example:
// var a = "ali";
// document.write(`Hello ${a}`);
// console.log(`Hello ${a}`);
// while writting it simply makes the code very complex and difficult to understand usin concatination
// we can simply use the multiple strings in single line without concatination signs adn used ${} signs for the variables:
// Example:
// var a = "Students";
// console.log(`Hello ${a} how was the class today?`)
// we can use multiople variables as well in it:
// we can use quotes inside it as well
// we can use functions for it as well:
// var firstName = "M.";
// var lastName = "Umair";
// function fullName(firstName, lastName){
//     return `${firstName} ${lastName}`;
// }
// console.log(fullName(firstName, lastName));
// OR
// console.log(`hello ${fullName(firstName, lastName)}`);

// ****************************************Lecture #4
// Arrow functions:
// simply we can write a code as:
// let hello = function(){
//     console.log("hello");
// }
// hello();
// but in arrow function we can write this function as:
// let hello = ()=> console.log("Hello");
// hello();
// another example:
// let welcome = (name) => {return `Hello and welcome ${name}`;}

// console.log(welcome("ahmed"));

// let finish = (name) => { return `${name} has finished the class`};
// console.log(finish("Awais"));

// *****************************Lecture #5
// Rest operator:
// introduced in ES6 version of JS and for this concept we need to be clear about using the functions with multiple arguments:
// // when we pass different arguments to the same function like addition case we use rest operator and for in loop for that:
// // Example:
// function sum(name, ...args){
//     console.log(arguments);
//     document.write(`Hello ${name}`)
//     let sum = 0;
//     for (let i in args){
//         sum += args[i];

//     }
//     document.write(sum);
// }
// sum("the sum is :",23,434);

// **********************************Lecture #6
// spread operator :
// if we pass an array in the function calling time in rest operator case:
// arr = [12,23,34,4]
// like sum ("ali", arr)
// in this case it will provide an error:
// using spread operator the array spreads and are considered as separate:
// we will use sum ("ali",...arr);
// Example:
//     function sum(name, ...args){
//     document.write(`Hello ${name}`)
//     let sum = 0;
//     for (let i in args){
//         sum += args[i];
//     }
//     document.write(sum);
// }
// var arr = [10,10,10,10]
// sum("the sum is :",...arr);
// In simple words:
var arr = [10,10,10,10];
console.log(...arr);
// instead of printing array it will separately print the elements:
