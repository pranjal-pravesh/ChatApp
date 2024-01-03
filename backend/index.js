import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import { userModel } from './Models/user';
dotenv.config()


const app = express();
const port = 3002;
const mongoURL = process.env.MONGO_URL;

mongoose.connect(mongoURL);



app.get('/', (req,res)=>{
    res.send('hello there')
})
app.listen(port);

//riTjQvKameuWTv8y