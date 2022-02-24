
let re; 
re = /hello/
re = /hello/i; // i makes case insensitive;
re = /hello/g; // search for all match; g for global
// console.log(re);
// console.log(re.source);

// // exec() equivalent of find
// const result = re.exec('hello world');
// console.log(result);
// console.log(result[0]);
// console.log(result.index);
// console.log(result.input);

// //  test() equivalent of in.. it is case sensitive
// const result = re.test('Hello World');
// console.log(result);

// match() return result array or null
// const str = 'hello There, hello';
// const result = str.match(re);
// console.log(result);

// // search() return index of first match, if not returns -1
// const str = 'hello there';
// const result = str.search(re);
// console.log(result);


// replace() return a new string 
const str = 'hello there';
const newStr = str.replace(re, 'hi');
console.log(newStr);