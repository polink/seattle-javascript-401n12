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
    let obj = {name:'John'};
    // Vinicio - without an ORM, we would have to connect directly to a DB here and write some SQL/
    // no-SQL commands
    // Vinicio - this POST, here, means to CREATE a new element
    return people.post(obj)
      .then(record => {
        Object.keys(obj).forEach(key =>{
          expect(record[key]).toEqual(obj[key]);
        });
      });
  });

  it('can get() a player', () => {
    let obj = {name:'John'};
    return people.post(obj)
      .then(record => {
        // Vinicio - without an ORM, we would have to connect directly to a DB here and write some SQL/
        // no-SQL commands
        return people.get(record._id)
          .then(player => {
            Object.keys(obj).forEach(key =>{
              expect(player[0][key]).toEqual(obj[key]);
            });
          });
      });
  });

});