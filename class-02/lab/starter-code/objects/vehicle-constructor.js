'use strict';
//-------------------------------------------------------------------------
// Variables
	// name, wheels n_n
// Behavior (Functions)
  // drive,stop

class Vehicle {
	constructor(name, wheels) {
		this.name = name;
		this.wheels = wheels;
	}
	drive() {
		return 'Moving Forward';
	}

	stop() {
		return 'Stopping';
	}
}


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
//-------------------------------------------------------------------------
// Car Constructor
// behavior
  // N/A
// variables
  // color (just for the purposes of this lab)
const Car = function(name, color) {
  Vehicle.call(this, name, 4);
	// Vinicio - this is just for the demo
	this.color = color;
};

Car.prototype = new Vehicle();
//-------------------------------------------------------------------------
// variables
	// N/A
// behavior / "member" functions / methods
 // wheelie
const Motorcycle = function(name) {
  Vehicle.call(this,name,2);
};
Motorcycle.prototype = new Vehicle();

Motorcycle.prototype.wheelie = () => {
  return 'Wheee!';
};
//-------------------------------------------------------------------------

module.exports = {Car, Motorcycle};
