const parent = {
    sayHello() {
        console.log('Hello, im parent');
    }
}
const child = Object.create(parent);
child.sayHello(); // Hello, im parent


function person(name) {
    this.name = name;
}
person.prototype.sayHello = function() {
    console.log('Hello, im person');
}
const myname = new person('Kim');
myname.sayHello() // Hello, im person


function friend(name, job) {
    this.name = name;
    this.job = job;
    this.myName = function() {
        console.log(`my name is ${name}`);
    }
    this.myJob = function() {
        console.log(`im ${job}`);
    }
    this.introduce = function() {
        console.log(`my name is ${name}, im ${job}`);
    }
}
const me = new friend('park', 'develpoer');
me.myName(); // hello im park
me.myJob(); // im develpoer
me.introduce(); // my name is park, im develpoer