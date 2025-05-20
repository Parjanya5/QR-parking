import mongoose from 'mongoose'

mongoose.connect(`mongodb+srv://parjanyakumar8:4ZUmFtjg4kHiHeZb@scan-your-car.o8qtbmf.mongodb.net/?retryWrites=true&w=majority&appName=Scan-your-car`,{
    useNewUrlParser : true,
    useUnifiedTopology : true
})

.then(()=> console.log('Connected to mongodb with car routes'))
.catch(()=> console.log(`Facing error with mongo data`))


//  Mongoose.Schema   

const setSchema = new mongoose.Schema({
    user:{
       type: mongoose.Schema.Types.ObjectId,
       ref : 'Userlogin'
    },
    name : {
        type : String,
    },
    phone : {
       type : String
    },
    vehicle : {
        type: String
    },
    image : {
        type : String
    },
    qrdataurl : {
        type : String
    },
    qrdata : {
        type : String
    },
    color:{
        type : String
    },
    model:{
        type : String
    },
    message:{
        type : String
    }
})

// Mongoose Model
export const User = mongoose.model('User', setSchema) ; 
