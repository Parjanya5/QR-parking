import express from 'express'
import path from 'path'
import Router from './server/Routes/CarRoute.js';
import Router1 from './server/Routes/userRoute.js'
import dotenv from 'dotenv';    
import logger from './server/Middleware/logger.js';
import cors from "cors";
import cookieParser from 'cookie-parser';

dotenv.config();

const Port = process.env.PORT ;

const app = express();

// Using middleware function
app.use(logger)

app.use(express.static('/server'))


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// app.use(cors({
//   origin: '*'
// }));
 app.use(cors({
  origin: 'http://localhost:5173',  // Allow your frontend origin
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true // If using cookies or authorization headers
}));

; // Covers all methods and paths



app.use('/',Router);
app.use('/User',Router1)

app.listen(Port,'0.0.0.0',()=>{
    console.log(`Server is succesfull listening on ${Port}`)
})