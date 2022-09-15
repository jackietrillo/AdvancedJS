let animal = {
  eats: true,
  walk() {
    return "Animal walk";
  }
};

let rabbit = {
  jumps: true,
  walk() {
      return "Rabbit jump jump bounce!!";
  },
  __proto__: animal
};

let hare = {
  earLength: 10,
  __proto__: rabbit
};

console.log(hare.eats);
console.log(hare.walk())
console.log(rabbit.isPrototypeOf(hare));
console.log(animal.isPrototypeOf(hare));
console.log(Object.prototype.isPrototypeOf(hare));

console.log(hare.__proto__);
console.log(hare.__proto__.__proto__);
console.log(hare.__proto__.__proto__.__proto__);
console.log(hare.__proto__.__proto__.__proto__.__proto__);

console.log(Object.getPrototypeOf(hare));
console.log(Object.getPrototypeOf(rabbit));
console.log(Object.getPrototypeOf(animal));
console.log(Object.getPrototypeOf(Object));
console.log(Object.getPrototypeOf(Function));
console.log(Object.getPrototypeOf(Object.prototype));

 // OBJECTS DO NOT HAVE A PROTOTYPE PROPERTY
 console.log(hare.prototype)