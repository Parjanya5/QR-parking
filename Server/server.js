import express from 'express'
import path from 'path'
import Router from './server/Routes/CarRoute.js';
import Router1 from './server/Routes/userRoute.js'
import dotenv from 'dotenv';    
import logger from './server/Middleware/logger.js';
import cors from "cors";
import cookieParser from 'cookie-parser';
import { fileURLToPath } from 'url';

dotenv.config();

const Port = process.env.PORT ;

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Using middleware function
app.use(logger)
app.use(express.json());
// app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'Upload')));



app.use(cors({
  origin: '*',  // Allows frontend from localhost:5173, Vercel, Netlify etc.
}));

app.use('/',Router);
app.use('/User',Router1)

app.listen(Port,'0.0.0.0',()=>{
    console.log(`Server is succesfull listening on ${Port}`)
})