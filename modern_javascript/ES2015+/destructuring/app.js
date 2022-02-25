// Array destrucuturing
let a, b;
[a, b] = [100, 200] // works like python unpack
console.log(a, b);

// Rest pattern
[a, b, ...rest] = [1,2,3,4,5,6];
console.log(a, b, rest);

// Object destructurizing
({b,b} = {a: 100, b: 200});
console.log(b,b); // matches the key and copy

({a,b, ... rest} = {a:1, b:2, c:3, d:4, e:5});
console.log(a,b , rest);