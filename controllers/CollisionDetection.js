const Sensor = require("../models/Sensor");
const Notification = require("../models/Notification");
const Location = require("../models/Location");
const Accident = require("../models/Accident");
const { generateAccidentID } = require("../utils/AccidentID");
const { emergencyResponse } = require("./EmergencyResponse");
const determineSeverity = require("../utils/determineSeverity");

// Add threshold to compare with the sensor data, to detect collision
const angleChangeThreshold = 30; // degrees
const velocityChangeThreshold = 15; // m/s^2

const detectCollision = (ws) => {
    // Every time the sensor sends data, function gets executed
    ws.on('message', async (message) => {
        try {
            const data = JSON.parse(message);
            const { helmetId, accelerometer, gyroscope, locationId } = data;

            // Calculate angle change and velocity change
            const angleChange = Math.sqrt(gyroscope.x ** 2 + gyroscope.y ** 2 + gyroscope.z ** 2);
            const velocityChange = Math.sqrt(accelerometer.x ** 2 + accelerometer.y ** 2 + accelerometer.z ** 2);

            const isCollision = (angleChange > angleChangeThreshold && velocityChange > velocityChangeThreshold);

            // Save sensor data to the database
            const sensorData = new Sensor({
                helmetId,
                accelerometer,
                gyroscope,
                angleChange,
                velocityChange,
                collisionDetected: isCollision,
                timestamp: Date.now(),
            });

            await sensorData.save();

            // Send the data back through WebSocket
            ws.send(JSON.stringify({ collisionDetected: isCollision }));

            /* If collision is detected, wait for 2 minutes and then notify the emergency contacts - SMS and share live location
            and store the required data in Accident and Notification models */
            if (isCollision) {
                setTimeout(async () => {
                    try {
                        // Fetch the live location using locationId
                        const location = await Location.findOne({ locationId });

                        // Call the emergency response function
                        await emergencyResponse(helmetId);

                        // Save notification data
                        const notification = new Notification({
                            helmetId,
                            notificationType: 'collision',
                            status: 'sent',
                            timestamp: Date.now(),
                        });
                        await notification.save();

                        // Save accident data
                        const accident = new Accident({
                            accidentID: generateAccidentID(),
                            helmetID: helmetId,
                            location: location ? location._id : null, // Save location reference
                            timestamp: Date.now(),
                            severity: determineSeverity(angleChange, velocityChange),
                        });
                        await accident.save();
                    } catch (error) {
                        console.error("Error in sending emergency response: ", error);

                        // Save notification data with failure status
                        const notification = new Notification({
                            helmetId,
                            notificationType: 'collision',
                            status: 'failed',
                            timestamp: Date.now(),
                        });
                        await notification.save();
                    }
                }, 2 * 60 * 1000);
            }
        } catch (error) {
            console.error("Error in detecting collision: ", error);
            ws.send(JSON.stringify({ error: "Error in detecting collision" }));
        }
    });
};

module.exports = { detectCollision };
