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
log('Hello log');
log(1234);

// 2. Parameters
// premitive parameters: passed by value
// object parameters: passed by reference
function changeName(obj){
    obj.name = 'coder';
}
const pilhwan = {nema: 'pilhwan'}
changeName(pilhwan);
console.log(pilhwan);