import mongoose from 'mongoose';

const locationSchema = mongoose.Schema({
    locationID: {
        type: String,
        required: true,
        unique: true, // Ensure each locationID is unique
    },
    helmetID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Helmet",
        required: true, // Ensures each location entry is associated with a helmet
    },
    longitude: { // Corrected spelling
        type: Number,
        required: true,
        validate: {
            validator: function(v) {
                return v >= -180 && v <= 180; // Longitude ranges from -180 to 180
            },
            message: props => `${props.value} is not a valid longitude!`
        }
    },
    latitude: {
        type: Number,
        required: true,
        validate: {
            validator: function(v) {
                return v >= -90 && v <= 90; // Latitude ranges from -90 to 90
            },
            message: props => `${props.value} is not a valid latitude!`
        }
    },
    timestamp: {
        type: Date, // Use Date type for easier manipulation and querying
        required: true,
    },
}, { timestamps: true });

// Optionally, you can add indexes if needed
locationSchema.index({ helmetID: 1, timestamp: -1 });

export const Location = mongoose.model("Location", locationSchema);
