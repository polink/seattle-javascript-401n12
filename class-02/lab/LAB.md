# LAB: Classes, Inheritance, Functional Programming

### Before you begin
* You'll need to initialize this lab folder as a new node module, install your dependencies, setup your npm script commands, and pull in your config files

#### Objects and Classes
In the `objects` folder, there is a full implementation of a Car and Motorcycle object created using a constructor function, with an index.js file that you can use to visually play with the objects as well as tests.

In the `objects/__tests__` folder, you'll find a file called `vehicle.test.js` that tests the implementation of both a `Car` and a `Motorcycle` using the constructor pattern.

###### Requirements
* Implement both `Car` and `Motorcycle` using a Javascript `Class` (in the `vehicle-class.js` file)
* Implement both `Car` and `Motorcycle` using a Javascript `Factory Function` (in the `vehicle-factory.js` file)
* As you do your work, other than changing the `require()` lines in both the index.js and the test files, both the `index.js` and the tests should work unchanged. Do not change the actual test or index code!
* This is the heart of a refactor -- re-implement the same functionality, the same signature, and the same I/O while completely rewriting the underlying implementation

* Repeat the process, from scratch, implementing a `FlyingVehicle` parent class, with `Airplane` and `Helicopter` child classes.
* Have some fun with the properties and methods that are both shared and esoteric...
* Start yourself with a Constructor function this time, and then create the factory and class versions from that.
* Again ... focus on making sure that your tests and implementations do not change when you switch out the object creators!

* Repeat the process, from scratch, implementing a `SeaCreature` parent class, with `Fish` and `Lobster` child classes.
* Have some fun with the properties and methods that are both shared and esoteric...
* Start yourself with a Factory function this time, and then create the constructor function and class versions from that.
* Again ... focus on making sure that your tests and implementations do not change when you switch out the object creators!
  
###### Testing
* tests that ensure the list module functions correctly with error-check parameters
* tests that the correct errors are thrown with invalid arguments exist
* tests to ensure that the list module functions return the correct results when invoked with valid arguments


### Assignemnt Submission Instructions
Refer to the [lab-instructions.md](../../reference/lab-instructions.md) for the complete lab submission process and expectations
