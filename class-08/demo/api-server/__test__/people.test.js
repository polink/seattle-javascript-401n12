'use strict';

const People = require(`../models/people-model.js`);
// post in models -> create something
// post in schemas -> callback is going to happen afterwards
// post in APIS -> post request
const people = new People();

const supergoose = require('./supergoose.js');

beforeAll(supergoose.startDB);
afterAll(supergoose.stopDB);

describe('People Model', () => {
  it('can post() a new player', () => {
			// ARRANGE, ACT, ASSERT
    let obj = {name:'John'};// ARRANGE
    // Vinicio - without an ORM, we would have to connect directly to a DB here and write some SQL/
    // no-SQL commands
    // Vinicio - this POST, here, means to CREATE a new element
    return people.post(obj) // ACT
      .then(record => { // ARRANGE
				// Vinicio - this for each is just making sure that two objects are equal
					// ASSERTING
				//let keys = Object.keys(obj);
				expect(keys[0]).toEqual('name');
        Object.keys(obj).forEach(key =>{
          expect(record[key]).toEqual(obj[key]);
        });

      });
  });

  it('can get() a player', () => {
    let obj = {name:'John'};
		// INPUT -> object {}...
		// OUTPUT -> an object EQUAL to the object we saved
    return people.post(obj)
      .then(record => {
        // Vinicio - without an ORM, we would have to connect directly to a DB here and write some SQL/
        // no-SQL commands
        return people.get(record._id)
          .then(player => {
							// This code is testing for equality
            Object.keys(obj).forEach(key =>{
              expect(player[0][key]).toEqual(obj[key]);
            });
          });
      });
  });

});
