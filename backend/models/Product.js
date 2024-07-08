const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    make: { type: String, required:true},
    model: { type: String, required: true},
    desc: { type: String},
    imgs: { type: Array},
    carType: {type: String, required: true},
    color: { type: String, required: true},
    fuel: { type: String, required: true},
    transmission: { type: String, required: true},
    year: { type: Number, required: true},
    mileage: { type: String, required: true},
    vin: { type: String, required: true, unique:true},
    engin_power: { type: String},
    price: { type: Number, required: true},    
    options: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'CarOption' 
    }]
    
}, 
{timestamps: true}
);

module.exports = mongoose.model("Product", ProductSchema)