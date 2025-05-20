import express from 'express'
import path from 'path';
import { type } from 'os';
import { normaldata,Getdata,postdata,updatedata,deletedata,findingdata } from '../Controllers/CarController.js';
import { fetchUser } from '../Middleware/fetchUser.js';

const app = express();
const Router = express.Router()


// Route 

Router.get('/',normaldata)


// find request

Router.get('/find/:id',findingdata)
 

// get request

Router.get('/Get',fetchUser, Getdata)


//  post request routes 
Router.post('/post',fetchUser,postdata)


// Update Request

Router.put('/put/:id',fetchUser,updatedata)

// Delete user
Router.delete('/delete/:id',fetchUser,deletedata)


export default Router;