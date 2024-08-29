const express = require("express");
const router = express.Router();
const {detectCollision} = require("../controllers/CollisionDetection");

router.ws('/collision', detectCollision);

module.exports = router;