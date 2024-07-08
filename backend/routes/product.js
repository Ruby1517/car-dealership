const { 
    verifytoken, 
    verifyTokenAndAuthorization, 
    verifyTokenAndAdmin } = require("./verifyToken");
const Product = require("../models/Product")

const router = require("express").Router();

//CREATE NEW PRODUCT
router.post("/",verifyTokenAndAdmin, async (req, res) => {  
    const newProduct = new Product(req.body);
    
    try {
        const savedProduct = await newProduct.save();
        res.status(200).json(savedProduct)
    } catch(err) {
        res.status(500).json(err)
    }
  
   
})


//UPDATE
router.put("/:id", async(req, res) => {
    

    try {
        const updatedProduct = await Product.findByIdAndUpdate(
            req.params.id, 
            {
                $set: req.body  
            }, 
            {new: true}
        );

        if (!updatedProduct) {
            return res.status(404).json({ message: "Car not found" });
        }

        res.status(200).json(updatedProduct);
    } catch(err) {
        res.status(500).json(err)
    }
});

//DELETE CAR
router.delete("/:id", verifyTokenAndAdmin, async(req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.id)
        res.status(200).json("Car has been deleted...")
    } catch(err) {
        res.status(500).json(err)
    }
})

//GET CAR
router.get("/find/:id", async(req, res) => {
    try {
        const product = await Product.findById(req.params.id)        
        res.status(200).json(product)

    } catch(err) {
        res.status(500).json({ message: `Server Error: ${err}`})
    }
})

//GET ALL CARS
router.get("/", async(req, res) => {
    const qNew = req.query.new;
    const qMake = req.query.make;
    const qType = req.query.carType;
    
    try {
        let products;
        
        if(qNew) {
            products = await Product.find.sort({createdAt: -1}).limit(5);
        } else if(qMake) {
            products = await Product.find({
                make: qMake
            })
        } else if(qType) {
            products = await Product.find({
                carType: qType
            })            

        } else {
            products = await Product.find()
        }
        
        res.status(200).json(products)
    } catch(err) {
        res.status(500).json(err)
    }
});

router.get("/", async (req, res)=> {
    await Product.find([]).sort(req.query.sort).exec((err, listing) => {
        if(err) {
            res.status(500).json(err);
        } else {
            res.status(200).json({listing})
        }
    })
})


//sorting cars by price
router.get('/sort', async(req, res) => {
    const sortBy = req.query.sortBy || 'asc'; //Default to ascending order
    let sortOrder = 1;  //1 for ascending, -1 for desendeing

    if(sortBy === 'desc') {
        sortOrder = -1;
    }

    try {
        const products = await Product.find().sort({ price: sortOrder });
        res.json(products);

    } catch(err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
})


module.exports = router


