const mongoose = require('mongoose');
const propertySchema = mongoose.Schema({
    type: {
        type: String,
        required: false
    },
    status: {
        type: String,
        required: false
    },
    propertyaddress: {
        type: String,
        required: false
    },
    price: {
        type: Number,
        required: false
    },
    phoneNumber: { // corrected typo
        type: Number,
        required: false
    },
    moreDetails: {
        type: String,
        required: false
    },
    rentDuration: {
        type: String,
        required: false
    },
    imagePath: {
        type: String,
        default: "https://via.placeholder.com/150",
        validator: {
            validator: function (path) {
                return validator.isURL(path);
            },
            message: "image path must be a valid URL",
        },
    },
    longitude: {
        type: Number,
        required: false
    },
    latitude: {
        type: Number,
        required: false
    }

}, { timestamps: true });



const Resdential = mongoose.model('Resdential', propertySchema);
const Commercial = mongoose.model('Commercial', propertySchema);
const Property = mongoose.model('Property', propertySchema);
// const favourite = mongoose.model('favourite', propertySchema);
module.exports = {
    Resdential,
    Commercial,
    Property
};

