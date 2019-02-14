'use strict';

const Animal = function(name) {
  this.isCute = true;
};


function DogFactory(name) {
  const newDog = Object.assign(
    {},
    {name},// {name : name},
    {speak},
    new Animal()
  );

  function speak() {
    console.log('I am a dog, and I am speaking');
  }

  return Object.freeze(newDog);
}


const kali = DogFactory('Khaleesi');
kali;