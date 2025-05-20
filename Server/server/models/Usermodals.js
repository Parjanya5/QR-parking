import mongoose from 'mongoose'



mongoose.connect(`mongodb+srv://parjanyakumar8:4ZUmFtjg4kHiHeZb@scan-your-car.o8qtbmf.mongodb.net/?retryWrites=true&w=majority&appName=Scan-your-car`,{
    useNewUrlParser : true,
    useUnifiedTopology : true
})

.then(()=> console.log(`connected with mongodb with user routes`))
.catch(()=> console.log(`face some error with user database`))

const userSchema = new mongoose.Schema({
    name : {
        type: String ,
        require : true
    },
    password : {
        type : String,
        require : true
    },
    email : {
        type : String,
        require : true,
        unique : true
    },
    phone : {
        type : String 
    }
}) 


export const Userlogin = mongoose.model('Userlogin',userSchema);

