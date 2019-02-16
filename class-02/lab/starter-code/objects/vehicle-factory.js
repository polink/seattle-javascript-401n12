'use strict';
// ---------------------------------------------------------------------
// Vinicio - since I'm making a car factory, I still need the traditional
// constructor for Vehicle.
const Vehicle = function(name, wheels) {
	// Vinicio - this part will what in classes we call "costructor"
  this.name = name;
  this.wheels = wheels;
};

Vehicle.prototype.drive = () => {
  return 'Moving Forward';
};

Vehicle.prototype.stop = () => {
  return 'Stopping';
};
// ---------------------------------------------------------------------
function CarFactory(name,color) {
	// Vinicio - this is suppose to have the same interface as Vehicle,
	// but it should add the color
	const newCar = Object.assign(
			{},
			{color},
			new Vehicle(name)
	);
	// Vinicio - this is not a "HARD" requirement to have a factory
	return Object.freeze(newCar);
}

module.exports = CarFactory;
