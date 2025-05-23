import express from 'express'
import { usernormal, userGet , userPost , userUpdate, userDelete , userfind , userGetToken , userinfo} from '../Controllers/UserController.js';
import { fetchUser } from '../Middleware/fetchUser.js';


const app = express();
const router = express.Router();


// Normal msg
router.get('/',usernormal)

// get User data
router.get('/get',userGet)

// Find user
router.post('/login', userfind)

// Post user login data
router.post('/post',userPost)

// Update User login data
router.put('/put/:id',userUpdate)

// Delete user login data
router.delete('/delete/:id',userDelete)

// post user token
router.post('/token',fetchUser,userGetToken)

// Router.get
router.get('/info/:id',userinfo)

export default router;