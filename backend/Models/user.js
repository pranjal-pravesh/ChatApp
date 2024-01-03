import mongoose from 'mongoose';

const userSchema= new mongoose.Schema({

    username: {type:String, unique:true},
    password: String,

}, {timestamps:True})

const userModel = mongoose.model('User', userSchema);

module.exports = userModel;