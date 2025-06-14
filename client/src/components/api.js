import axios from 'axios';

const api = axios.create({
    baseURL : 'https://qr-parking-vzxn.onrender.com/user'
})

 export const googleAuth = (code) => api.get(`/google?code=${code}`)