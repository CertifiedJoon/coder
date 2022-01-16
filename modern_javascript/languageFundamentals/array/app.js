const numbers = [12,34,52,2,34,2,12,3];
const numbers2 = new Array(2,23,34,23,55,32,34,2);
const fruits = ["Orange", "Pear", "Melon", "Apple"];
const mixed = ["Orange", {a:0, b:1}, new Date(), null, undefined];

let val;

val = numbers.length;
val = Array.isArray(numbers2);
val = numbers[2];

//Array methods
numbers.push(2);
numbers.unshift(1);
val = numbers.pop();
val = numbers.shift();
const spliced = numbers.splice(1,3);
numbers.reverse();

//sorting
val = fruits.sort(); // takes string
val = numbers.concat(numbers2);
val = val.sort(function(x,y) {
  return x - y });

// find with auxilary function
function under50(num) {
  return num < 50
}
val = val.find(under50);
//Output
console.log(spliced);
console.log(numbers);
console.log(val);