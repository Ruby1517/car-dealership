const mongoose = require("mongoose");

const modelSchema = new mongoose.Schema(
    {
        name: { type: String, required:true, unique:true},
        brand: { type: String, required: true},
        type: { type: String, required: true},
    }, 
);

module.exports = mongoose.model("Model", modelSchema)