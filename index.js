const express = require("express");
const app = express();
const userRoutes = require("./routes/User");
const collisionRoutes = require("./routes/Collision");
const paymentRoutes = require("./routes/Payment");
const emergencyContactsRoutes = require("./routes/EmergencyContacts");
const contactRoutes = require("./routes/Contact");
const locationRoutes = require("./routes/Location");
const emergencyResponseRoutes = require("./routes/EmergencyResponse");
const http = require("http");
const WebSocket = require("ws");
const dotenv = require("dotenv");
const database = require("./config/database");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const PORT = process.env.PORT || 4000
dotenv.config();
database.connect();

app.use(express.json());
app.use(cookieParser());
app.use(
    cors({
        origin: "http://localhost:3000",
        credentials: true,
    })
)


const server = http.createServer(app);
const wss = new WebSocket.Server({ server });
wss.on('connection', detectCollision);

app.use("/api/v1/auth", userRoutes);
app.use("/api/v1/collision", collisionRoutes);
app.use("/api/v1/payment", paymentRoutes);
app.use("/api/v1/emergencycontact", emergencyContactsRoutes);
app.use("/api/v1/contact", contactRoutes);
app.use("/api/v1/location", locationRoutes);
app.use("/api/v1/emergencyresponse", emergencyResponseRoutes);

app.get("/", (req, res) => {
    return res.json({
        success: true,
        message: "App started successfully!"
    });
});

server.listen(PORT, () => {
    console.log(`App is running at ${PORT}`);
})