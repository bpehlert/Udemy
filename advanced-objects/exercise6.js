//Evaluate these:
//#1
[2] === [2]
// returns false
{} === {}
// returns false

//#2 what is the value of property a for each object.
const object1 = { a: 5 };
const object2 = object1;
const object3 = object2;
const object4 = { a: 5};
object1.a = 4;

// object1.a = 4
// object2.a = 4
// object3.a = 4
// object4.a = 5


//#3 create two classes: an Animal class and a Mamal class.
// create a cow that accepts a name, type and color and has a sound method that moo's her name, type and color.

class Animal {
  constructor(name, type, color) {
    this.name = name;
    this.type = type;
    this.color = color;
  }
}

class Mamal extends Animal {
  constructor(name, type, color, sound) {
    super(name, type, color)
    this.sound = sound;
  }
  greet() {
    console.log(`${this.sound}! My name is ${this.name}, I'm a ${this.type}, and I'm ${this.color}.`);
  }
}

let name = prompt("Whats is your name?");
let type = prompt("What animal are you?");
let color = prompt("What color are you?");
let sound = prompt("What sound do you make?");
// const cow = new Mamal ("Ben", "Cow", "Brown", "mooooo");
const animal = new Mamal (name, type.toLowerCase(), color.toLowerCase(), sound.toUpperCase());

animal.greet()
