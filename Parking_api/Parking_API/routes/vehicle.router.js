const express = require("express");
const router = express.Router();

//getting vehicle controller's functions
const vehicleController = require("../controllers/Vehicle.controller");


//creating route to get vehicle's information
router.get("/vehicles",
    vehicleController.findAllVehicle
);


//creating route to get one vehicle by id
router.get("/vehicles/:identifier",
    vehicleController.findVehicleByID
);

//creating route to post new vehicle
router.post("/vehicles",
    vehicleController.addVehicle
);

//creating route to update vehicle end_Date
router.put("/vehicles/:identifier",
    vehicleController.updateVehicle
);

module.exports = router;