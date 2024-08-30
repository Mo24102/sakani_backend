const mongoose = require('../database/db');

const offerSchema = new mongoose.Schema({

  // percentage: {
  //   type: "Number",
  //   required: true
  // },
  username: {
    type: String,
    required: false
  },
  email: {
    type: String,
    required: false
  },
  phoneNumber: {
    type: String,
    required: false
  },
  type: {
    type: String,
    required: false
  },
  propertyaddress: {
    type: String,
    required: false
  },
  rentDuration: {
    type: String,
    required: false
  },
  
    moreDetails: {
      type: String,
      required: false
    },
    propPrice: {
      type: Number,
      required: false
    },
  
    price: {
      type: Number,
      required: false
    },
  


});


module.exports = mongoose.model("offer", offerSchema);