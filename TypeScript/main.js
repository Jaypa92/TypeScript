"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
//The export {} code makes TypeScript run this as a modeule instead of a script. Having this will fix errors
var message = "Hello World!";
console.log(message);
console.log("using tsc main.ts to compile then running it after js file is created");
//Use node main.js to run code
//use tsc main.ts --watch to go into watch mode where the terminal will detect changes and compile and update the js file to said changes
var x = 10;
// const declarations once assigned cannot be reassigned
var y = 20;
//Variable type after variablename
var isBeginner = true;
var total = 0;
var Name = "Justin";
var sentence = "My name is ".concat(Name);
console.log(sentence);
//Null and undefined aren't useful on their own and are classified as sub types to other types
var n = null;
var u = undefined;
//Two ways of declaring of array types
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
//Tuple contains mixed types and can't be altered
var person1 = ["John", 31];
//You can specify values of enums
//By starting Red off at 5, the value of green is 6 and blue is 7
var Color;
(function (Color) {
    Color[Color["Red"] = 5] = "Red";
    Color[Color["Green"] = 6] = "Green";
    Color[Color["Blue"] = 7] = "Blue";
})(Color || (Color = {}));
var C = Color.Green;
console.log(C);
//The any type is very useful and flexible
var randomValue = 10;
randomValue = true;
randomValue = "Justin";
console.log(randomValue);
//Proof that TypeScript won't throw errors with any types
var myVariable = 10;
console.log(myVariable.name);
/*Optional parameters always come 2nd. If num1 were to be optional, the place in the function would need to be
swapped with num2 */
//Putting a ? after the variable name makes a parameter optional. ex: num2? : number
//You can set default values for parameters for ex: num2 : number = 10
function add(num1, num2) {
    if (num2 === void 0) { num2 = 10; }
    if (num2) {
        return num1 + num2;
    }
    else {
        return num1;
    }
}
add(5, 10);
add(5);
function fullName(person) {
    console.log("".concat(person.firstName, " ").concat(person.lastName));
}
var p = {
    firstName: "Bruce",
    lastName: "Wayne"
};
fullName(p);
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.employeeName = name;
    }
    Employee.prototype.greet = function () {
        console.log("Good morning ".concat(this.employeeName));
    };
    return Employee;
}());
var emp1 = new Employee("Justin");
console.log(emp1.employeeName);
emp1.greet();
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerName) {
        return _super.call(this, managerName) || this;
    }
    Manager.prototype.delegateWork = function () {
        console.log("Manager delegating task");
    };
    return Manager;
}(Employee));
var m1 = new Manager("Bruce");
m1.delegateWork();
m1.greet();
console.log(m1.employeeName);
