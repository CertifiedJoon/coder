const firstName = 'Joonyoung';
const lastName = 'Moon';
const age = 20;
const str = 'Hello There, My Name is Joon';
let val;

// Concatenation
val = firstName + ' ' + lastName;

// Append
val = 'Joonyoung  ';
val += 'Moon'

val = 'Hello My Name is ' + firstName + ' and I am ' + age;

// Escaping;
val = 'That\'s awesome, i can\'t wait';

// Length
val = firstName.length; // this is a property! not a function;

// concat method
val = firstName.concat(' ', lastName); // ''.join in python

// change case
val = firstName.toUpperCase();
val = firstName.toLowerCase();

// indexing
val = firstName[0];

// indexOf(), charAt()
val = firstName.indexOf('o'); // finds the first occurence
val = firstName.lastIndexOf('o'); // finds the last occurence
val = firstName.charAt(firstName.length - 1); // does not have negative indexing

// substring()
val = firstName.substring(0,4);

// slice()
val = firstName.slice(-3);
val = firstName.slice(2,4);

// split()
val = str.split(' '); // split string by space and store in array.


// replace()
val = str.replace('Hello', 'fuck off'); // returns new instance

// includes()
val = str.includes('Hello');
console.log(val);









