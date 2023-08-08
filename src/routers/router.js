const express=require('express');
const router=new express.Router();

const MensRanking=require('../models/mens');

router.get("/mens",async(req,res)=>{
    try{
       const getmens=await MensRanking.find({});
       res.status(201).send(getmens);
    }
    catch(e){
       res.status(400).send(e);
    }
 })
 router.post("/mens",async(req,res)=>{
    try{
         const addingmenschema=new MensRanking(req.body)
       //   console.log(req.body)
       const insertdata= await addingmenschema.save();
       res.status(201).send(insertdata)
    }catch(e){
     res.status(400).send(e);
    }
 })
 router.patch('/mens/:id',async(req,res)=>{
    try{
       const _id=req.params.id;
       const update_men=await MensRanking.findByIdAndUpdate(_id,req.body,{new:true});
       res.status(400).send(update_men);
    }
    catch(e){
       res.status(500).send(e);
    }
 })
 router.delete('/mens/:id',async(req,res)=>{
    try{
       const _id=req.params.id;
       const update_men=await MensRanking.findByIdAndDelete(_id);
       res.status(400).send(update_men);
    }
    catch(e){
       res.status(500).send(e);
    }
 })
 
 module.exports=router;