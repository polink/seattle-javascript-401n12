'use strict';

const mongoose = require('mongoose');
// Vinicio - we use Bcrypt for password Hashing
const bcrypt = require('bcrypt');
const jsonWebToken = require('jsonwebtoken');

const users = new mongoose.Schema({
  // Vinicio - a schema is nothing more than a key-value pair
  username: {type: String, required: true, unique: true},
  // Vinicio - this is a hashed password
  password: {type: String, required: true},
  email: {type: String},
  role: {
    type: String,
    required: true ,
    default: 'user',
    enum: ['admin', 'editor', 'user'],
  }
});

// Vinicio - next here is the next function to be executed in mongoose's system
users.pre('save', function(next){
  // Vinicio - this function gets triggered by 1
  // TODO:
  // HASH THE PASSWORD
  // STORE THE HASHED PASSWORD AS THE NEW PASSWORD
  // (deleting the old password)
  // Continue with the process
  const HASH_ROUNDS = 10;
  return bcrypt.hash(this.password, HASH_ROUNDS)
    .then(hashedPassword => {
      this.password = hashedPassword;
      next();
    })
    .catch(error => {
      // Vinicio - notice how we are not trying to handle this
      throw error;
    });
});

// THANKS!
users.methods.generateToken = function() {
  const tokenData = {
    id:this._id,
    capabilities: [],
  };
  // Vinicio - here we encrypt the token
  // to encrypt, we need the data to encrypt and A SECRET
  // Vinicio - please be really careful with using the ||
  return jsonWebToken.sign(tokenData, process.env.SECRET || 'knP56b,[g^-$aVpW~RWJVDDUcV(^ehbyULdR^H)--DF-*9/sf%;L7f=&2f@dZ*$"_C#cx5Y+]VCTJG2$*/zF9srVSb,BC5JYL/A[*r^-+Z[8[Z7[jKhY38t*rAGcB');
};


users.statics.authenticateBasic = function(auth) {
  // Vinicio : I make a query because I'm going to perform a
  // mongoose search
  const query = {username: auth.username};
  // VInicio - given the username that you have given me,
  // can I find an unique user?
  return this.findOne(query)
    .then(user => {
      // Vinicio - if we found a user, is the password matching?
      return user && user.comparePassword(auth.password);
    })
    .catch(console.error);
};

users.methods.comparePassword = function(password) {
 // Vinicio - our stored passwords are HASHED
 // Vinicio - our argument passsword is not hashed
  // password is naked
  // this.password is hashed
  return bcrypt.compare(password, this.password)
    .then(response => response ? this : null);
  // If the response is true, return the user object
  // if not, return null
};

module.exports = mongoose.model('users', users);

