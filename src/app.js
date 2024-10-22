const express = require("express");
const {auth} = require("./middleware/auth")
const {userAuth} = require("./middleware/auth")
const app = express();

// Router handlers

//Below is the Query route example
// app.get("/user/", (req, res)=>{
//     res.send("hello devs");
//     console.log(req.query);
// })


// //Below is Dynamic route example
// app.get("/user/:userId/:name/:password", (req, res)=>{
//     console.log(req.params);
//     res.send("Dynamic routes")
// })


// app.use('/', (req,res, next)=>{
//     console.log("Http route");
//     next();
// })

// app.get('/usertestttttt', (req, res, next)=>{
//     console.log('1st get req');
//     next();
// }, 
// (req, res)=>{
//     console.log('2nd get req');
//     res.send('2nd res')
// }
// )

//Middlewares

app.use("/admin", auth)

//Here in this route i only applied auth middle ware for a single route of user, Hence there are two request handlers now
app.get("/user/data", userAuth, (req,res)=>{
  res.send("User Authenticated")
})

app.get('/admin/getData', (req,res,next)=>{
    res.send("Admin getData");
})

app.get('/admin/getData/secrets', (req,res,next)=>{
    res.send("Admin getData/secrets");
})

app.get('/admin/favs', (req,res,next)=>{
    res.send("Admin favs");
})


app.listen(8000,()=>{
    console.log("listening over the port 8000");
})

