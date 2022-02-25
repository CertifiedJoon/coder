const key1 = 'some string',
key2 = {}, 
key3 = function() {};

const map = new Map();

map.set(key1, 'val1');
map.set(key2, 'val2');
map.set(key3, 'val3');

for (let [k, v] of map) {
    console.log(`${k} : ${v}`);
}

for (let key of map.keys()) {
    console.log(`${key}`)
}

for (let value of map.values()) {
    console.log(`${value}`)
}

const keyValArr = Array.from(map);
console.log(keyValArr);

const keyArr = Array.from(map.keys());
console.log(keyArr);

const valueArr = Array.from(map.values());
console.log(valueArr);