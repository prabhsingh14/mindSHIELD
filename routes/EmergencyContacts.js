const express = require("express");
const router = express.Router();

// Import the required controllers and middleware functions
const {
    createEmergencyContact,
    deleteEmergencyContact,
    updateEmergencyContact,
} = require("../controllers/EmergencyContacts")

const { auth } = require("../middlewares/auth")

router.post("/createEmergencyContact", auth, createEmergencyContact)
router.post("/deleteEmergencyContact", auth, deleteEmergencyContact)
router.post("/updateEmergencyContact", auth, updateEmergencyContact)

module.exports = router;