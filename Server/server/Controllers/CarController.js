import express from 'express'
import path from 'path';
import mongoose from 'mongoose'
import QRCode from 'qrcode'
import { type } from 'os';
import { User } from '../models/Carmodals.js';
import dotenv from 'dotenv';  
dotenv.config();

// Find data by id 
export const findingdata =async (req,res)=>{
  try {
    const car = await User.findById(req.params.id);
    if (!car) return res.status(404).send('Car not found');
    res.json(car);
  } catch (err) {
    res.status(500).send('Error fetching car');
  }
}


export const normaldata = (req,res)=>{
    return res
    .status(200)
    .json({message:'succesfully run'})
}

// GET DATA

export const Getdata = async (req,res)=>{
    const data = await User.find({user : req.user.id});
    try {
        if(data.length>0){
         return res
         .status(200)
         .json(data)
        }
        else{
         return res
         .status(200)
         .json({message:'no data found on car routes'})
        }
    } catch (error) {
   return  res
   .status(400)
   .json({message:'facing error on get request on car routes'})
    }
 }

//  Post data 

 export const postdata = async (req,res)=>{
    console.log(req.body)
    if(!req.body.name ){
       return res
       .status(400)
       .json({message:'req.body not passes data to post request'})
    }

    const {name , model , phone , vehicle , image , color, qrdataurl , message} = req.body
    try {
        const cardata = new User({name,model,phone,vehicle,image,color,qrdataurl,message , user : req.user.id })
        const frontendUrl = process.env.FRONTEND_URL || 'http://localhost:5173'
        // const Uro = https://qr-parking-vzxn.onrender.com/find/682b04baf26ac392d8597311
        const qrText = `https://qr-parking-wnvr.vercel.app/Qrscan/${cardata._id}`;
        const qrmeta = await QRCode.toDataURL(`tel:${cardata.phone}`);

        const qrCodeUrl =await QRCode.toDataURL(qrText)
        console.log(`my new id`,cardata._id);
        cardata.model = req.body.model;
        cardata.qrdataurl = qrCodeUrl;
        cardata.qrdata = qrmeta;
        cardata.image = `https://clipart-library.com/img1/1060318.png`
       await cardata.save();
       console.log("data set succesfully")
        return res
        .status(200)
        .json({message:'succesfully post data on car routes'})
    } catch (error) {
        console.log(error,'Facing error with Post data on car route')
        return res
        .status(400)
        .json({message:'facing eror on post rquest on car route'})
    }
}

// update data
export const updatedata = async(req,res)=>{
    console.log('data for updating', req.params.id , 'now body' , req.body)
    const {name,model,phone,color,message,image}= req.body
   
    

      try {
        if(!req.params.id){
            return res
            .status(400)
            .json({message:'dont get the id of updation data in car routes'})
        }

        const updatedata = await User.findByIdAndUpdate(req.params.id,req.body,{new:true})
        if(updatedata){
            return res
            .status(200)
            .json({message:'data updated succesfully'})
        }
        else{
            return res
            .status(400)
            .json({message:'facing error on update data on car route'})
        }
      } catch (error) {
         return res
         .status(400)
         .json({message:'error facing on update request on car routes', error})
      }
}


// delete request 
export const deletedata =  async (req,res)=>{
    console.log('the id for deleting is ',req.params.id)
    try {
        const deletedata =await User.findByIdAndDelete(req.params.id)
        if(deletedata){
            return res
            .status(200)
            .json({message:'car detail deleted succesfully'})
        }
        
    } catch (error) {
        return res
        .status(400)
        .json({message:'facing error on delete request on car routes', error})
    }
}


export const sendAlert = async(req,res)=>{

}