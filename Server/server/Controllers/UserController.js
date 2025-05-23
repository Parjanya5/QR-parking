import express from 'express'
import path from 'path'
import mongoose from 'mongoose'
import { type } from 'os'
import {v4 as uuidv4} from 'uuid'
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'; 
import {Userlogin} from '../models/Usermodals.js'  
import {body , validationResult} from 'express-validator';


// my jwt secret
const JWT_Secret = 'MY-PARKING'
// mongoose.connect(`mongodb+srv://parjanyakumar8:4ZUmFtjg4kHiHeZb@scan-your-car.o8qtbmf.mongodb.net/?retryWrites=true&w=majority&appName=Scan-your-car`,{
//     useNewUrlParser : true,
//     useUnifiedTopology : true
// })

// .then(()=> console.log(`connected with mongodb with user routes`))
// .catch(()=> console.log(`face some error with user database`))

// const userSchema = new mongoose.Schema({
//     name : {
//         type: String ,
//         require : true
//     },
//     password : {
//         type : String,
//         require : true
//     },
//     email : {
//         type : String,
//         require : true,
//         unique : true
//     },
//     phone : {
//         type : String 
//     }
// }) 


// const Userlogin = mongoose.model('Userlogin',userSchema);

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
        .status(500)
        .json({message:'Facing error on upon get request in user routes ' , error})
      }
}

// Find user by id
export const userfind = [
    body ('email' , 'Enter a valid email').isEmail(), 
    body ('password' , 'Password is required').exists(),
    async(req,res)=>{
    console.log(req.body)
    const {email , password} = req.body;

     const errors = validationResult(req)
     if(!errors.isEmpty()){
        return res
        .status(400)
        .json({error : errors.array() , message:'Invalid request'})
     }
   

    try {
        

        const finduser = await Userlogin.findOne({email})
        if(!finduser){
            return res
            .status(404)
            .json({message:'No user found'})
        }
     
        const passwordcompare = await bcrypt.compare(password, finduser.password)
  
        if(!passwordcompare){
            return res 
            .status(400)
            .json({ message:'Invalid password '})
        }

        const data = {
            user : {
                id : finduser._id,
            }
        }

        const authToken = jwt.sign(data , JWT_Secret)
        return res
        .status(200)
        .json( {authToken : authToken , message : 'login successfully'}) 
    } catch (error) {
         return res
         .status(500)
         .json({message:'Facing error on upon user login in user routes ' , error})
    }
}
]

// Post userlogin data

export const userPost  = async (req,res)=>{
    console.log(req.body)
     try {
          let user = await Userlogin.findOne({email : req.body.email})
          if(user){
             return res
              .status(401)
              .json({message:'User e-mail already exist'})
            }
           
            const salt =await bcrypt.genSalt(10);
            const secpassword = await bcrypt.hash(req.body.password,salt)
            
        const createuser = new Userlogin({name:req.body.name , email: req.body.email , phone : req.body.phone , password : secpassword})
        await createuser.save();

        const data = {
            user : {
                id : createuser._id
            }
        }

         const authToken = jwt.sign(data, JWT_Secret)

        return res
        .status(200)
        .json( {authToken : authToken,message:'user created succesfully'})
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


// user jwt token get
export const userGetToken =  async (req,res)=>{
    try {
        const user = await Userlogin.findById(req.user.id).select("-password")
        return res
        .status(200)
        .json(user)

        
    } catch (error) {
        console.log(error.message)
        return res 
        .status(500)
        .json({message :' internal server error token'})
    }
}

// export const userinfo = async (req,res)=>{
//     try {
//         const info = await Userlogin.findById(req.params.id).select("-password")
//     } catch (error) {
        
//     }
// }