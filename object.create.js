/*        
    1. create new Object() obj
    2. set obj.__proto__ to newObj.prototype
    3. return obj;
    (does not call a constuctor)
*/

var Human = {
    isAlive: function() {
        return true;
    }
}

var Person =  {
    fname : '',
    lname : '',     
    speak : function () {        
        return `my name is ${this.fname}`; 
    }, 
    __proto__ : Human
};
var jackie = Object.create(Person); 
jackie.fname = 'jackie';
console.log(jackie);
console.log(Person.isPrototypeOf(jackie));
console.log(jackie.isAlive());  
console.log(jackie.speak()) 

