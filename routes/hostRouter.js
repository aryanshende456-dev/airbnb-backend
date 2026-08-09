const path = require('path');
const express = require('express');
const hostRouter=express.Router();
const rootDir=require("../utils/pathUtils")

hostRouter.get("/host/add-home",(req,res,next)=>{
res.sendFile(path.join(rootDir,'views','addhome.html'));

})

hostRouter.post("/host/add-home",(req,res,next)=>{

res.sendFile(path.join(rootDir,'views','homeadded.html'));

})

module.exports= hostRouter;