'use strict';

process.env.STORAGE = 'mongo';

const jwt = require('jsonwebtoken');

// Vinicio - this is a normal full-fledged server
const server = require('../../../src/app.js').server;

const supergoose = require('../../supergoose.js');
// Vinicio - we take the real server and build a fake version out of it
const mockRequest = supergoose.server(server);

let users = {
  admin: {username: 'admin', password: 'password', role: 'admin'},
  // editor: {username: 'editor', password: 'password', role: 'editor'},
  // user: {username: 'user', password: 'password', role: 'user'},
};

beforeAll(supergoose.startDB);
afterAll(supergoose.stopDB);

describe('Auth Router', () => {

  Object.keys(users).forEach( userType => {

    describe(`${userType} users`, () => {

      let encodedToken;
      let id;

      it('can create one', () => {
					// ARRANGE --> All the code I use setup the test
					// ACT --> The actual action you want to test
					// ASSERT --> expects/Assert
        return mockRequest.post('/signup') // act
          .send(users[userType]) // act
          .then(results => { // act
						// setting up up the asserts - Arrange
            var token = jwt.verify(results.text, process.env.SECRET || 'changeit');
            id = token.id;
            encodedToken = results.text;

						// Vinicio - over here we are making sure the response has values we are looking for
            expect(token.id).toBeDefined(); // assert
            expect(token.capabilities).toBeDefined(); // assert
          });
      });

      it('can signin with basic', () => {
        return mockRequest.post('/signin')
          .auth(users[userType].username, users[userType].password)
          .then(results => {
            var token = jwt.verify(results.text, process.env.SECRET || 'changeit');
            expect(token.id).toEqual(id);
            expect(token.capabilities).toBeDefined();
          });
      });

    });

  });

});
