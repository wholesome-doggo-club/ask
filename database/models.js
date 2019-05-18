const mongoose = require('mongoose');
const db = require('./index.js');

const doggoSchema = new mongoose.Schema({
  name: {
    type: String,
    allowNull: false
  },
  sex: {
    type: String,
    allowNull: false
  },
  location: {
    type: String,
    allowNull: false
  },
  breed: {
    type: String,
    allowNull: false
  },
  size: {
    type: String,
    allowNull: false
  },
  coatLength: {
    type: String,
    allowNull: false
  },
  vaccinations: {
    type: String,
    allowNull: false
  },
  goodInHomeWith: {
    type: String,
    allowNull: false
  },
  health: {
    type: String,
    allowNull: false
  },
  adoptionFee: {
    type: Number,
    allowNull: false
  },
  ageInWeeks: {
    type: Number,
    allowNull: false
  },
  description: {
    type: String,
    allowNull: false
  },
  shelter: {
    type: String,
    allowNull: false
  },
  shelterEmail: {
    type: String,
    allowNull: false
  }
});

const customerInquiry = new mongoose.Schema({
  firstName: {
    type: String,
    allowNull: false
  },
  lastName: {
    type: String,
    allowNull: false
  },
  email: {
    type: String,
    allowNull: false
  },
  country: {
    type: String,
    allowNull: false
  },
  zipcode: {
    type: Number,
    allowNull: false
  },
  phoneNumber: {
    type: String,
    allowNull: false
  },
  communication: {
    type: Boolean,
    allowNull: true
  },
  message: {
    type: String,
    allowNull: false
  }
})

const Doggo = mongoose.model('Doggo', doggoSchema);
const Customer = mongoose.model('Customer', customerInquiry);

module.exports = { Doggo, Customer };