const mongoose = require('mongoose');
const { Schema } = mongoose

const userSchema = new Schema({
    firstName: {type: String, required: true, minLength: 4},
    lastName: {type: String},
    age: {type: Number, min: 18},
    emailId: {type: String, unique: true, lowercase: true, trim: true},
    password: {type: String, required: true},
    gender: {
        type: String,
        validate(value){
            if(!["male", "female", "others"].includes(value)){
                throw new Error("Gender Data not valid")
            }
        },
        lowercase: true,
        require: true
    },
    photoUrl: {
        type:String,
        default: 'https://www.shutterstock.com/image-vector/avatar-gender-neutral-silhouette-vector-600nw-2470054311.jpg'
    },
    about: {
        type: String,
        default: "This is default About"
    },
    hobbies: {
        type: [String]
    }
}, {timestamps: true});

const User = mongoose.model('User', userSchema);
module.exports = {User} 