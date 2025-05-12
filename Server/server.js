import express from 'express'
import path from 'path'
import Router from './server/Routes/CarRoute.js';
import Router1 from './server/Routes/userRoute.js'
import dotenv from 'dotenv';    
import logger from './server/Middleware/logger.js';
import cors from "cors";

dotenv.config();


const Port = process.env.PORT || 4500 ;
console.log(Port)
const app = express();

// Using middleware function
app.use(logger)

app.use(express.static('/server'))


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());


app.use('/',Router);
app.use('/User',Router1)

app.listen(Port,'0.0.0.0',()=>{
    console.log(`Server is succesfull listening on ${Port}`)
})