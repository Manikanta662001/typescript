import React from "react";

const W3practice = () => {
  //implicitly defining type
  //i.e., Typescript guess the type of data
  let str = "manikanta";
  //error because it initially guess that it is string then we are trying to convert to number
  // str = 88

  //explicitly defining type
  let val: number = 7;
  // errror ,,Type 'string' is not assignable to type 'number'
  // val ='hai'

  //it will consider type as any
  const json = JSON.parse("55");
  console.log(json, typeof json);
  //never
  //we can't set any data type if we use never
  // let main:never = ''
  //bool
  let v: boolean = false;
  //Array
  let array: readonly string[] = ["hello", "bye"];
  //if we use readonly  we can't edit
  //array.push('this')
  let arr2: number[] = [1, 2, 3, 4];
  arr2.push(9, 10);
  console.log(arr2, "3030");
  const nums = [10, 20, 30];
  nums.push(40);
  console.log(nums, "NUMS");
  let head: number = nums[0];
  console.log(head, "HEAD");
  //if we have more than one type
  let person: (string | number)[] = ["mani", "vamsi", 2];

  //any
  //any disables the  type checking i.e... it can be of any type
  let x: any = true;
  x = "vamsi";
  x = 67;
  console.log(x, "X");
  let data: any = "";
  //tuple
  let mytuple: readonly [number, string, boolean] = [3, "tuple", true];
  //cannot add an element
  //mytuple.push('hai')
  console.log(mytuple, "MYTUPLE");
  let tuple2: [d: number, e: number] = [22.2, 55.3];
  console.log(tuple2, "TUPLE2");
  const [d, e] = tuple2;
  console.log(d, e);
  //optional elements
  let bgColor, headerColor: [number, number, number, number?];
  bgColor = [0, 255, 255, 0.5];
  headerColor = [0, 255, 255];
  //object

  let Car: {
    type: string;
    model: string;
    price: number;
    year: number;
    milege?: number;
  } = { type: "Mahindra", model: "Thar", price: 250000, year: 2023 };
  Car.milege = 2000;
  console.log(Car, "CAR");

  const a: string[] = ["raju", "ramu", "nidhi", "rajesh"];
  const b: string[] = ["gopal", "gani", "gaja", "maruthi"];
  const c: string[] = ["ramesh", " suma", "ganesh", " vignesh"];
  const finalarr = [a, b, c];
  console.log(finalarr, "FINALARR");

  //enums ---- numeric
  //default first value is 0 i.e. , North=0
  //also we can set initial value
  enum directions {
    North = 10,
    south,
    east,
    west,
  }

  const no = directions.North;
  const so = directions.south;
  const ea = directions.east;
  console.log(no, "NORTH");
  console.log(so, "SOUTH");
  console.log(ea, "EAST");

  //setting values
  enum StatusCodes {
    NotFound = 404,
    Success = 200,
    Accepted = 202,
    BadRequest = 400,
  }
  // logs 404
  console.log(StatusCodes.NotFound);
  // logs 200
  console.log(StatusCodes.Success);

  //enums example2
  enum Month {
    Jan,
    Feb,
    Mar,
    Apr,
    May,
    Jun,
    Jul,
    Aug,
    Sep,
    Oct,
    Nov,
    Dec,
  }
  console.log(Month.Feb);
  function isItSummer(month: Month) {
    let isSummer: boolean;
    switch (month) {
      case Month.Jun:
      case Month.Jul:
      case Month.Aug:
        isSummer = true;
        break;
      default:
        isSummer = false;
    }
    return isSummer;
  }
  console.log(isItSummer(Month.Aug));
  //Aliases syntax
  // type aliasName = Datatype;
  // let msg : aliasName;
  type chars = string;
  let message: chars;
  message = "hai this is alias";

  type alphanumeric = string | number | boolean;
  let input: alphanumeric;
  input = "hai";
  input = 123;
  input = false;
  //interfaces syntax
  // interface interfaceName{
  // property?:DT,
  // property?:DT,
  // }
  //interfaces are only for objects
  interface Rectangle {
    width: number;
    height: number;
  }
  const rectangle: Rectangle = {
    width: 20,
    height: 30,
  };
  console.log(rectangle, "8686");
  //
  interface Person {
    readonly ssn: string;
    firstName: string;
    middleName?: string;
    lastName: string;
  }
  function getFullName(person: Person) {
    if (person.middleName) {
      return `${person.firstName} ${person.middleName} ${person.lastName}`;
    }
    return `${person.firstName} ${person.lastName}`;
  }

  let john = {
    ssn: "171-28-0926",
    firstName: "John",
    middleName: "K",
    lastName: "Doe",
    age: 22,
  };
  console.log(getFullName(john));
  john.ssn = "";
  //extending interfaces
  //i.e getting properties from parent plus other properties
  interface Coloredrectangle extends Rectangle {
    color: string;
  }

  const coloredrectangle: Coloredrectangle = {
    width: 20,
    height: 30,
    color: "red",
  };
  console.log(coloredrectangle, "9898");

  //Union | (OR)

  const Statuscode = (code: number | string | boolean) => {
    console.log("Statuscode is ", code, typeof code);
  };
  Statuscode(200);
  Statuscode("400");
  Statuscode(false);

  let columns: string | number;
  columns = "col";
  columns = 66;

  //mentioning datatypes of return values in function
  const Timed = (): number => {
    return new Date().getTime();
  };
  console.log(Timed(), "TIME");

  //if a function doesnot return any value then void shold be used
  function printHello(): void {
    console.log("Hello!");
  }
  printHello();

  //function Parameters

  function multiplication(a: number, b: number): number {
    console.log(a * b, "MULTIPLY");
    return a * b;
  }
  multiplication(10, 20);
  console.log(multiplication(11, 22));
  //
  let add: (x: number, y: number) => number;
  add = function (x: number, y: number) {
    return x + y;
  };
  console.log(add(10, 20));
  //function returning promise
  async function getFavoriteNumber(): Promise<number> {
    return 26;
  }
  console.log(getFavoriteNumber());
  //casting
  let h: string = "hello";
  console.log((h as String).length);
  //
  let variable: unknown = 10;
  console.log((variable as string).length, "234");
  //another  way of casting
  //but it will not work in tsx files
  // console.log((<string>h).length)

  interface Point {
    x: number;
    y: number;
  }
  //Partial make properties of object to be optional
  // let pointPart: Partial<Point> = {x:20,y:50};
  let pointPart: Partial<Point> = {};
  console.log(pointPart, "PP");

  interface Car {
    make: string;
    model: string;
    mileage?: number;
  }

  let myCar: Required<Car> = {
    make: "Ford",
    model: "Focus",
    mileage: 12000, // `Required` forces mileage to be defined
  };
  console.log(myCar, "MYCAR");
  const fullName: Record<string, string> = {
    first: "Abc",
    last: "xyz",
  };
  interface Person1 {
    name: string;
    age: number;
    location?: string;
  }
  const person1: Omit<Person1, "age" | "location"> = {
    name: "hai",
  };
  const bob: Pick<Person1, "age"> = {
    age: 22,
  };

  const person2: Readonly<Person1> = {
    name: "Dylan",
    age: 35,
  };
  //it is Readonly
  //person2.age=30
  class Humans {
    private ssn: string;
    private firstName: string;
    private lastName: string;
    public loc: string;

    constructor(ssn: string, firstName: string, lastName: string, loc: string) {
      this.ssn = ssn;
      this.firstName = firstName;
      this.lastName = lastName;
      this.loc = loc;
    }
    getFullName() {
      return `Name is ${this.firstName}${this.lastName}`;
    }
  }
  const mani = new Humans("1", "Mani", "Gundluri", "HYB");
  console.log(mani.getFullName());
  //we can't access private properties outside the class
  // console.log(mani.firstName)
  //we can access public properties outside the class
  console.log(mani.loc, "LOC");

  const user = {
    name: "Daniel",
    age: 26,
  };
  // console.log(user.location)

  let datanull: null = null;

  function createPair<S, N>(v1: S, v2: N): [S, N] {
    return [v1, v2];
  }

  interface ForList {
    [index: number]: string;
  }
  const newArray: ForList = ["interface", "for", "Array"];
  console.log(createPair<string, number>("hello", 42)); // ['hello', 42]

  interface PersonData {
    name: string;
    "Ph num": string;
    "Native place": string;
  }
  const JsonData: PersonData = {
    name: "mani",
    "Ph num": "7937436593",
    "Native place": "TPT",
  };
  return (
    <div>
      <h1>This is typescript project</h1>
      <h2>
        {str} -{val}- {String(v)}
      </h2>
      {array} {arr2} {mytuple}
      <br />
      {finalarr.map((item, index) => (
        <div key={index}>
          {item.map((it, ind) => (
            <li key={ind}>{it}</li>
          ))}
        </div>
      ))}
      <h4>{datanull}</h4>
    </div>
  );
};
export default W3practice;
