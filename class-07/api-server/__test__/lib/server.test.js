'use strict';

// Vinicio - this is called de-structuring
const {server} = require('../../lib/server.js');
const supertest = require('supertest');
// Vinicio - we are creating an instance of superTest with the server we created
const mockRequest = supertest(server);

describe('web server', () => {

  it('should respond with a 500 on an error', () => {

			// Vinicio - here you can do mockRequest.ANY_ROUTE, and it'll call a fake
			// version of your server
			// INPUT -> GET REQUEST to /foo
			// OUTPUT -> 500 STATUS CODE
			// Vinicio - promises are require to send/manage async requests
    return mockRequest // Vinicio -  This is a JS Promise
      .get('/foo') // INPUT
      .then(results => {
        expect(results.status).toBe(500);// OUTPUT
      }).catch(console.error);

  });

  it('should respond with a 404 on an invalid route', () => {
		// INPUT -> GET request to /foobar
		// OUTPUT -> 404 status code
    return mockRequest
      .get('/foobar')
      .then(results => {
        expect(results.status).toBe(404);
      }).catch(console.error);

  });

  it('should respond with a 404 on an invalid method', () => {
		// INPUT -> POST REQUEST to home folder (/)
		// OUTPUT -> 404 status code
    return mockRequest
      .post('/')
      .then(results => {
        expect(results.status).toBe(404);
      }).catch(console.error);

  });

  it('should respond properly on request to /api/v1/posts', () => {
		//INPUT -> GET REQUEST to /api/v1/posts
		//OUTPUT -> 200 status code
    return mockRequest
      .get('/api/v1/posts')
      .then(results => {
        expect(results.status).toBe(200);
      }).catch(console.error);

  });

  it('doing something', () => {
    return mockRequest
      .post('/api/v2/auth')
      .then(result => {
        expect(result.status).toEqual(401);
      }).catch(console.error);
  });

});
