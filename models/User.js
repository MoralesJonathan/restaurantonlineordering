'use strict'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    dropDups: true
  },
  passHash: {
    type: String,
    required: true
  },
  name: String,
  restaurant_affiliation: String,
  restaurant_address: String,
  position: String,
  hireDate: Date,
  priviledge: {
    type: String,
    required: true,
    default: customer,
    enum: ['customer', 'manager', 'server', 'admin']
  }
});

module.exports = mongoose.model("User", UserSchema);
