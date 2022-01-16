const person = {
  firstName: 'Joon',
  lastName: 'Moon',
  age: '20',
  getFullName() {
    return this.firstName + ' ' + this.lastName;
  }
}

console.log(person.getFullName());