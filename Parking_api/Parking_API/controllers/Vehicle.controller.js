const Vehicle = require("../models/Vehicle.model");
const debug = require("debug")("app:vehicle-controller");

const controller = {};

controller.findAllVehicle = async(req, res)=>{
    try{
        const data = await Vehicle.find();

        return res.status(200).json(data);
    }
    catch(error){
        debug(error);
        return res.status(500).json({
            error: "Error en el sevidor"
        })
    }
}

controller.findVehicleByID = async(req, res)=>{
    try{
        const { identifier } = req.params;
        const data = await Vehicle.findById(identifier);

        if(!data) return res.status(404).json({
            error: "Not found"
        });
        
        return res.status(200).json(data);
    }
    catch(error){
        debug(error);
        return res.status(500).json({
            error: "Internal DB error"
        })
    }
}

controller.addVehicle = async(req, res)=>{
    try{
        const { carIdentifier } = req.body;
        const start_date = new Date();
        
        const vehicle = new Vehicle({
            car_identifier: carIdentifier,
            start_date: start_date
        });

        const newVehicle = await vehicle.save();

        return res.status(200).json(newVehicle);

    }catch(error){
        
        debug(error);
        return res.status(500).json({
            error: "Internal DB error"
        })
    }
}

controller.updateVehicle = async(req, res)=>{
    try{

        const { identifier } = req.params;

        const vehicle = await Vehicle.findById(identifier);

        if(!vehicle) return res.status(404).json({error: "Not found"});

        vehicle.end_date = new Date();
        vehicle.hidden = false;

        const updatedVehicle = await vehicle.save();

        return res.status(200).json(updatedVehicle);

    }
    catch(error){
        debug(error);
        
        return res.status(500).json({
            error: "Unexpected DB error"
        })
    }
}
module.exports = controller;