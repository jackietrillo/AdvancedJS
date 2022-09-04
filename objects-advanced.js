var Human = {   
    numberOfLegs: 2,
    isAlive: function() {
        return true
    },
    walk: function() {
        return "walking with number of legs " + this.numberOfLegs;
    }
}

var personLiteral =  {
    fname: 'jackie', 
    lname:"trillo", 
    counter: 0,
    speak: function () {  
        this.counter++;
        return `${this.fname} ${this.counter} `;
    }
};

// object literals cannot be instantiated with new 
//var newPersonLiteral = new personLiteral();  personLiteral is not a constructor

var personLiteral = new Object(personLiteral);
console.log(personLiteral.speak());

// object literals can be instantiated with Object.create
var newObjectLiteral = Object.create(personLiteral)
newObjectLiteral.fname = "changedJackie"
console.log(newObjectLiteral.speak());

// Person constructor function
var Person =  function (fname, lname, counter) {
    this.fname = fname; 
    this.lname = lname; 
    this.counter = counter;
    this.speak = function () {    
        this.counter++;
        return `${this.fname} ${this.counter} `; 
    },
    this.__proto__ = Human
};

// Person class
class PersonClass  {
    constructor(fname, lname, counter) {
      this.fname = fname;
      this.lname = lname;
      this.counter = counter;
    }
    speak = function() {
        this.counter++;
        `${this.fname} ${this.counter} `;
    }
  }

var john = new Person("John", "Doe", 0);
console.log(john.walk()); 
console.log(john.speak()); 
var jane = new PersonClass("Jane", "Doe", 0);
console.log(john.speak());

//Object.setPrototypeOf(Person, HumanObject);






