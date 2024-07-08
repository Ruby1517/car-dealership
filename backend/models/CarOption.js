const mongoose = require("mongoose");

const CarOptionSchema = new mongoose.Schema({
    carId: { type: String, required:true},
    optionId: { type: Array, required: true}
    
}, 
);

module.exports = mongoose.model("CarOption", CarOptionSchema)