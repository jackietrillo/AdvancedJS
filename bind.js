var person =  {
    fname: 'jackie', 
    lname:"trillo", 
    counter: 0,
    speak: function () {  
        this.counter++;
        return `${this.fname} ${this.counter} `;
    }
};

//Bound functions
var speakFunc = person.speak;
speakFunc = speakFunc.bind(person);
console.log(speakFunc())



