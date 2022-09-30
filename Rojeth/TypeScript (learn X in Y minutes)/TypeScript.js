// # ( 3 basic types ) 
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
var isFunny;
var age;
var name;
// # ( Type Annotation )
var isAlive;
var numAge;
var name1;
// # ( Any type )
var notSure = 4;
notSure = " maybe a string instead ";
notSure = false;
// # ( Use const Keyword for Constant )
var lengAge = 21;
lengAge = 19; // Error 
// # ( Type Array )
var list = [1, 2, 3];
// # ( Generic Array Type )
var list = [1, 2, 3];
// # ( For Enumerations )
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Green;
console.log(Color[c]);
// # ( Void )
function bigHorribleAlert() {
    console.log("I;m a little annoying box!");
}
// # ( compiler, and same Javascript will be emitted )
var f1 = function (i) { return i * i; }; // Return type inferred
var f2 = function (i) { return i * i; }; // Fat Arrow Syntax
var f3 = function (i) { return i * i; }; // Fat Arrow Syntax with return type inferred
var f4 = function (i) { return i * i; }; // Fat Arrow syntax with return type inferred, braceless means no return
var f5 = function (i) { return i * i; };
// Object that implements the "person" interface
// Can be treated as a person since it has the name and move properties
var p = { name: "Bobby", move: function () { } };
// Objects that have the optional property:
var validPerson = { name: "Bobby", age: true };
// Only the Praramater Type are important, name are not important.
var mySearch;
mySearch = function (src, sub) {
    return src.search(sub) != -1;
};
// Classes - members are public by default
var Point = /** @class */ (function () {
    // Constructor - the public/private keywords in this context will generate
    // the boiler palce code for the property and the initialization in the constructor.
    // In this example, "y" will be defined just like "x" is, but with less code
    // Default values are also supported
    function Point(x, y) {
        if (y === void 0) { y = 0; }
        this.y = y;
        this.x = x;
    }
    // Function
    Point.prototype.dist = function () { return Math.sqrt(this.x * this.x + this.y * this.y); };
    // Stactic members
    Point.origin = new Point(0, 0);
    return Point;
}());
// Classes can be explicitly marked as implementing an interface.
// Any missing properties will then cause an error at compile-time.
var PointPerson = /** @class */ (function () {
    function PointPerson() {
    }
    PointPerson.prototype.move = function () { };
    return PointPerson;
}());
var p1 = new Point(10, 20);
var p2 = new Point(25); // y will be 0
//  Inheritance
var Point3D = /** @class */ (function (_super) {
    __extends(Point3D, _super);
    function Point3D(x, y, z) {
        if (z === void 0) { z = 0; }
        var _this = _super.call(this, x, y) || this;
        _this.z = z;
        return _this;
    }
    // Overwrite
    Point3D.prototype.dist = function () {
        var d = _super.prototype.dist.call(this);
        return Math.sqrt(d * d + this.z * this.z);
    };
    return Point3D;
}(Point));
// Modules, "." can be used as separator for sub modules
var Geometry;
(function (Geometry) {
    var Square = /** @class */ (function () {
        function Square(sideLength) {
            if (sideLength === void 0) { sideLength = 0; }
            this.sideLength = sideLength;
        }
        Square.prototype.area = function () {
            return Math.pow(this.sideLength, 2);
        };
        return Square;
    }());
    Geometry.Square = Square;
})(Geometry || (Geometry = {}));
var s1 = new Geometry.Square(5);
// Local alias for referencing a module
var G = Geometry;
var s2 = new G.Square(10);
// Generics
//Classes
var Tuple = /** @class */ (function () {
    function Tuple(item1, item2) {
        this.item1 = item1;
        this.item2 = item2;
    }
    return Tuple;
}());
// And Functions
var pairToTuple = function (p) {
    return new Tuple(p.itme1, p.item2);
};
var tuple = pairToTuple({ item1: "Hello", item2: "World" });
// Including references to a definition file:
//  <reference path= "jquery.d.ts" />
// Template String ( strings that use backticks )
// string interpolation with Template Strings
var name = "Tyrone";
var greeting = "Hi ".concat(name, ", how are you?");
// Multiline Strings with Template strings
var multiline = "This is an example of a multiline string";
var p1 = { name: "Tyrone", age: 42 };
p1.age = 25; // Error, p1.age is read-Only
var p2 = { name: "John", age: 60 };
var p3 = p2; // Ok, read-Only alias for p2
p3.age = 35;
p2.age = 45;
var car = /** @class */ (function () {
    function car() {
    }
    car.prototype.Constructor = function () {
        this.make = "Unknown Make"; // Assignment permitted in constuctor 
        this.model = "Unknown Model"; // Assignment permitted in constructor 
    };
    return car;
}());
var numbers = [0, 1, 2, 3, 4];
var moreNumbers = numbers;
moreNumbers[5] = 5; // Error, elements are read-only
moreNumbers.push(5); // Error, no push method (because it mutates array)
moreNumbers.length = 3; // Error, length is read-Only
numbers = moreNumbers; // Error, mutating methods are missing
if (state.type === "success") {
    console.log(state.value);
}
else if (state.type === "error") {
    console.error(state.message);
}
var order1 = " A regular Cappuccino ";
var order2 = " A large Espresso ";
var order3 = " A small Espresso "; // Error
// Iterators and Generators
// for..of statment
// iterate over the list of values on the object being iterated
var arrayOfAnyType = [1, "string", false];
for (cosnt; val; of)
    arrayOfAnyType;
{
    console.log(val); // 1, "string", false    
}
// for.. in statement
// iterate over the list of keys on the object being iterated
for (var i in list) {
    console.log(i); // 0, 1, 2
}
// Type Assertion
var foo = {}; // Creating foo as an empty object
foo.bar = 123; // Error: property 'bar' does not exist on `{}`
var foo = {}; // Type assertion here
foo.bar = 123;
foo.baz = 'Hello World';
