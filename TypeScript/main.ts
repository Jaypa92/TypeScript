export {}
//The export {} code makes TypeScript run this as a modeule instead of a script. Having this will fix errors
let message = "Hello World!";
console.log(message);
console.log("using tsc main.ts to compile then running it after js file is created")
//Use node main.js to run code
//use tsc main.ts --watch to go into watch mode where the terminal will detect changes and compile and update the js file to said changes

let x = 10;
// const declarations once assigned cannot be reassigned
const y = 20;

//Variable type after variablename
let isBeginner :boolean = true;
let total : number = 0;
let Name : string = "Justin";
let sentence: string = `My name is ${Name}`;
console.log(sentence);

//Null and undefined aren't useful on their own and are classified as sub types to other types
let n : null = null;
let u : undefined = undefined;

//Two ways of declaring of array types
let list1 : number[] = [1,2,3];
let list2 : Array<number> = [1,2,3]

//Tuple contains mixed types and can't be altered
let person1: [string, number] = ["John", 31];

//You can specify values of enums
//By starting Red off at 5, the value of green is 6 and blue is 7
enum Color {Red = 5, Green, Blue}
let C : Color = Color.Green;
console.log(C)

//The any type is very useful and flexible
let randomValue: any = 10;
randomValue = true;
randomValue = "Justin";
console.log(randomValue);

//Proof that TypeScript won't throw errors with any types
let myVariable: any = 10;
console.log(myVariable.name)

/*Optional parameters always come 2nd. If num1 were to be optional, the place in the function would need to be
swapped with num2 */
//Putting a ? after the variable name makes a parameter optional. ex: num2? : number
//You can set default values for parameters for ex: num2 : number = 10
function add(num1: number, num2 : number = 10) : number {
    if(num2){
    return num1 + num2;
    }else{
        return num1
    }
}
add(5,10)
add(5)

//Setting an example of the interface types will allow us to create objects within the interface class
interface Person {
    firstName : String,
    lastName? : String
}

//the person parameter if of type Person
function fullName(person: Person){
    console.log(`${person.firstName} ${person.lastName}`)
}

let p = {
    firstName : "Bruce",
    lastName : "Wayne"
}

fullName(p);

class Employee {
    employeeName: string;

    constructor(name: string){
        this.employeeName = name;
    }

    greet(){
        console.log(`Good morning ${this.employeeName}`)
    }
}

let emp1 = new Employee("Justin");
console.log(emp1.employeeName);
emp1.greet();

/*To use the Employee class with the Manager class which also known as Inheritance, we have to Extend it 
as well as use the super function*/
class Manager extends Employee {
constructor(managerName: string){
    super(managerName);
}

delegateWork(){
    console.log("Manager delegating task")
}
}

let m1 = new Manager("Bruce");
m1.delegateWork();
m1.greet();
console.log(m1.employeeName);

/*Access Modifiers:
public: makes properites and methods freely accessible throughout the application
private: makes properites and methods inaccessible outside of it's contained class
protected: allows a property or method to be used amongst other classes unlike private but not outside of those
for example console.log(m1.employeeName) wouldn't work but it can still be accessed in the Manager class*/