let val;

// Number to String
val = String(555);
val = String(4+4);

// Bool to string
val = String(true);

// Date to string
val = String(new Date());

//Array to String
val = String([1,2,3,4]);

// toString()
val = (5).toString();
val = (false).toString();


// String to number
val = Number('45');
val = Number(true);
val = Number(null);

val = parseInt('100');
val = parseFloat('100.01');

// Type coersion
const val1 = 5;
const val2 = '6';
const sum = val1 + val2;

console.log(sum);
console.log(typeof sum);


console.log(val);
console.log(typeof val);
// console.log(val.length);
console.log(val.toFixed(2));