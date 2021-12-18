// var name = 'John Doe';
// console.log(name)
// name = 'Steve Smith';
// console.log(name)

// // Instantiating variable
// var greeting;
// console.log(greeting);
// greeting = 'Hello';
// console.log(greeting);

// // Variable name convention
// var $name = 'John'; // only use it when using jquery
// var firstName = 'John'; // use camelCase
// var first_name = = 'John'; // Underscore
// var FirstName = 'John'; // PascalCase

// let name = 'John Doe';
// console.log(name);
// name = 'Steve Smith';
// console.log(name);

// Const
// const name = 'John';
// console.log(name);
// name = 'Sara';
// const greeting; // should be initiailized

const person = {
  name: 'John',
  age: 23
}

person.name = 'Sara' // Can reassign data, but cannot reassign the object itself
console.log(person);

const numbers = [1,2,3,4,5,6,7];
numbers.push(8); // Can reassign data, but cannot reassign the object itself
console.log(numbers)