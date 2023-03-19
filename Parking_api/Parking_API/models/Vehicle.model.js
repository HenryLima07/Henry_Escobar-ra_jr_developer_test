const { default:mongoose } = require("mongoose");
const { Schema } = require("mongoose");

const vehicleSchema = new Schema({
    car_identifier:{
        
        type: String,
        required: true,
        trim: true,
        unique: true,
    },

    start_date:{

        type: Date,
        required: true,
        trim: true,
    },

    end_date:{

        type: Date,
        trim: true,
    },

    hidden:{
        type: Boolean,
        default: false,
    }
});

module.exports = mongoose.model("Vehicle", vehicleSchema);