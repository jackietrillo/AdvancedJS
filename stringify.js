var Employee = function(name, baseSalary, overtime, rate ) {
    this.baseSalary = baseSalary;
    this.name = name;
    this.rate = rate;
    this.overtime = overtime;
    this.getWage = function() {
        return this.baseSalary + (this.overtime * this.rate);
    }
} 

var emp1 = new Employee("jackie", 200000, 10, 80);
var emp2 = new Employee("john", 300000, 10, 100);
var emp3 = new Employee("jane", 100000, 10, 60);

console.log(emp1.name);
var json = JSON.stringify(emp1);
console.log(json);

var company = {
    employees: [
     emp1, 
     emp2, 
     emp3
    ]
};

var json = JSON.stringify(company);
console.log(json);
var company2 = JSON.parse(json);
console.log(company2.employees);
