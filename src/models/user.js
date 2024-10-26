const mongoose = require('mongoose');
const { Schema } = mongoose;
const validator = require("validator");

const userSchema = new Schema({
    firstName: {type: String, required: true, minLength: 4},
    lastName: {type: String},
    age: {type: Number, min: 18},
    emailId: {type: String, unique: true, lowercase: true, trim: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Email is not Correct" + value);
            }
        }
    },
    password: {
        type: String, 
        required: true,
        validate(value){
            if(!validator.isStrongPassword(value)){
                throw new Error("Enter Strong Password "+ value);
            }
        } 
    },
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
        default: 'https://www.shutterstock.com/image-vector/avatar-gender-neutral-silhouette-vector-600nw-2470054311.jpg',
        validate(value){
            if(!validator.isURL(value)){
                throw new Error("Invalid photo URL: "+ value)
            }
        }
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