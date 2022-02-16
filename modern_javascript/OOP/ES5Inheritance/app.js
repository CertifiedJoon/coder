class Person {
    constructor(fname, lname) {
        this.firstName = fname;
        this.lastName = lname;
    }

    greeting() {
        return `Hello, ${this.firstName} ${this.lastName}.`;
    }
}

class Customer extends Person{
    constructor(fname, lname, phone, membership) {
        super(fname, lname)
        this.phone = phone;
        this.membership = membership;
    }

    static getMembershipCost() {
        return 500;
    }
}

const john = new Customer('John','Doe','010-1234-5678', true);

console.log(john)
console.log(john.greeting()); // inherited from Person
console.log(Customer.getMembershipCost()); // local function of Customer
