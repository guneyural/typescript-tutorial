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
// Basic Types
var id = 5;
var company = "Güney Ural";
var isPublished = true;
var x = "Hello";
var age;
id = 8;
x = true;
age = 16;
// Arrays
var ids = [1, 2, 3, 4, 5, 6];
var arr = [1, true, "Hello"];
// Tuple
var person = [1, "Güney", true];
// Tuple Array
var employee;
employee = [
    [1, "Güney"],
    [2, "Ural"],
    [3, "Güney Ural"],
];
// Union
var pid;
pid = "22";
// Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
console.log(Direction1.Up);
console.log(Direction2.Right);
var user = {
    id: 1,
    name: "Güney"
};
//Type Assertion
var cid = "1";
var customerId = cid;
//let customerId = cid as number;
console.log("Customer Id " + customerId + ", typeof customer Id: ".concat(typeof customerId));
// Functions
function addNum(x, y) {
    return x + y;
}
console.log("Sum of 3 + 5 : ".concat(addNum(3, 5)));
// Void
function log(message) {
    console.log(message);
}
log("Güney Ural");
var user1 = {
    id: 1,
    name: "John"
};
var add = function (x, y) { return x + y; };
var sub = function (x, y) { return x - y; };
// Classes
var Person = /** @class */ (function () {
    function Person(id, name) {
        this.id = id;
        this.name = name;
    }
    Person.prototype.register = function () {
        return "".concat(this.name, " is now registered");
    };
    return Person;
}());
var guney = new Person(1, "Güney Ural");
var gunes = new Person(2, "Güneş Horlu");
console.log("".concat(guney, " <3 ").concat(gunes));
// Subclasses
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(id, name, position) {
        var _this = _super.call(this, id, name) || this;
        _this.position = position;
        return _this;
    }
    return Employee;
}(Person));
var emp = new Employee(3, "Güney Ural", "Junior React Native Developer");
console.log(emp.register());
// ==============
// Generics
function getArray(items) {
    return new Array().concat(items);
}
var numArray = getArray([1, 2, 3, 4]);
var strArray = getArray(["Güney", "Güneş", "Ural"]);
// numArray.push("hello"); -> returns an error
strArray.push("hello");
console.log(numArray);
console.log(strArray);
