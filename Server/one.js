import dotenv from 'dotenv';

// Load environment variables from .env file
const result = dotenv.config();
if (result.error) {
  console.log('Error loading .env file:', result.error);
} else {
  console.log('.env file loaded successfully');
}


const port  = process.env.PORT

console.log(port)