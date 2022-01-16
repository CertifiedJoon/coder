//Window

//PROMPT
// let input = prompt();
// alert(input);

//confirm
//if(confirm("are you sure")) {
//  alert('done');
//} else {
//  alert('revoked');
//}

let val;
//Outer height and width;
val = window.outerHeight;
val = window.outerWidth;

//Inner height and width;
val = window.innerheight;
val = window.innerWidth;

//scroll point
val = window.scrollY;
val = window.scrollX;

//location object
val = window.location;
val = window.location.search;  
val = window.location.port;

//redirect
// window.location.href = 'www.google.com';

//reload
// window.location.reload();

//history
window.history.go(-2);
val = window.history.length;

//navigator -- browser information
val = window.navigator;
console.log(val);