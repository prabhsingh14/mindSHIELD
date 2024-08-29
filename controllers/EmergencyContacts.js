const mongoose = require('mongoose');
const User = require("../models/User");
const EmergencyContacts = require("../models/EmergencyContacts");

// Create a new emergency contact
exports.createEmergencyContact = async(req, res) => {
    try{
        const userId = req.params.userId;
        const {name, phoneNumber} = req.body;

        const user = await User.findById(userId);
        if(!user){
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }

        const emergencyContact = new EmergencyContacts({
            name,
            phoneNumber,
            userId
        });

        await emergencyContact.save();

        user.emergencyContacts.push(emergencyContact._id);
        await user.save();

        return res.status(201).json({
            success: true,
            emergencyContact,
            message: "Emergency contact created successfully"
        });
    } catch(error){
        console.error(error);
        return res.status(500).json({
            success: false,
            message: "Emergency contact cannot be created. Please try again."
        });
    }
}

// Delete an emergency contact
exports.deleteEmergencyContact = async(req, res) => {
    try{
        const userId = req.params.userId;
        const emergencyContactId = req.params.emergencyContactId;

        const user = await User.findById(userId);
        if(!user){
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }

        const emergencyContact = await EmergencyContacts.findByIdAndDelete(emergencyContactId);
        if(!emergencyContact){
            return res.status(404).json({
                success: false,
                message: "Emergency contact not found"
            });
        }

        user.emergencyContacts = user.emergencyContacts.filter(
            (id) => id.toString() !== emergencyContactId // Remove the emergency contact from the user's list
        );

        await user.save();

        return res.status(200).json({
            success: true,
            message: "Emergency contact deleted successfully"
        });
    } catch(error){
        console.error(error);
        return res.status(500).json({
            success: false,
            message: "Emergency contact cannot be deleted. Please try again."
        });
    }
};

// Update an emergency contact
exports.updateEmergencyContact = async(req, res) => {
    try{
        const userId = req.params.userId;
        const emergencyContactId = req.params.emergencyContactId;
        const {name, phoneNumber} = req.body;

        const user = await User.findById(userId);
        if(!user){
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }

        const emergencyContact = await EmergencyContacts.findByIdAndUpdate(
            emergencyContactId,
            {name, phoneNumber},
            {new: true}
        ); 

        if(!emergencyContact){
            return res.status(404).json({
                success: false,
                message: "Emergency contact not found"
            });
        }

        return res.status(200).json({
            success: true,
            emergencyContact,
            message: "Emergency contact updated successfully"
        });
    } catch(error){
        console.error(error);
        return res.status(500).json({
            success: false,
            message: "Emergency contact cannot be updated. Please try again."
        });
    }
};