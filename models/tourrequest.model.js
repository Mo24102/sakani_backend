const mongoose = require('mongoose');
const tourSchema = new mongoose.Schema({
  type: {
    type: String,
    required: false,
    // enum: ['inPerson', 'virtual'] 
  },
  date: {
    type: Date,
    required: false
  },
  image: {
    type: String, 
    required: false
  },
  propertyStatus : {
    type: String, 
    required: false
  },
  propertyAddress: {
    type: String, 
    required: false
  },
  propertyDetails: {
    type: String, 
    required: false
  },
  rentDuration: {
    type: String, 
    required: false
  },
  phoneNumber: {
    type: Number, 
    required: false
  },
});


module.exports = mongoose.model('tour', tourSchema);