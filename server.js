"use strict";
const express = require("express");
const app = express();
const PORT=8091;
app.get("/", (req, res, next) => {
    res.send("TourBooker API");
});   
app.get("/tours",(req,res,next)=>{
    res.send("get a list of tours...");
});
app.post("/tours",(req,res,next)=>{
    res.send("Add new tour..");
});
app.listen(process.env.PORT || 8091, () => console.log(`Server Started... on ${PORT}`));
