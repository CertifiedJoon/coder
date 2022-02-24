//Iterator
function nextIterator(arr) {
    let nextIndex = 0;
    return {
        next : function () {
            return nextIndex < arr.length ?
            {value : arr[nextIndex++], done: false} :{done : false}
        }
    }
}

const names = ['John', 'James', 'Jack'];
const iter = nextIterator(names);

console.log(iter.next().value);
console.log(iter.next().value);
console.log(iter.next().value);
console.log(iter.next());

// Generator
function* generateName() {
    yield 'John';
    yield 'James';
    yield 'Jack';
}

const sayName = generateName();

console.log(sayName.next().value);
console.log(sayName.next().value);
console.log(sayName.next().value);
console.log(sayName.next());