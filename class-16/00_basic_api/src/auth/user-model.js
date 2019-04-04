'use strict';

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

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

// Vinicio - this function is going to HASH our password
userSchema.pre('save', function(next) {
  return bcrypt.hash(this.password, 10)
    .then(hashedPassword => {
      this.password = hashedPassword;
      next(); // Vinicio - Saving the info in the DB
    })
    .catch(error => console.error(error));
});

module.exports = mongoose.model('users',userSchema);