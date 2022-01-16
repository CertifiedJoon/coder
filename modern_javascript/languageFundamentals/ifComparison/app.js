let val = 0;


//checks value (after coersion)
if (val == false) {
  console.log("Correct");
} else {
  console.log("Incorrect");
}

if (val != false) {
  console.log("Correct");
} else {
  console.log("Incorrect");
}

//checks value and type (before coersion);
if (val === false) {
  console.log("Correct");
} else {
  console.log("Incorrect");
}

if (val !== false) {
  console.log("Correct");
} else {
  console.log("Incorrect");
}

// Test if undefined
console.log(typeof val !== 'undefined');

// Ternary operator
console.log(typeof val !== 'undefined' ? 'Correct' : 'Incorrect');


//Switches
switch(val) {
  case 0:
    //anything
    break;
  default:
    //anything
    break;
}