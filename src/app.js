const express = require("express");
const {User} = require('./models/user')
const {connectDB} = require("./config/database");
const app = express();

/*
  express.json() is the middleware given by express to convert the JSON object into the javascript object
   -> So that Server can read it out and process the request body.
*/ 
app.use(express.json());

app.post("/signup", async(req, res)=>{

    // Here i have made the instance of the User Model 
    const user = new User(req.body)

    // Remeber to handle the responses in a try & catch block
    try{
        await user.save();
        res.send("User is Saved to DB");
    }
    catch(err){
        res.status(400).send("Error in Saving the User" + err.message)
    }
})

app.get("/feed", async(req, res)=>{

    try{
        const allUsers = await User.find({});
        if(!allUsers){
           res.status(401).send("User not found" + err.message);
        }
        else{
            res.send(allUsers);
        }
    }
    catch(err){
        res.status(400).send("Not get the Users" + err.message);
    }
})

// Get one User by Email
// Remember when using the findOne it gives only object so '!userViaEmail' if cond work but...
//    --> find return the array of object so this '!userViaEmail' not work use 'userViaEmail.length == 0' there
app.get("/user", async(req, res)=>{

    try{
        const userViaEmail = await User.find({ emailId: req.body.emailId });
        console.log(userViaEmail);
        if(userViaEmail.length == 0){
           res.status(404).send("User not found");
        }
        else{
          res.send(userViaEmail);
        }
    }
    catch(error){
        res.status(401).send("Not get the user via email" + error.message);
    }
})

app.delete("/deleteUser", async(req, res)=>{

    try{
        console.log(req.body);
        const deletedUser = await User.findByIdAndDelete(req.body._id);
        console.log(deletedUser);
        res.send(deletedUser);
    }
    catch{
        res.status(401).send("Error Occured not deleted user");
    }
})

app.patch("/updateUser/:userId", async(req, res)=>{

    try{

        const updateKeys = [ "userId","firstName", "lastName", "age", "gender", "photoUrl", "about", "hobbies" ]
    
        const isAllowed = Object.keys(req.body).every((it)=> updateKeys.includes(it));

        if(!isAllowed){
          throw new Error("Update Not Allowed");
        }

        if(req.body.hobbies.length > 10){
         throw new Error("Hobbies can not be more than 10");
        }  

       const userId = req.params?.userId;
       const updatedUser = await User.findByIdAndUpdate(userId, req.body, {returnDocument : 'after', runValidators: true});
       res.send(updatedUser);
    } 

    catch(err){
        res.status(400).send("Update Failed " + err.message);
    }
})

app.listen(8000, async()=>{
    await connectDB();
    console.log("listening over the port 8000");
})