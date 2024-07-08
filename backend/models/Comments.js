const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
 {
    carId: { type: String, required:true},
    message: { type: String, required: true},
    name: { type: String, required: true},
    email: {type: String}
 }, 
 {timestamps: true}
);

module.exports = mongoose.model("Comments", commentSchema)