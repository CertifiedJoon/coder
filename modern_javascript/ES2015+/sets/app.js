const set = new Set();

set.add(true);
set.add(1);
set.add('true');
set.add({yes: true});

console.log(set);
console.log(set.size);
console.log(set.has(1));
console.log(set.has(1+0));
console.log(set.has({yes: true})); // Objects are referential

set.delete(1);
console.log(set.size);
console.log(set.has(1));

for (let item of set) {
    console.log(item);
}

set.forEach((item) => {
    console.log(item);
})

const setArr = Array.from(set);
console.log(setArr);