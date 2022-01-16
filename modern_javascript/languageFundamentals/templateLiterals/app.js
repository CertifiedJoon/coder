const name = 'Joon';
const job = 'Soldier';
const age = '20';
let html;

//Without template string
html = '<ul><li>Name: ' + name + '</li><li>Age: ' + age + '</li><li>Job: ' + job + '</li></ul>';

//With template string es6
function hello(n) {
  return 'Hello ' + n;
}

html = `
  <ul>
    <li>Name: ${name}</li>
    <li>Age: ${age}</li>
    <li>Occupation: ${job}</li>
    <li>${hello(name)}</li>
  </ul>
`;

document.body.innerHTML = html