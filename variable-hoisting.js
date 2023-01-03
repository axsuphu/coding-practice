//-----------------VARIABLE HOISTING---------------------
// console.log(`sumFunc(1, 2) => ${sumFunc(1, 2)}`);
// console.log(`sumConst(1, 2) => ${sumConst(3, 4)}`);

// function sumFunc(a, b) {
//   return a + b;
// } //functions will be hoisted

// const sumConst = (a, b) => a + b; //functions using const and let will not be hoisted

//var keyword is hoisted as well.
//it will first create an initialization where the var is equal to undefined

// console.log(a); //undefined

// var a = 2;

//functions create  new execution context
//compile phase -creates space in memory for all variable and function declarations, allowing you to access them in your code before they're actually written
//only declarations are hoisted, not assignments
//declarations us 'undefined' as placeholders
//function declarations have their whole statement hoisted

//--------------DIFFERENCE BETWEEN VAR, CONST, LET------------------

//block-scoped vs function-scoped
//where the variable is declared

//blocked-scoped - a block would be an if statement or a loop. variable would only be availible within that block and not outside of it
//function-scope - cannot use outside of a function; has wider scope
// if (true) {
//   var varVariable = "This is true";
// }

// console.log(varVariable);

// if (true) {
//   let letVariable = "This is true";
// }

// console.log(letVariable);

//var can be redeclared, whereas let or const will throw error 'has already been declared'
//var's downfall is devs can accidentally overwrite variables
//let will take care of that problem

//const and let will not hoist so they will throw errors if trying to use variable before it is declared

//const vs let
//const does not allow you to redeclare a variable

// const constVar = 1;
// let letVar = 1;

// constVar = 2; //Assignment to constant variable.
// letVar = 2;

// console.log(constVar);
// console.log(letVar);

//const will allow to change values of properties in objects
const constVar = { name: "Bob" };
let letVar = 1;

constVar.name = "Sally";

console.log(constVar);
console.log(letVar);
