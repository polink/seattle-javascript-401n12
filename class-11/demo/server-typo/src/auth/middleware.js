'use strict';

const User = require('./user-model');

module.exports = (request,response,next) => {
  // A request is to have a header called
  // authorization with authentication information.
  try{
    let [authType, authString] = request.headers.authorization.split(/\s+/); // ['BASIC','aoeuaoeua'];

    switch(authType.toLowerCase()) {
      case 'basic':
        return _authBasic(authString); //A
      default:
          return _authError();
    }
    // BASIC aoeuaoeuaoeuaoeuaoeuaoeuaoeuaoeu
  }catch(e) {

  }

  function _authBasic(authString) {
    const base64Buffer = Buffer.from(authString, 'base64');
    const bufferString = base64Buffer.toString();
    let [username, password] = bufferString.split(':');
    let auth = {username,password};
    // {username:'Kali',password:'I bark at people I do not like'}
    //Vinicio - right here, we have no idea if the username/password
    // are correct
    return User.authenticateBasic(auth)
      .then(user => _authenticate(user)); // B
  }

  // Vinicio - this function pretends that the user could log in
  // if it receives an object
  function _authenticate(user) { // C
    if(user) {
      request.user = user; // Vinicio - this is what lets me assume that in I could log in I have a request.user.
      request.token = user.generateToken(); // Vinicio - we use this in our routes
      next(); // CHAIN ENDS -> ROUTE
    } else {// Vinicio - if we get null
      return _authError(); // CHAIN ENDS
    }
  }

  function _authError() {
    next({
      status: 401,
      statusMessage: 'Unauthorized',
      message: 'Invalid Credentials',
    });
  }
};

