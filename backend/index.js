const express = require("express");
const app = express();
const cors = require('cors')

const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const optionRoute = require("./routes/option");
const carOptionRoute = require("./routes/carOption")

dotenv.config();
app.use(cors());
app.use(express.json())
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
//Serve uploaded files from the "uploads" directory
// app.use("/uploads", express.static('uploads'))
app.use("/api/options", optionRoute);
app.use("/api/carOptions", carOptionRoute);

mongoose
    .connect(process.env.MONGO_URL)
    .then(()=> console.log("DB connection is Successfull"))
    .catch((err) => {
    console.log(err)
});

app.use(express.json())

app.listen(process.env.PORT || 5002, () => {
    console.log(`Backend server is running on http://localhost:${process.env.PORT}`)
})