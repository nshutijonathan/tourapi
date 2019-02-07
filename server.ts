import * as express from "express";
const app=express();

app.get("/",(req, res, next) =>{
    res.send("tour booking API");
});

app.listen(process.env.PORT || 8091,()=>console.log("server started..."));