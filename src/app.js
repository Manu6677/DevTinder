const express = require("express");
const User = require('./models/user')
const {connectDB} = require("./config/database");
const app = express();

app.post("/signup", async(req, res)=>{

    // Here i have made the instance of the User Model 
    const user = new User({
        firstName: "Manu",
        lastName: "Panjoria",
        age: 23,
        emailId: 'Manu@gmail.com',
        password: '298w223298',
        gender: 'male'
    })

    // Remeber to handle the responses in a try & catch block
    try{
        await user.save();
        res.send("User is Saved to DB");
    }
    catch(err){
        res.status(400).send("Error in SAving the User" + err.message)
    }
})

app.listen(8000, async()=>{
    await connectDB();
    console.log("listening over the port 8000");
})