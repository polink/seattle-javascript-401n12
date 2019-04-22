'use strict';

const User = require('./user-model');

module.exports = (request, response, next) => {
  // Vinicio - split will give us an array
  // const splitValues = request.headers.authorization.split(/s+/);
  // const type = splitValues[0];
  // const data = splitValues[1];
  let [type, data] = request.headers.authorization.split(' ');
  type = type.trim().toLowerCase();

  if(type === 'bearer'){
    return authenticateBearerToken(data);
  }
  //----------------------------------------------------------------------------------
  // HELPER FUNCTIONS
  //----------------------------------------------------------------------------------
  function authenticateBearerToken(data) {
    /* ASSUMPTIONS -
     * We are a bearer token
     * We need to authenticate the token
     */
    // 1 - Use a function authenticate a bearer token
    return User.findUserBasedOnToken(data)
      .then(user => {
        // Over here, all we know is that there were no errors
        if (user) {
          // Vinicio - this line lets everyone know that the request
          // was authenticated
          request.user = user;
          request.token = user.generateToken();
          next();
        } else {
          // Vinicio - If there are no users, return an error
          next('Invalid Username OR Password');
        }
      })
      .catch(next);
    // Vinicio - I'm using next because in a sever, you always want to return a response
  }
  //----------------------------------------------------------------------------------
};