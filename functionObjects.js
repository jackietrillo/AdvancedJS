/*       

   CONCEPTS:
    1. The prototype property only exists on functions
    2. Its purpose is to serve as a template when functions are used as constructors with new keyword

    1. create new Object() obj
    2. set obj.__proto__ to newObj.prototype
    3. return obj;
    (does not call a constuctor)
*/

var Human = function() {   
}
Human.prototype.isAlive = function() {
    return true;
}

var Person = function(fname, lname){
    this.fname = fname;
    this.lname = lname;     
    this.speak = function () {        
        return `my name is ${this.fname}`; 
    }  
}
Person.prototype = new Human(); 
Person.prototype.constructor = Person;
//Object.setPrototypeOf(Person.prototype, new Human()); 

var jackie = new Person('jackie', 'trillo'); 

console.log(jackie);
console.log(Person.prototype.isPrototypeOf(jackie));
console.log(jackie.speak());
console.log(jackie.__proto__); 
console.log(jackie.__proto__.__proto__); 
console.log(jackie.__proto__.constructor); 
console.log(jackie.isAlive());  
console.log(Person.prototype)
console.log(Human.prototype)