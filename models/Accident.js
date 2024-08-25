const mongoose = require('mongoose');
const Helmet = require('./Helmet'); 
const Location = require('./Location'); 

const accidentSchema = new mongoose.Schema({
    accidentID: {
        type: String,
        required: true,
        unique: true, // Ensure each accidentID is unique
    },
    helmetID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Helmet',
        required: true, // Ensures each accident entry is associated with a helmet
    },
    location: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Location', // Assuming you have a Location model
        required: true, // Ensures each accident entry has a location
    },
    timestamp: {
        type: Date, // Use Date type for storing date and time
        required: true,
    },
    severity: {
        type: String,
        enum: ['Minor', 'Moderate', 'Severe', 'Critical'], // Define possible severity levels
        required: true,
    },
}, { timestamps: true });

// Export the Accident model
module.exports = mongoose.model('Accident', accidentSchema);