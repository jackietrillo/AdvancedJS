/*  Procedural code for employee getWage */
let baseSalary = 100000;
let overtime = 10;
let rate = 20;

function getWage(baseSalary, overtime, rate) {
    return baseSalary + (overtime * rate);
}
console.log(getWage(baseSalary, overtime, rate));

/* object literal code for employee  */
let employee = {
    baseSalary: 100000,
    overtime: 10,
    rate: 20,
    getWage: function() {
        return this.baseSalary + (this.overtime * this.rate);
    }
} 
console.log(employee.getWage());