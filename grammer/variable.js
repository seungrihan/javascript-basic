// 1. Use strict
// add in ES 5
// use this for Valina Javascript

'use strict';

// 2. Variable, rw(read/write)
// let (added in ES6)

let globalName = 'global name'; // Global variable
{
    //block scope # Local variable
    let name = 'seungri';
    console.log(name);
    name = 'hello';
    console.log(name)
    console.log(globalName);
}
console.log(name)
console.log(globalName);

// var (don't ever use this!)
// var hosisting (move declaration from bottom to top)
// has no block scope

// 3. Constant, r(read only)
// use const whenever possible.
// only use let if variable needs to change.


const daysInWeek = 7;
const masNumber = 5;

// Note!
// Immutable date types: primitive types. frozen object (i.e. object.freeze())
// Mutable data types: all object by default are mutable in JS
// favor immutable data type always for a few reasons:
// - security
// - thread safety
// - reduce human mistakes

// 4. Variable types
// primitive, single item: number, string, boolean, null, underfied, symbol 
// object, box container
// function, first-class-function

// number
const count = 17;
const size = 18.1;

console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// number - special numeric values: infinity, -infinity, NaN
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;

console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// bigInt (fairly new, dont't use it yet)
// const bigInt = 12345678901234567890123456789012345678901234567890n;
// console.log(`value: ${bigInt}, type: ${typeof bigInt}`);
Number.MAX_SAFE_INTEGER;

// string
const char = 'c';
const breandan = 'breandan';
const greeting = 'hello ' + breandan;
console.log(`value: ${greeting}, type:${typeof greeting}`);
const helloBob = `hi ${breandan}!`;
console.log(`value: ${helloBob}, type:${typeof helloBob}`);

// boolean 
// false: 0, null, undefined, NaN, ''
const canRead = true;
const test = 3 < 1;
console.log(`value: ${canRead} type:${typeof canRead}`);
console.log(`value: ${test}, type:${typeof test}`);

// null
let nothing = null;
console.log(`value: ${nothing}, type:${typeof nothing}`);

// undefined
let x;
console.log(`value: ${x}, type:${typeof x}`);

// symbol, create unique identifiders for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2)

const gsymbol1 = Symbol.for('id');
const gsymbol2 = Symbol.for('id');
console.log(gsymbol1 === gsymbol2); // true
console.log(`value: ${symbol1.description}, type:${typeof symbol1.description}`);

// object, real-life object, data structure
const seungri = { name: 'seungri', age: 20 };

// 5. Dynamic typing: dynamically typed language
let text = 'hello';
console.log(text.charAt(0));
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' / '2'
console.log(`value: ${text}, type: ${typeof text}`);