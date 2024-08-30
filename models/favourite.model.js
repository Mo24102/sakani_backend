const mongoose = require('mongoose');
const favouriteSchema = mongoose.Schema({
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
    phoneNumber: {
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
    image: {
        type: String,
        required: false
    },
    longitude: {
        type: Number,
        required: false
    },
    latitude: {
        type: Number,
        required: false
    },
    color: {
        type: String,
        required: false
    }
}, { timestamps: true });

module.exports = mongoose.model('Favourite', favouriteSchema);
