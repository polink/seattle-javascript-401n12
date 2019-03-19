'use strict';

const superagent = require('superagent');
const Users = require('../users-model.js');

const API = 'http://localhost:3000';
const GTS = 'https://www.googleapis.com/oauth2/v4/token';
const SERVICE = 'https://www.googleapis.com/plus/v1/people/me/openIdConnect';

let authorize = (request) => {

  // WE ARE IN STEP 3
  console.log('(1)', request.query.code);

  /// STEP 3.1
  return superagent.post(GTS)
    .type('form')
    .send({
      code: request.query.code,
      client_id: process.env.GOOGLE_CLIENT_ID,
      client_secret: process.env.GOOGLE_CLIENT_SECRET,
      redirect_uri: `${API}/oauth`,
      grant_type: 'authorization_code',
    })
    .then( response => {
      // STEP 3.2
      let access_token = response.body.access_token;
      console.log('(2)', access_token);
      return access_token;
    })
    .then(token => {
     // STEP 4
      console.log(SERVICE, token);
      return superagent.get(SERVICE)
        .set('Authorization', `Bearer ${token}`)
        .then( response => {
          // Step 4
          let user = response.body;
          console.log('(3)', user);
          return user;
        });
    })
    .then( oauthUser => {
      // STEP FIVE
      console.log('(4) Create Our Account');
      return Users.createFromOauth(oauthUser.email);
    })
    .then( actualUser => {
      return actualUser.generateToken();
    })
    .catch( error => error );
};


module.exports = authorize;