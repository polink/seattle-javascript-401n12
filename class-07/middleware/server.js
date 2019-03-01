'use strict';

const express = require('express');
const loggerMiddleware = require('./logger');
const errorMiddleware = require('./error');

const app = express();

// Vinicio - before I define any routes, I want to set up a middleware function
// Vinicio - Having a "naked" app.use will always involve a Global middleware
app.use(loggerMiddleware);


const simpleMiddleware = (request,response,next) => {
  console.log('This is a simple MW');
  next();
};

const curriedMiddleware = (argument) => {
  // Vinicio - This is a curried function BECAUSE it's a function that returns a function
  // Vinicio - This function has argument 'pre-loaded'
  return (request,response,next) => {
    // Vinicio - from here, I have access to argument via a closure
    console.log(argument);
    request.customValue = argument;
    next();
  };
  // Vinicio - scope should end right here
};

app.get('/', (request, response) => {
  console.log('I am in the / route');
  response.status(200);
  response.send('/');
});

app.get('/simple',simpleMiddleware,(request, response) => {
  console.log('I am in the /simple route');
  response.status(200);
  response.send('Simple');
  // Vinicio - let's pretend we have an error
  // // Vinicio - Here, I have to know that next() represenst my error handler
  // next();
  // throw 'ERROR :(';
});

// Vinicio - we pre-apply a value
const preAppliedKali = curriedMiddleware('Kali');

// We use a value right here
app.get('/curried',preAppliedKali,(request, response) => {
  console.log('I am in the /simple route');
  response.status(200);
  response.send(request.customValue);
  // Vinicio - let's pretend we have an error
  // // Vinicio - Here, I have to know that next() represenst my error handler
  // next();
  // throw 'ERROR :(';
});

app.get('/curried2',curriedMiddleware('Khal Basil is Cute'),(request, response) => {
  console.log('I am in the /simple route');
  response.status(200);
  response.send(request.customValue);
  // Vinicio - let's pretend we have an error
  // // Vinicio - Here, I have to know that next() represenst my error handler
  // next();
  // throw 'ERROR :(';
});

app.use(errorMiddleware);

app.listen(3000);