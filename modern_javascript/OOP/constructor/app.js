function Person(name, birthday) {
    this.name = name;
    this.birthday = new Date(birthday);
    this.calculateAge = function() {
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
}

const John = new Person('John', '1978-01-01');
console.log(John.calculateAge())
console.log(John);