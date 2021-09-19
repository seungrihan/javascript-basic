'use strict'

// 1. String concatenation
console.log('my' + ' cat');
console.log('1' + 2);
console.log(`string literals 1 + 2 = ${1 + 2}`);

// 2. Numeric operator
console.log(1 + 1); // add
console.log(1 - 1); // substract
console.log(1 / 2); // divide
console.log(1 * 1); // multiply
console.log(5 % 2); // remainder
console.log(2 ** 3); //exponentation

// 3. Increment and decrement operator
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1;
// preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);
const postIncrement = counter++;
// postIncrement = counter;
// counter = counter + 1;
console.log(`preIncrement: ${postIncrement}, counter: ${counter}`);
const preDecrement = --counter;
console.log(`preDecrement: ${preDecrement}, counter: ${counter}`);
const postDecrement = counter--;
console.log(`postDecrement: ${postDecrement}, counter: ${counter}`);

// 4. Assignment operators
let x = 3;
let y = 6;

x += y; // x = x + y
x -= y; // x = x - y
x *= y; // x = x * y
x /= y; // x = x / y

// 5. comparison operators
console.log(10 < 6); // less than
console.log(10 <= 6); // less than or equal
console.log(10 > 6); // greater than
console.log(10 >= 6); // greater than or equal

// 6. Logical operators: || (or), && (and), ! (not)
const value1 = false;
const value2 = 4 < 2;

// || (or), finds the first truthy value
console.log(`or: ${value1 || value2 || check()}`);

// && (and), finds the first falsy value
console.log(`and: ${value1 && value2 && check()}`);

// often used to compress long if-statement
// nullableObject && nullableObject.something

function check() {
  for (let i = 0; i < 10; i++) {
    //wasting time
    console.log('😱');
  }
  return true;
}

// ! (not)
console.log(!value1);

// 7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// == strict equality, no type conversion
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// object equality by reference
const seungri1 = { name: 'seungri' };
const seungri2 = { name: 'seungri' };
const seungri3 = seungri1;
console.log(seungri1 == seungri2);
console.log(seungri1 === seungri2);
console.log(seungri1 === seungri3);

// equality - puzzler
console.log(0 == false); // true
console.log(0 === false); // false
console.log('' == false); // true
console.log('' === false); // false
console.log(null == undefined);
console.log(null === undefined);

// 8. conditional operators: if
// if, else if, else
const name = 'seungri';
if (name === 'seungri') {
  console.log('Welcome, Seungri');
} else if (name == 'coder') {
  console.log('You are amazing coder');
} else {
  console.log('unknown');
}

// 9. Ternary operator: ?
// condition ? value1 : value2
console.log(name === 'seungri' ? 'yes' : 'no');

// 10. Switch statement
// use for multiple if cheocks
// use for enum-like value check
// use for mutiful type checks in TS

const browers = 'IE';
switch (browers) {
  case 'IE':
    console.log('go away');
    break;
  case 'Chrome':
  case 'FireFox':
    console.log('love you!');
    break;
  default:
    console.log('same all!');
    break;
}

// 11. Loops
// while loop, while the condition is truthy
// body case is executed.

let i = 3;
while (0 < i) {
  console.log(`while: ${i}`);
  i--;
}

// do while loop, body code is excuted first,
// then check the condition.

do {
  console.log(`do while: ${i}`);
  i--;
} while (0 < i);

// for loop, for(begin; condition; step)
for (i = 3; i > 0; i--) {
  console.log(`for: ${i}`);
}

for (let i = 3; i > 0; i -= 2) {
  // inline variable declaration
  console.log(`inline variable for: ${i}`);
}

// nested loops
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    console.log(`i: ${i}, j: ${j}`);
  }
}

// break, continue
// Q1. iterate from 0 to 10 and print only even numbers
// use (continue)
for (let i = 0; i < 10; i++) {
  if (i % 2 == 1) {
    continue;
  }
  console.log(`Q1. anwer is: ${i}`);
}

// Q2. iterate from 0 to 10 and print numbers until reaching 8
// (use break)
for (let i = 0; i < 10; i++) {
  if (i > 8) break;
  console.log(`Q2. anwer is: ${i}`);
}