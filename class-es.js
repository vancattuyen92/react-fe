// create a class
class Rectange {
  constructor(height, width, type) {
    this.width = width,
    this.height = height,
    this.name = null,
    this.color = '#fff'
  }

  getName() {
    return this.name
  }
}

class Shape extends Rectange {
  constructor(height, width) {
    super(width, height);
  }

  getWidth() {
    return this.width
  }
}

const rectange = new Rectange();
const shape = new Shape(12, 34);
console.log('shape: ', shape.getWidth())
console.log('rectage: ', rectange.color, rectange.getName())


// class no hosting
// Shape()
// function Shape() {}

// new ClassShape();
// class ClassShape {}

// demo a class
/*
  - create 1 class Person has properties: firstName, lastName, age, color
  - add method: get first name, get full name (firstName + lastName)
*/

class Person {
  constructor(firstName, lastName, age, color) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.color = color;
  }
  getfirstName() {
    return this.firstName;
  }
  getFullName() {
    return this.firstName + this.lastName
  }

}

const person = new Person('Tuyen', 'Van', 28, 'yellow');
console.log(person.getFullName())


