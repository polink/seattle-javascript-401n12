'use strict';

const Animal = function(name) {
  this.name = name;

  this.walk = () => {
    console.log('I am an Animal, and I am walking');
  };
};

// Animal.prototype.walk = () => {
//   console.log('I am an Animal, and I am walking');
// };


const gregor = new Animal('Gregor');
gregor.walk();
gregor;

const Dog = function(name) {
  // Vinicio -  Link the Animal's prototype to the Dog prototype (based on the value of this)
  // A
  Animal.call(this,name);

  // Vinicio -  Link the Animal's prototype to the Dog prototype (based on prototypes)
  // B
  // "Javascript Way"
  // this.prototype = Animal.prototype;

};


const kali = new Dog('Kali');
kali;





