// # ( 3 basic types ) 

let isFunny: true;
let age: number;
let name: String;

// # ( Type Annotation )

let isAlive: true;
let numAge: 18;
let name1: "Tezor";

// # ( Any type )
let notSure: any = 4;
notSure = " maybe a string instead ";
notSure = false;

// # ( Use const Keyword for Constant )
const lengAge = 21;
lengAge = 19; // Error 

// # ( Type Array )
let list: number[] = [1, 2, 3];

// # ( Generic Array Type )
let list: Array<number> = [1, 2, 3];

// # ( For Enumerations )
enum Color { Red, Green, Blue };
let c: Color = Color.Green;
console.log(Color[c]);

// # ( Void )
function bigHorribleAlert(): void { 
    console.log("I;m a little annoying box!");
}

// # ( compiler, and same Javascript will be emitted )
let f1 = function (i: number): number { return i * i; } // Return type inferred

let f2 = function (i: number) { return i * i; } // Fat Arrow Syntax

let f3 = (i: number): number => { return i * i; } // Fat Arrow Syntax with return type inferred

let f4 = (i: number) => { return i * i; } // Fat Arrow syntax with return type inferred, braceless means no return

let f5 = (i: number) => i * i; 

// Interfaces are structural, anything that has the properties is complaint with the interface
interface Person{
    name: string; // Optinal properties, marked with a"?""
    age?: number; // And of course function
    move(): void;
}

// Object that implements the "person" interface
// Can be treated as a person since it has the name and move properties
let p: Person = { name:"Bobby", move: () => {}}; 

// Objects that have the optional property:
let validPerson:Person = { name: "Bobby", age: true };

// Interfaces can also describe a function type
interface SearchFunc {
    (source: string, subString: string): boolean;
}

// Only the Praramater Type are important, name are not important.
let mySearch: SearchFunc;
mySearch = function (src : string, sub : string) {
    return src.search(sub) !=-1;
}

// Classes - members are public by default
class Point {
    // Properties
    x: number;

    // Constructor - the public/private keywords in this context will generate
    // the boiler palce code for the property and the initialization in the constructor.
    // In this example, "y" will be defined just like "x" is, but with less code
    // Default values are also supported

    constructor(x : number, public y: number = 0) {
        this.x = x;
    } 

    // Function
    dist(): number { return Math.sqrt(this.x * this.x + this.y * this.y);}
    // Stactic members
    static origin = new Point(0, 0);
}

// Classes can be explicitly marked as implementing an interface.
// Any missing properties will then cause an error at compile-time.
class PointPerson implements Person {
    name: string
    move() {}
}

let p1 = new Point (10, 20);
let p2 = new Point (25); // y will be 0

//  Inheritance
class Point3D extends Point {
    constructor( x: number, y: number, public z: number = 0) {
        super(x, y); // Explicit call to the super class constructor is mandatory
    }

    // Overwrite
    dist(): number {
        let d = super.dist();
        return Math.sqrt(d * d + this.z * this .z );
    }
}

// Modules, "." can be used as separator for sub modules
module Geometry {
    export class Square {
        constructor(public sideLength: number = 0) {
        }
        area() {
            return Math.pow(this.sideLength, 2);
        }
    }
}

let s1 = new Geometry.Square (5);

// Local alias for referencing a module
import G = Geometry;

let s2 = new G.Square(10);

// Generics
//Classes
class Tuple<T1, T2> {
    constructor(public item1: T1, public item2: T2) {

    }
}

// Interfaces
interface Pair <T> {
    itme1: T;
    item2: T;
}

// And Functions
let pairToTuple = function <T>(p: Pair<T>) {
    return new Tuple(p.itme1, p.item2);
};

let tuple = pairToTuple({ item1: "Hello", item2: "World"});

// Including references to a definition file:
//  <reference path= "jquery.d.ts" />

// Template String ( strings that use backticks )
// string interpolation with Template Strings
let name = "Tyrone";
let greeting = `Hi ${name}, how are you?`
// Multiline Strings with Template strings
let multiline = `This is an example of a multiline string`;

// READONLY: New Feature in TypeScript 3.1
interface Person {
    readonly name: string;
    readonly age: number;
}

var p1 : Person = { name: "Tyrone", age: 42 };
p1.age = 25; // Error, p1.age is read-Only

var p2 = {name: "John", age: 60 };
var p3 : Person = p2; // Ok, read-Only alias for p2
p3.age = 35;
p2.age = 45;

 class car {
    readonly make: string;
    readonly model: string;
    readonly year: 2022
 
    Constructor() {
        this.make = "Unknown Make"; // Assignment permitted in constuctor 
        this.model = "Unknown Model"; // Assignment permitted in constructor 
    }
 }

 let numbers : Array<number> = [0, 1, 2, 3,4];
 let moreNumbers: ReadonlyArray<number> = numbers;
 moreNumbers[5] = 5; // Error, elements are read-only
 moreNumbers.push(5); // Error, no push method (because it mutates array)
 moreNumbers.length = 3; // Error, length is read-Only
 numbers = moreNumbers // Error, mutating methods are missing

 // Tagged union Types for modelling state that can be in one of many shapes
 type State =
    | { type: " Loading " }
    | { type: " success", value: number }
    | { type: " error", message: string };

declare const state: State;
if (state.type ==== "success") {
    console.log(state.value);
} else if (state.type ==== "error") {
    console.error(state.message);
}

// Template Literal Typles
// Use to create complex string types
type OrderSize = "regular" | "large";
type OrderItem = "Espresso" | "Cappuccino";
type Order = ` A ${OrderSize} ${OrderItem}`;

let order1: Order = " A regular Cappuccino ";
let order2: Order = " A large Espresso ";
let order3: Order = " A small Espresso "; // Error

// Iterators and Generators

// for..of statment
// iterate over the list of values on the object being iterated
let arrayOfAnyType = [1, "string", false];
for (let val of arrayOfAnyType) {
    console.log(val); // 1, "string", false    
}

// for.. in statement
// iterate over the list of keys on the object being iterated
for (const i in list) {
    console.log(i); // 0, 1, 2
    
}

// Type Assertion

let foo = {} // Creating foo as an empty object
foo.bar = 123 // Error: property 'bar' does not exist on `{}`

// Because the inferred type of foo is `{}` ( an object with 0 properties), you
// are not alloweed to add bar and baz to it. However with type assertion,
// the following will pass:

interface fee {
    bar: number;
    baz: string;
}

let fee = {} as fee; // Type assertion here
fee.bar = 123;
fee.baz = 'Hello World'