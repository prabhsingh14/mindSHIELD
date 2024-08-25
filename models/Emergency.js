import mongoose from 'mongoose';

const emergencyContactSchema = new mongoose.Schema({
    contactID: {
        type: Number,
        required: true,
        unique: true, // Ensure each contactID is unique
    },
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true, // Ensure each contact is associated with a user
    },
    name: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String, // Use String to handle various phone number formats
        required: true,
        validate: {
            validator: function(v) {
                // Example validation pattern for a phone number
                return /^[\d\s\+\-\(\)]+$/.test(v);
            },
            message: props => `${props.value} is not a valid phone number!`,
        },
    },
    emailID: {
        type: String,
        required: true,
        validate: {
            validator: function(v) {
                // Simple email validation pattern
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
            },
            message: props => `${props.value} is not a valid email address!`,
        },
    },
}, { timestamps: true });

// Export the EmergencyContact model
export const EmergencyContact = mongoose.model("EmergencyContact", emergencyContactSchema);
