const path = require('path');
const express = require('express');
const hostRouter=express.Router();
const rootDir=require("../utils/pathUtils")

hostRouter.get("/host/add-home",(req,res,next)=>{
res.sendFile(path.join(rootDir,'views','addhome.html'));

})

const registeredHomes=[];

const normalizePhotoUrl = (url = '') => {
  const trimmed = String(url).trim();
  if (!trimmed) return '';
  if (/^https?:\/\//i.test(trimmed)) return trimmed;
  return `https://${trimmed}`;
};

const normalizePrice = (price = '') => String(price).trim().replace(/^\$/, '');

hostRouter.post("/host/add-home",(req,res,next)=>{
registeredHomes.push({
  houseName: String(req.body.houseName || '').trim(),
  price: normalizePrice(req.body.price),
  location: String(req.body.location || '').trim(),
  rating: String(req.body.rating || '').trim(),
  photoUrl: normalizePhotoUrl(req.body.photoUrl),
});
res.sendFile(path.join(rootDir,'views','homeadded.html'));
})

exports.hostRouter= hostRouter;
exports.registeredHomes=registeredHomes;


