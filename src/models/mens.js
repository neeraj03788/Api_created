const express=require('express')
const mongoose=require('mongoose');

const menschema=new mongoose.Schema({
    ranking:{
        type:Number
    },name:{
        type:String,
    }
})
const MensRanking=new mongoose.model("MensRanking",menschema);
module.exports=MensRanking;