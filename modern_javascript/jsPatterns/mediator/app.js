function User (name) {
    this.name = name;
    this.chatroom = null;
}

User.prototype.send = function(msg, to) {
    this.chatroom.send(msg, this, to);
}

User.prototype.recieve = function(msg, from) {
    console.log(`${from.name} -> ${this.name} : ${msg}`);
}

function Chatroom() {
    this.users = {};
}

Chatroom.prototype.register = function(user) {
    this.users[user.name] = user;
    user.chatroom = this;
}

Chatroom.prototype.send = function(msg, from, to) {
    if (to) {
        to.recieve(msg, from)
    } else {
        for (key in this.users) {
            if (key !== from.name) {
                from.send(msg, this.users[key])
            }
        }
    }
}

const john = new User('John');
const jane = new User('Jane');
const jack = new User('Jack');

const gc = new Chatroom();
gc.register(john);
gc.register(jane);
gc.register(jack);

jane.send('hey john', john);
john.send('hey jane', jane);
jack.send('hey everyone');