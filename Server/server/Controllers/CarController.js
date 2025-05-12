import express from 'express'
import path from 'path';
import mongoose from 'mongoose'
import QRCode from 'qrcode'
import twilio from 'twilio'
import { type } from 'os';




mongoose.connect(`mongodb+srv://parjanyakumar8:4ZUmFtjg4kHiHeZb@scan-your-car.o8qtbmf.mongodb.net/?retryWrites=true&w=majority&appName=Scan-your-car`,{
    useNewUrlParser : true,
    useUnifiedTopology : true
})

.then(()=> console.log('Connected to mongodb with car routes'))
.catch(()=> console.log(`Facing error with mongo data`))


//  Mongoose.Schema   

const setSchema = new mongoose.Schema({
    name : {
        type : String,
    },
    phone : {
       type : String
    },
    vehicle : {
        type: String
    },
    image : {
        type : String
    },
    qrdataurl : {
        type : String
    },
    color:{
        type : String
    },
    model:{
        type : String
    },
    message:{
        type : String
    }
})

// Mongoose Model
const User = mongoose.model('User', setSchema) ; 


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
    const data = await User.find();
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
    try {
        const cardata = new User(req.body)
        const qrText = `http://localhost:5173/Qrscan/${cardata._id}`;
        const qrCodeUrl = await QRCode.toDataURL(qrText);
        console.log(`my new id`,cardata._id);
        cardata.model = req.body.model.toUpperCase();
        cardata.qrdataurl = qrCodeUrl;
        cardata.image = `https://clipart-library.com/img1/1060318.png`
       await cardata.save();
       console.log("data set succesfully")
        return res
        .status(200)
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