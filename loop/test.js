class Employe {
  static count = 0;
  // Encapsulation
  #p;
  constructor(id, username, salary, password) {
    //pro
    this.i = id;
    this.u = username || "Unknown";
    this.s = salary < 5000 ? salary + 500 : salary;
    this.#p = password;
    this.msg = function () {
      `Hi ${this.u} Your Salay: ${this.s}`;
    };
    Employe.count++;
  }
  // Methods
  writeMsg() {
    return `Hi ${this.u} Your Salay: ${this.s}`;
  }

  // update name
  updateName(newName) {
    this.u = newName;
  }

  static numberOfEmploye() {
    return `${this.count} Employes`;
  }

  // Encapsultion
  getPassword() {
    return `The Password ${this.#p}`;
  }
}

let p2 = new Employe(0, "Hassan", 6000, "habeb12H#");
let p1 = new Employe(1, "habeb", 2000);
console.log(p1.i);
console.log(p1.u);
console.log(p1.s);

console.log(p1 instanceof Employe);

console.log(p1.msg);
console.log(p1.writeMsg());

p1.updateName("Mohamed");
console.log(p1.u);

// built in constructor
let strOne = "String";
let strTwo = new String();

console.log(typeof strOne);
console.log(typeof strOne);

console.log(strOne instanceof String);
console.log(strTwo instanceof String);

console.log(strOne.constructor == String);
console.log(strTwo.constructor == String);

// static pro or methods

console.log(Employe.u); // cannot access
console.log(Employe.count); //can access becouse static
console.log(Employe.numberOfEmploye());

// Inheritance

class Manger extends Employe {
  constructor(id, username, salary, permision) {
    super(id, username, salary);
    this.p = permision;
  }
}

let m1 = new Manger(12, "ahmed", 20000, 5);

console.log("###MANGER###");
console.log(m1.u);
console.log(m1.i);
console.log(m1.writeMsg());

// Encapsulation

console.log(p2.p); // undefined

console.log(p2.getPassword());

// prototype
String.prototype.addDot = function (value) {
  return `.${value}.`;
};

console.log(String.prototype.addDot("habeb"));

// Object Meta Data And Descriptor

let myObj = {
  a: 1,
  b: 2,
};

// Object.defineProperty(myObj, "c", {
//   writable: true,
//   enumerable: true,
//   configurable: false,
//   value: 3,
// });

// myObj.c = 40; // writable

for (let prop in myObj) {
  console.log(prop, myObj[prop]); // enumerable
}

// delete myObj.c; // if configurable false cannot delete

// add more than one prop

Object.defineProperties(myObj, {
  d: {
    enumerable: true,
    value: 4,
  },
  e: {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 5,
  },
});

console.log(myObj);

console.log(Object.getOwnPropertyDescriptor(myObj));
