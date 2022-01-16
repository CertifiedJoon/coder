let today = new Date();
let birthday = new Date('05/11/2001 11:10:10');

let val;

// All returns number type
val = today.getMonth(); // 0-based month
val = today.getDate();
val = today.getDay(); // 0-based day indexing
val = today.getFullYear(); 
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getTime(); //get seconds passed since 1-1-1970
val = today.getDate();

birthday.setMonth(10);
birthday.setDate(05);
birthday.setFullYear(2022);

console.log(typeof val);
console.log(birthday);