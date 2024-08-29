const Sensor = require("../models/Sensor");
const { emergencyResponse } = require("./EmergencyResponse");

//Add threshold to compare with the sensor data, to detect collision
const angleChangeThreshold = 30; // degrees
const velocityChangeThreshold = 15; //m/s^2

const detectCollision = (ws) => {
    // Every time the sensor sends data, function gets executed
    ws.on('message', async(message) => {
        try{
            const data = JSON.parse(message);
            const {helmetId, accelerometer, gyroscope} = data;

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

            // Send the data back through websocket
            ws.send(JSON.stringify({collisionDetected: isCollision}));

            // If collision is detected, wait for 2 minutes and then notify the emergency contacts - SMS and share live location
            if(isCollision){
                setTimeout(async () => {
                    try{
                        await emergencyResponse(helmetId);
                    } catch(error){
                        console.error("Error in sending emergency response: ", error);
                    }
                }, 2 * 60 * 1000);
            }
        } catch(error){
            console.error("Error in detecting collision: ", error);
            ws.send(JSON.stringify({error: "Error in detecting collision"}));
        }
    })
}

module.exports = { detectCollision };
