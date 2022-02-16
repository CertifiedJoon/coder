class Person {
    constructor(fname, lname, bday) {
        this.firstName = fname;
        this.lastName = lname;
        this.birthday = new Date(bday);
    }

    getAge() {
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    getsMarried(newLastName) {
        this.lastName = newLastName;
    }

    static number1 = 1;
    static addOne() {
        Person.number1 = Person.number1 + 1;
    }
    static printNumber() {
        return Person.number1;
    }
}

const john = new Person('John', 'Doe', '1980-02-04');

console.log(john);
console.log(john.getAge());
console.log(john.getFullName());

console.log(Person.printNumber());
Person.addOne(); 
console.log(Person.printNumber());