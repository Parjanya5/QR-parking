import express from 'express'
import path from 'path'
import mongoose from 'mongoose'
import { type } from 'os'

mongoose.connect(`mongodb+srv://parjanyakumar8:4ZUmFtjg4kHiHeZb@scan-your-car.o8qtbmf.mongodb.net/?retryWrites=true&w=majority&appName=Scan-your-car`,{
    useNewUrlParser : true,
    useUnifiedTopology : true
})

.then(()=> console.log(`connected with mongodb with user routes`))
.catch(()=> console.log(`face some error with user database`))

const userSchema = new mongoose.Schema({
    name : {
        type: String ,
        require : true
    },
    password : {
        type : String,
        require : true
    },
    email : {
        type : String,
        require : true,
        unique : true
    },
    phone : {
        type : String 
    }
}) 


const Userlogin = mongoose.model('Userlogin',userSchema);

// get BAsic message
export const usernormal = (req,res)=>{
    try {
        return res
        .status(200)
        .json({message:'Welcome to my User login page'})
    } catch (error) {
        return res
        .status(400)
        .json('Facing error on / request on user route get request')
    }
}

// get userlogin data

export const userGet = async(req,res)=>{
    const data =await Userlogin.find();
      try {
        if(data.length>0){
            return res
            .status(200)
            .json(data)
        }
        else{
            return res
            .status(200)
            .json({message:'No data user login data found '})
        }
      } catch (error) {
        return res
        .status(400)
        .json({message:'Facing error on upon get request in user routes ' , error})
      }
}

// Post userlogin data

export const userPost  = async (req,res)=>{
    console.log(req.body)
    try {
        const createuser = new Userlogin(req.body)
        await createuser.save();
        return res
        .status(200)
        .json({message:'user created succesfully'})
    } catch (error) {
        return res 
        .status(400)
        .json({message:'facing error with creating user on User Route'})
    }
}

// Update userlogin data

export const userUpdate = async (req,res)=>{
    console.log(req.body)
    try {
        const updateruser = await Userlogin.findByIdAndUpdate(req.params.id,req.body,{new:true})
        if(updateruser){
            return res 
            .status(200)
            .json({message:'data updated Succesfully'})
        }
    } catch (error) {
        return res
        .status(400)
        .json({message:'facing error with update user'})
    }
}


// Delete userlogin data 

export const userDelete =  async (req,res)=>{
    try {
        const deleteuser = await Userlogin.findByIdAndDelete(req.params.id)
        if(deleteuser){
            return res
            .status(200)
            .json({message:'user deleted succesfully'})
        }
    } catch (error) {
        return res
        .status(400)
        .json({message:'facing error with user deletaion on user routess'})
    }
}