// 1. Use strict
// added is ES 5
// use this for Valina Javascript.

'use strict';

// 2. Variable, rw(read/write)
// let (added in ES6)
let globalName = 'Global name';
{
    let name='PilHwan';
    console.log(name);
    name='hello';
    console.log(name); 
    console.log(globalName); 
}
console.log(name)
console.log(globalName);

// var (don't never use this!)
// var hoisting (move declaration from bottom to top)
// has no block scope
console.log(age);
age = 4;
console.log(age);
var age;
{
    ag = 44;
    var ag;
}
console.log(ag);

// 3.Constant, r(read only)
// use const whenever possible.
// only use let if variable needs to change.
const daysInWeek = 7;
const maxNumber = 5;
console.log(daysInWeek);
console.log(maxNumber);
// Note!!
// Immutable data types : premitive types, frozen objects (i.e. object.freexe())
// mutable data types: all objects by default are mutable in JS
// favor immutable data type always for a few reasons:
// - security
// - thread safety
// - reduce human mistakes

// 4. Variable types
// primitive, single item number, string, boolean, null, undefiend, symbol
// object, box container
// function, first-class function
const count = 17; //integer
const size = 17.1; //decimal number
console.log(`value: ${count},type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// number - speicla  numesic values: infinity, -infinity, NaN
const infinity = 1/0;
const negativeInfinity = -1/0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// bigInt (fairly new, don't use it yet)
const bigInt = 1234567890123456789012345678901234567890n; //over (-2**53)~(2**53)
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);
Number.MAX_SAFE_INTEGER;

// string
const char = 'c';
const names = 'brendan';
const greeting = 'Hello' + names;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob =`hi ${names}!`; // template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);

// boolean
// false: 0, null, undefine, NaN, ''
// true: any other value
const canRead = true;
const test = 3<1; //false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined
let x;
console.log(`value: ${x}, type: ${typeof x}`);

// symbol, create unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2);
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);

// object, real-life object, data structure
const pilhwan = {name: 'PilHwan', age: 44};
console.log(pilhwan.name);
console.log(pilhwan.age);
pilhwan.age = 22;
console.log(pilhwan.age);

// 5.Dynamic typing: dynamically typed language
let text ='hello';
console.log(text.charAt(0));
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`);