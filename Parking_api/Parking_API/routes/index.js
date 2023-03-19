var express = require('express');
var router = express.Router();

//getting vehicle controller's functions
const vehicleRouter = require("./vehicle.router");

router.use("/", vehicleRouter);

module.exports = router;
