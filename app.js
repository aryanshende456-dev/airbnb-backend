const path = require('path');
const express = require('express');

const userRouter= require("./routes/userRouter")
const hostRouter= require("./routes/hostRouter")
const rootDir=require("./utils/pathUtils")

const app= express();


app.use(express.urlencoded());

app.use(userRouter);
app.use(hostRouter);
app.use(express.static(path.join(rootDir,'public')));

app.use((req,res,next)=>{
res.sendFile(path.join(rootDir,'views','404.html'));

})


const PORT= 3000;
app.listen(PORT,()=>{
console.log("server running on 3000")
});