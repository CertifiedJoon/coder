function MemberFactory() {
    this.createMember = function (name, type) {
        let member;
        if (type === 'standard') {
            member = new StandardMembership(name);
        } else if (type === "simple") {
            member = new SimpleMembership(name);
        } else if (type === 'super') {
            member = new SuperMembership(name);
        }

        member.type = type;
        member.define = function() {
            console.log(`${member.name} (${member.type}) : ${member.cost}`);
        }
        return member;
    }
}

const SimpleMembership = function(name) {
    this.name = name;
    this.cost = '$15';
}

const StandardMembership = function(name) {
    this.name = name;
    this.cost = '$20';
}

const SuperMembership = function(name) {
    this.name = name;
    this.cost = '$25';
}

const factory = new MemberFactory();
let members = [];

// One class to manage all isntantiations.
members.push(factory.createMember('John Doe', 'simple'));
members.push(factory.createMember('Jane Doe', 'simple'));
members.push(factory.createMember('Jack Daniels', 'standard'));
members.push(factory.createMember('Jack Reaper', 'super'));
members.forEach((member) => {
    member.define();
})