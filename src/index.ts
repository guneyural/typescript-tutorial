// Basic Types
let id: Number = 5;
let company: string = "Güney Ural";
let isPublished: boolean = true;
let x: any = "Hello";
let age: number;

id = 8;

x = true;

age = 16;

// Arrays
let ids: Number[] = [1, 2, 3, 4, 5, 6];
let arr: any[] = [1, true, "Hello"];

// Tuple
let person: [number, string, boolean] = [1, "Güney", true];

// Tuple Array
let employee: [number, string][];
employee = [
  [1, "Güney"],
  [2, "Ural"],
  [3, "Güney Ural"],
];

// Union
let pid: string | number;
pid = "22";

// Enum
enum Direction1 {
  Up = 1,
  Down,
  Left,
  Right,
}

enum Direction2 {
  Up = "Up",
  Down = "Down",
  Left = "Left",
  Right = "Right",
}

console.log(Direction1.Up);
console.log(Direction2.Right);

// Objects
type User = {
  readonly id: number;
  name: string;
  age?: number;
};

const user: User = {
  id: 1,
  name: "Güney",
};

//Type Assertion
let cid: any = "1";
let customerId = <number>cid;
//let customerId = cid as number;
console.log(
  "Customer Id " + customerId + `, typeof customer Id: ${typeof customerId}`
);

// Functions
function addNum(x: number, y: number): number {
  return x + y;
}

console.log(`Sum of 3 + 5 : ${addNum(3, 5)}`);

// Void
function log(message: string | number): void {
  console.log(message);
}

log("Güney Ural");

// Interfaces
interface UserInterface {
  readonly id: number;
  name: string;
  age?: number;
}

const user1: UserInterface = {
  id: 1,
  name: "John",
};

interface MathFunc {
  (x: number, y: number): number;
}

const add: MathFunc = (x: number, y: number): number => x + y;
const sub: MathFunc = (x: number, y: number): number => x - y;

interface classInterface {
  id: number;
  name: string;
  register(): string;
}

// Classes
class Person implements classInterface {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  register() {
    return `${this.name} is now registered`;
  }
}

const guney = new Person(1, "Güney Ural");
const gunes = new Person(2, "Güneş Horlu");

console.log(`${guney} <3 ${gunes}`);

// Subclasses
class Employee extends Person {
  position: string;

  constructor(id: number, name: string, position: string) {
    super(id, name);

    this.position = position;
  }
}

const emp = new Employee(3, "Güney Ural", "Junior React Native Developer");
console.log(emp.register());

// ==============
// Generics
function getArray<T>(items: T[]): T[] {
  return new Array().concat(items);
}

let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(["Güney", "Güneş", "Ural"]);

// numArray.push("hello"); -> returns an error
strArray.push("hello");
console.log(numArray);
console.log(strArray);
