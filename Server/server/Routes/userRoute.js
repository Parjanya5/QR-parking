import express from 'express'
import { usernormal, userGet , userPost , userUpdate, userDelete } from '../Controllers/UserController.js';


const app = express();
const router = express.Router();


// Normal msg
router.get('/',usernormal)

// get User data
router.get('/get',userGet)

// Post user login data
router.post('/post',userPost)

// Update User login data
router.put('/put/:id',userUpdate)

// Delete user login data
router.delete('/delete/:id',userDelete)


export default router;