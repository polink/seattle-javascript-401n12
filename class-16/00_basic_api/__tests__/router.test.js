'use strict';
/*
  Vinicio - By starting this file, we know that we'll need a router
  to support sign up operations.

  We are going to design our system so that our route is /signup and
  it receives a POST request.

  in TDD, We always strive to have running code.
 */

// Vinicio - we create a mock request by
const server = require('../src/app').server; //1 - import the server
const supergoose = require('./supergoose'); //2 - import supergoose
const mockRequest = supergoose.server(server); //3 - create a new supergoose server from our server

const jsonWebToken = require('jsonwebtoken');

//------------------------------------------------------------------------
// DB SETUP
//------------------------------------------------------------------------
beforeAll(supergoose.startDB);
afterAll(supergoose.stopDB);
//------------------------------------------------------------------------

let savedToken = null;

describe('#Auth Router', () => {
  it('can get a 200 status code and a token when creating a user', () => {
    // 1 - INPUT: SEND a POST request with username and pass
    return mockRequest.post('/signup')
      .send({username: 'Kali', password: 'Khal'}) // Vinicio - Body of the post request
      .then(response => {
        // 2 - OUTPUT: Expect back a token and a 200 status code
        expect(response.status).toEqual(200);

        const token = jsonWebToken.verify(response.text, process.env.SECRET || 'sekret');
        // Vinicio - token is decrypted
        savedToken = response.text;
        expect(token.id).toBeDefined();
      });
  });

  it('can set authenticated requests to an authenticated route', () => {
    // 1 - INPUT: SEND a GET Request with a token
    return mockRequest.get('/protected')
      .set('Authorization', `Bearer ${savedToken}`)
      .then(response => {
        // 2 - OUTPUT: 200 Status Code
        expect(response.status).toEqual(200);
      });
  });

  it('can set reject requests without a proper token', () => {
    // 1 - INPUT: SEND a GET Request with a invalid token
    return mockRequest.get('/protected')
      .set('Authorization', `Bearer null`)
      .then(response => {
        expect(response.status).toEqual(401);
      });
  });
});