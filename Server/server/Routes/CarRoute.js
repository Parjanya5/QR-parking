import express from 'express'
import path from 'path';
import { type } from 'os';
import { normaldata,Getdata,postdata,updatedata,deletedata,findingdata , getimage } from '../Controllers/CarController.js';
import { fetchUser } from '../Middleware/fetchUser.js';
import { upload } from '../Middleware/Image.js';

const app = express();
const Router = express.Router()


// Route 

Router.get('/',normaldata)


// find request

Router.get('/find/:id',findingdata)
 

// get request

Router.get('/Get',fetchUser, Getdata)


//  post request routes 
Router.post('/post',fetchUser,upload.single('image') ,postdata)


// Update Request

Router.put('/put/:id',fetchUser,updatedata)

// Delete user
Router.delete('/delete/:id',fetchUser,deletedata)

// get image
Router.get('/image/:id',getimage)


export default Router;