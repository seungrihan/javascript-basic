'use strict'
// Function
// - fundamental building block in the program
// - subprogram can be used multiple times
// - performs a task or calculate a value

// 1. Function declaration
// fuction name(param1, param2){ body... returns }
// one function === one thing
// naming: doSomething, command, verb
// e.g. createCardAndPoint -> creatCard, createPoint
// function is object in JS

function printHello() {
  console.log('hello');
}
printHello();

function log(message) {
  console.log(message);
}
log('hello@')
log(1234)

// 2. Parameters
// premitive paramters: passed by value
// object paramters: passed by reference

function changeName(obj) {
  obj.name = 'coder';
}
const seungri = { name: 'seungri' };
changeName(seungri);
console.log(seungri);

// 3. Default parameters (added in ES6)
function showMessage(message, from = 'unknown') {
  console.log(`${message} by ${from}`);
}
showMessage('Hi');

// 4. Rest parameters (added in ES6)
function printAll(...args) {
  // for loop
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }
  // for of
  for (const arg of args) {
    console.log(arg);
  }
  // forEach
  args.forEach((arg) => console.log(arg));
}
printAll('dream', 'coding', 'seungri');

// 5. Local scope
let globalMessage = 'global'; //global variable
function printMessage() {
  let message = 'hello';
  console.log(message); // local variable
  console.log(globalMessage);
  function printAnother() {
    console.log(message);
    let childMessage = 'hello';
  }
  // console.log(childMessage);
}
printMessage();
// console.log(message);

// 6. Return a value
function sum(a, b){
  return a + b;
}
const result = sum(1, 2);
console.log(`sum: ${sum(1, 2)}`);

// 7. Early return, early exit
// bad

function upgreadeUser(user) {
  if (user.point <= 30) {
    return;
  }
  // long upgrade logic...
}

function upgreadeUser(user) {
  if (user.point <= 10) {
    return;
  }
  // long upgrade logic...
}

// First-class function
// functions are treated like any other variable
// can be assigned as a value to variable
// can be passwed as an argument to other functions.
// can be returned by another fuction

// 1. Function expression
// a function declare can be called earlier than it is defined. (hoisted)
// a function expression is created when the execution reaches it.

const print = function() { // anonymous function
  console.log('print');
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));

// 2. Callback function using fuction expression
function randomQuiz(answer, printYes, printNo) {
  if (answer === 'love you'){
    printYes();
  } else {
    printNo();
  }
}
// anonymous function
const printYes = function() {
  console.log('yes');
};

// named fuction
// better debugging in debugger's stack traces
// recursions
const printNo = function print() {
  console.log('no!');
};

randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

// Arrow fuction
// always anonymous
const simplePrint = function () {
  console.log('simplePrint');
};

const simplePrint = () => console.log('simplePrint');
const add = (a, b) => a + b;
const simpleMultiply = (a, b) => {
  // do something more
  return a + b;
};

// IIFE : Immediately Invoked Function Expression
(function hello() {
  console.log('IIFE')
})();

// Fun quiz time❤️
// function calculate(command, a, b)
// command: add, substract, divide, multiply, remainder

function calculate(command, a, b) {
  switch (command) {
    case 'add':
      return a + b;
    case 'substract':
      return a - b;
    case 'divide':
      return a / b;
    case 'multiply':
      return a * b;
    case 'remainder':
      return a % b;
    default:
      throw Error('unknown command');
  }
}
console.log(calculate('add', 2, 3));