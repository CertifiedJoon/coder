// function definition
function square(num) {
  return num * num;
}
// function expression
const double = function(num) {
  return num * 2;
}
// Immediately Invokable Function Expressions IIFE
(function(num){
  console.log('IIFE ran ' + num);
}(2));

//property methods
const person = {
  walk: function(distance) {
    console.log('walking ' + distance +' units');
  },
  jump: function(height) {
    console.log('jumping ' + height + ' units');
  }
}

person.walk(2);
person.slide = function(distance) {
  console.log('sliding ' + distance + ' units');
}
person.jump(2);
person.slide(2);