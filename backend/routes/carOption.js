const { verifyTokenAndAdmin } = require("./verifyToken");
const router = require("express").Router();
const CarOption = require("../models/CarOption");

//CREATE
router.post("/", verifyTokenAndAdmin, async (req, res) => {
    const newCarOption = new CarOption(req.body);

    try {
        const savedCarOption = await newCarOption.save();
        res.status(200).json(savedCarOption);

    } catch(err) {
        res.status(500).json(err)
    }
});

//UPDATE
router.put("/:id", verifyTokenAndAdmin, async(req, res) => {
    

    try {
        const updatedCarOption = await CarOption.findByIdAndUpdate(
            req.params.id, 
            {
                $set: req.body  
            }, 
            {new: true}
        );
        res.status(200).json(updatedCarOption);
    } catch(err) {
        res.status(500).json(err)
    }
});

//DELETE OPTION
router.delete("/:id", verifyTokenAndAdmin, async(req, res) => {
    try {
        await CarOption.findByIdAndDelete(req.params.id)
        res.status(200).json("Option has been deleted...")
    } catch(err) {
        res.status(500).json(err)
    }
});

//GET OPTION
router.get("/find/:id", async(req, res) => {
    try {
        const carOption = await CarOption.findById(req.params.id)        
        res.status(200).json(carOption)
    } catch(err) {
        res.status(500).json(err)
    }
});

//GET ALL OPTIONS
router.get("/", async(req, res) => {
    
    try {       
        const carOptions = await CarOption.find()
        
        res.status(200).json(carOptions)
    } catch(err) {
        res.status(500).json(err)
    }
});



module.exports = router