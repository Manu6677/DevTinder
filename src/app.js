const express = require("express");

const app = express();

// Router handlers

//Below is the Query route example
app.get("/user/", (req, res)=>{
    res.send("hello devs");
    console.log(req.query);
})


//Below is Dynamic route example
app.get("/user/:userId/:name/:password", (req, res)=>{
    console.log(req.params);
    res.send("Dynamic routes")
})

app.listen(8000,()=>{
    console.log("listening over the port 8000");
})