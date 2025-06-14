import express from 'express'
import path from 'path'
import mongoose from 'mongoose'
import { type } from 'os'
import {v4 as uuidv4} from 'uuid'
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'; 
import {Userlogin} from '../models/Usermodals.js'  
import {body , validationResult} from 'express-validator';
import axios from 'axios';
import {Oauth2client} from '../Utils/Googleconfig.js'

export const Googlelogin = async (req,res) =>{
      try {
        const code = req.query;
        const googleRes = await Oauth2client.getToken(code);
        Oauth2client.setCredentials(googleRes.tokens)

        const userRes = await axios.get(`https://www.googleapis.com/oauth2/v3/userinfo?alt=json&access_token=${googleRes.tokens.access_token}`)
        const {email,name,picture} = userRes.data;
        let user = await Userlogin.findOne({email});
        if(!user){
            const newuser = new Userlogin({
                name,email,image : picture
            })
            newuser.save();
            const {_id} = user;
            const token = jwt.sign({id:_id,email},process.env.JWT_Secret,{expiresIn: '12h'})
            return res
            .status(200)
            .json({message:'success',token,user})
        }
      } catch (error) {
        console.log(error)
        return res
        .status(500)
        .json({message:'error',error:error})
      }
}