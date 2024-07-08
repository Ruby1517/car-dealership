
const { verifyTokenAndAdmin } = require("./verifyToken");
const Option = require("../models/Option");

const router = require("express").Router();


//CREATE
router.post("/", verifyTokenAndAdmin, async(req, res) => {
    const newOption = new Option(req.body);

    try {
        const savedOption = await newOption.save();
        res.status(200).json(savedOption)

    } catch(err) {
        res.status(500).json(err);
    }
});

//UPDATE
router.put("/:id", verifyTokenAndAdmin, async(req, res) => {
    

    try {
        const updatedOption = await Option.findByIdAndUpdate(
            req.params.id, 
            {
                $set: req.body  
            }, 
            {new: true}
        );
        res.status(200).json(updatedOption);
    } catch(err) {
        res.status(500).json(err)
    }
});

//DELETE OPTION
router.delete("/:id", verifyTokenAndAdmin, async(req, res) => {
    try {
        await Option.findByIdAndDelete(req.params.id)
        res.status(200).json("Option has been deleted...")
    } catch(err) {
        res.status(500).json(err)
    }
});

//GET OPTION
router.get("/find/:id", async(req, res) => {
    try {
        const option = await Option.findById(req.params.id)        
        res.status(200).json(option)
    } catch(err) {
        res.status(500).json(err)
    }
});

//GET ALL OPTIONS
router.get("/", async(req, res) => {
    
    try {       
        const options = await Option.find()
        
        res.status(200).json(options)
    } catch(err) {
        res.status(500).json(err)
    }
});





module.exports = router