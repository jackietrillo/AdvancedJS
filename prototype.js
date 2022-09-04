/*
   CONCEPTS:
   1. The prototype property only exists on functions
   2. Its purpose is to serve as a template when functions are used as constructors with new keyword
*/

// Human is a constructor function
var Human = function(name) {    
    this.name = name;
};

// Define the prototype
Human.prototype.numberOfLegs = 2;
Human.prototype.isAlive = function () {    
    return true;
}
Human.prototype.walk = function () {    
    return "walking with number of legs " + this.numberOfLegs;
}
Human.prototype.speak = function () {    
    return `my name is ${this.name}`; 
}
Human.prototype.bodyParts =  {    
    Brain: true,
    legs: true,
    arms: true,
}

var jackie = new Human("jackie");  // new creates an object {}
console.log(jackie);
console.log(Human.prototype.isPrototypeOf(jackie)) 
console.log(Object.getPrototypeOf(jackie))

console.log(jackie.numberOfLegs);  
console.log(jackie.isAlive()) ;
console.log(jackie.walk());
console.log(jackie.speak());
console.log(jackie.bodyParts);  

console.log(jackie.constructor);
console.log(jackie.__proto__); 
console.log(jackie.__proto__.__proto__); 
console.log(jackie.__proto__.constructor); 
console.log(jackie.isAlive());  

console.log(jackie instanceof Human);
console.log(jackie instanceof Object);

// Human.prototype returns the __proto__ object
console.log(Human.prototype)