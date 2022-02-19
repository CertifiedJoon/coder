// Arrow functions

// One line funciton does not requier braces
// const sayHello = () => console.log('Hello.');

// One line returns
// const sayHello = () => 'Hello.';

// Return Object Literals requires braces
// const sayHello = () => ({msg:'Hello.'});

// Single Parameter does not require braces
// const sayHello = firstName => `Hello ${firstName}.`;

// Multiple Parameter needs paranthesis
// const  sayHello = (firstName, lastName) => `Hello ${firstName} ${lastName}.`;

// console.log(sayHello('John', 'Doe'));

const names = ['John', 'Jane', 'James'];

// // Traditional
// const nameLength = names.map(function(name) {
//     return name.length;
// })
const nameLengths = names.map(name => name.length);
console.log(nameLengths);