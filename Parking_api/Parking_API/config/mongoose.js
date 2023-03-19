const Mongoose = require("mongoose");
const debug = require("debug")("app:mongoose_config")

const dbhost =  process.env.DBHOST ||"localhost";
const dbport = process.env.DBPORT || "27017";
const dbname = process.env.DBNAME || "Parking_API";
const dburi = process.env.DBURI || `mongodb://${dbhost}:${dbport}/${dbname}`;

const connect = async ()=>{
    try{
        await Mongoose.connect(dburi);
        debug("Connected to DB");
    }
    catch(error){
        debug("Error when trying to connect to DB");
        process.exit(1);
    }
}

module.exports = {
    connect
}