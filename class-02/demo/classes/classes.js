'use strict';

class Animal {
  constructor(name){
    this.name = name;
  }

  walk() {
    console.log('I am an animal, And I am walking');
  }
}

// const gregor = new Animal("Gregor");
// gregor.walk();


class Dog extends Animal {
  constructor(name) {
    super(name); // Vinicio - in this line, super is my animal constructor
  }

  run() {
    console.log('I am a dog, and I am running');
  }

}

const kali = new Dog("Khaleesi");
console.log(kali);
kali.run();
kali.walk();

