
require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser  = require("body-parser");
const cors = require('cors');
const cookieParser = require("cookie-parser");
const authRoute = require("./Routes/AuthRoute");

const {HoldingModel} = require("./model/HoldingModel");
const {OrderModel} = require("./model/OrderModel");
const {PositionModel} = require("./model/PositionModel");

const PORT = process.env.PORT || 3002;
const URL = process.env.MONGO_URL;



const app = express();
 app.use(cors());
 app.use(bodyParser.json());
 app.use(cookieParser());
 app.use('/auth', authRoute);
 





app.get("/allHoldings", async(req,res)=>{
    let allHolding = await HoldingModel.find();
    res.json(allHolding);
});

app.get("/allPosition", async(req,res)=>{
    let allPosition = await PositionModel.find();
    res.json(allPosition);
});


app.listen(PORT, ()=>{
console.log("app started");
   mongoose.connect(URL)
   console.log("app started");
});