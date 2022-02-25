// const sym1 = Symbol();
// const sym2 = Symbol('sym2'); // we pass an identifier to constructor

// console.log(sym2);

// console.log(Symbol('123') === Symbol('123'));
// console.log(Symbol('123') == Symbol('123')); // both returns false

const KEY1 = Symbol('first');
const KEY2 = Symbol('second');

const myObj = {};
myObj.KEY1 = 'prop';
myObj[KEY2] = 'prop'; // use KEY2 as a property
console.log(myObj);

// Symbols are not enumerable
for (let i in myObj) {
    console.log(`${i} : ${myObj[i]}`)
}

// Symbols are ignored by JSON method
console.log(JSON.stringify(myObj));