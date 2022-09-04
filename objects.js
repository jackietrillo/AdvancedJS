

/* object literal, only one instance of this because there is no counstructor */
const circleObjectLiteral = {    
    radius: 0,
    location: { 
        x: 1,
        y: 1
    },
    draw: function() {
        console.log(this.constructor.name + " radius " + this.radius);
    }
};
circleObjectLiteral.draw();


/* factory function for creating a circle */
function createCircleFactory(radius) {
    return {
        radius,
        draw: function() {
            console.log(this.constructor.name + " radius " + this.radius);
        } 
    };
}
const circle1 = new createCircleFactory(1);
circle1.draw();
const circle2 = new createCircleFactory(2);
circle2.draw();

/* constructor function, multiple instances because it is a counstructor */
function circleConstructorFunc(radius) {
    this.radius = radius;
    this.location = {
        x: 2,
        y: 2
    };
    this.draw = function() {
        console.log(this.constructor.name + " radius " + this.radius);
    }
};

var rrCall = {};
circleConstructorFunc.call(rrCall, 44);
rrCall.draw()
var rrApply = {};
circleConstructorFunc.apply(rrApply, [55]);
rrApply.draw();

var circleConstructorFunc1 = new circleConstructorFunc(3);
circleConstructorFunc1.draw();

var circleConstructorFunc2 = new circleConstructorFunc(4);
circleConstructorFunc2.draw();

class CircleClass {
    constructor(radius) {
        this.radius = radius;
    }
    draw = function() {
        console.log(this.constructor.name + "radius " + this.radius);
    }
}

let circleClass1 = new CircleClass(5);
circleClass1.draw();