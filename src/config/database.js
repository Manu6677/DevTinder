const mongoose = require('mongoose');

const connectDB = async()=>{

    try{
        await mongoose.connect('mongodb+srv://User:R51ZYMDTDMm5oVoo@cluster666.5xgcn.mongodb.net/devTinder');
        console.log("connected successfully to DB");
    }
    catch(err){
        console.log(err.message);
    }
}

module.exports = {
    connectDB,
}