import mongoose from "mongoose";

const fitzoModel = mongoose.Schema({
    name:{
        type: String,
        required:true,
        trim:true,
    },
    type:{
        type: String,
        required:true,
        trim:true,
    }
})

const FitzoModel = mongoose.model('User',fitzoModel);

export default FitzoModel;
