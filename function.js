// Function
// -fundamental building block in the program
// -subprogram can ge used multiple times
// -performs a task of calculates a value

// 1. Function declaration
// function name(param1, param2){ body... return; }
// one function === one thing
// naming: doSomething, command, verb
// e.g. createCardAndPoint -> createCard, createPoint
// function is object in JS
function printHello() {
    console.log('Hello');
}
printHello();

function log(massage){
    console.log(massage);
}
log('Hello pilhwan');
log(1234);

// 2. Parameters
// premitive parameters: passed by value
// object parameters: passed by reference
function changeName(obj){
    obj.name = 'coder';
}
const pilhwan = {name: 'pilhwan'}
changeName(pilhwan);
console.log(pilhwan);

// 3. Default parameters (added in ESS6)
function showMessage(message, from = 'unknown'){
    // if(from === undefined){
    //     from = 'unknown';
    // }
    console.log(`${message} by ${from}`);
}
showMessage('Hi!');

// 4. Rest parameters (added in ES6)
function printAll(...args){
    // for (let i=0; i < args.length; i++){
    //     console.log(args[i]);
    // }

    // for(const arg of args){
    //     console.log(arg);
    // }

    args.forEach((arg)=>console.log(arg));
}
printAll('dream','coding','ellie','pilhwan');

// 5.Lacal scope
let globalMessage = 'global'; // local variable
function printMessage(){
    let message = 'hello';
    console.log(message); //local variable
    console.log(globalMessage);
    function printAnother(){
        console.log(message);
        let childMessage = 'Hello';
    }
    // console.log(childMessage); //error
    return undefined;
}
printMessage();

// 6. Return a value
function sum(a, b){
    return a + b;
}
// const result = sum(1, 2);
console.log(`sum: ${sum(1,2)}`);

// 7. Early return, early exit

// bad
function upgradeUser(user){
    if(user.point > 10){
        // long upgrade logic...
    }
}
// good
function upgradeUser(user){
    if(user.point <= 10){
        return;
    }
    // long upgrade loginc...
}

// first-class function
// founctions are treated like any ather variable
// can be assigned as value to variable
// can be passed as an argument to other functions.
// can ge returned by another function

// 1. function expression
// a function declaration can ge called earlier than it is defiend. (hoisted)
// a function expression is created when execution reaches it.
const print = function(){  //anonymous function
    console.log('print');
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1,3));

// 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo){
    if(answer === 'love you'){
        printYes();
    }else{
        printNo();
    }
}
// anonymous function
const printYes = function(){
    console.log('Yes!');
};
// named function
// better debugging in debugger's stack traces
// recursions
const printNo = function print(){
    console.log('No!');
}
randomQuiz('wrong',printYes,printNo);
randomQuiz('love you',printYes,printNo);

// Arrow function
// always anonymous
// const simplePrint = function(){
//     console.log('simplePrint');
// }

const simplePrint = () => console.log('simplePrint!');
const add = (a, b) => a + b;
const simpleMultiply = (a, b) => {
    // do something more
    return a * b;
}

// IIFE: Immediately Invoked Function Expression
(function hello(){
    console.log('IIEF');
})();
