'use strict';

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jsonWebToken = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// ----------------------------------------------------------------------------
//  HOOKS
// ----------------------------------------------------------------------------
// Vinicio - this function is going to HASH our password
userSchema.pre('save', function(next) {
  return bcrypt.hash(this.password, 10)
    .then(hashedPassword => {
      this.password = hashedPassword;
      next(); // Vinicio - Saving the info in the DB
    })
    .catch(error => console.error(error));
});
// ----------------------------------------------------------------------------
//  METHODS
// ----------------------------------------------------------------------------
userSchema.methods.generateToken = function() {
  const tokenData = {
    id: this._id,
  };
  return jsonWebToken.sign(tokenData, process.env.secret || 'sekret');
};
// ----------------------------------------------------------------------------
// STATIC FUNCTIONS
// ----------------------------------------------------------------------------
userSchema.statics.findUserBasedOnToken = function(token){
  // 1 - DECODE TOKEN
  const decryptedToken = jsonWebToken.verify(token ,process.env.secret || 'sekret');

  // 2 - Now that we have a token, we need to find a user
  //     Create a query to find a user via mongoose
  const query = {_id: decryptedToken.id}; // Vinicio - in mongoose, queries are objects
  return this.findOne(query);
};

module.exports = mongoose.model('users',userSchema);