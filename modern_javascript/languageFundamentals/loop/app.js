array = [12,23,12,3123,123,12];


//foreach
array.forEach(function(num, index) {
  console.log(`${index}: ${num}`);
});

//Map
const users = [
  {id: 1, name: 'Joon'},
  {id: 2, name: 'Jane'},
  {id: 3, name: 'John'},
  {id: 4, name: 'Jake'}
  ];

const ids = users.map(function(user){
  return user.name;
});

console.log(ids);

// for in loop
const person = {
  firstName: 'Joon',
  lastName: 'Moon',
  age: '20'
}

for (let x in person) {
  console.log(`${x} : ${person[x]}`);
}