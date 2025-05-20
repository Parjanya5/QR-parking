const JWT_Secret = 'MY-PARKING'
import jwt from 'jsonwebtoken'; 

export const fetchUser = (req,res,next)=>{
    // get the user from the jwt tokem
    const token = req.header('auth-token');
    if(!token){
        return res
        .status(401)
        .json({message: 'please authenticate using a valid token'})
    }
    try {
    const data = jwt.verify(token , JWT_Secret)
    req.user = data.user;
    next();
    } catch (error) {
        return res
        .status(401)
        .json({message: 'please authenticate using a valid token'})
    }
}