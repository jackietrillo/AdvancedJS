var varGlobal = "This variable is placed on the window(global) object";
console.log(this.varGlobal);

const constString = new String("This is a const string variable");
console.log(constString);
console.log(Object.getOwnPropertyNames(constString));
try {   
    string1 = "Try and change constString to something else";
    console.log(this.constString);
} catch(e) {
    console.log(e); 
}

let letString = new String("This is a let string variable");
console.log(letString);
try {   
    letString = "letString can be changed to something else";
    console.log(this.letString);
} catch(e) {
    console.log(e); 
}
console.log(this.letString);
const num = new Number(2);
console.log(num.constructor.name);
console.log(Object.getOwnPropertyNames(num));

