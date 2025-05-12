import express from 'express'
import path from 'path';
import { type } from 'os';
import { normaldata,Getdata,postdata,updatedata,deletedata,findingdata } from '../Controllers/Carcontroller.js';

const app = express();
const Router = express.Router()


// Route 

Router.get('/',normaldata)


// find request

Router.get('/find/:id',findingdata)
 

// get request

Router.get('/Get', Getdata)


//  post request routes 
Router.post('/post',postdata)


// Update Request

Router.put('/put/:id',updatedata)

// Delete user
Router.delete('/delete/:id',deletedata)


export default Router;