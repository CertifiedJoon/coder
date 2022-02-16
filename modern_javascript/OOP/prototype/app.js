function Person(fname, lname, birthday) {
    this.firstName = fname;
    this.lastName = lname;
    this.birthday = new Date(birthday);
}

// Defining prototypes
Person.prototype.calculateAge = function() {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

Person.prototype.getFullName = function () {
    return `${this.firstName} ${this.lastName}`;
}

const John = new Person('John', 'Doe', '1980-1-10');

console.log(John);
console.log(John.calculateAge());
console.log(John.getFullName());

// Property is not the same as prototype
console.log(John.hasOwnProperty('firstName'));
console.log(John.hasOwnProperty('getFullName'));