function Person(fname, lname) {
    this.firstName = fname;
    this.lastName = lname;
}
Person.prototype.greeting = function() {
    return `Hello, ${this.firstName} ${this.lastName}.`;
}

function Customer(fname, lname, phone, membership) {
    // Calls person constructor (understand it as a form on inheritance)
    Person.call(this, fname, lname);
    this.phone = phone;
    this.membership = membership;
}

//inherit person prototype
Customer.prototype = Object.create(Person.prototype);
// so... to make customer constuctor return customer constructor
Customer.prototype.constructor = Customer;

Customer.prototype.call = function() {
    return `Hello, ${this.firstName}, Calling ${this.phone}...`;
}

const customer = new Customer('John', 'Doe', '010-1234-5678', true);
console.log(customer);
console.log(customer.greeting()); // inherited from Person
console.log(customer.call()); // local prototype function from customer