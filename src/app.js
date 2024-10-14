const express = require("express");

const app = express();

// Router handler
app.use("/hello", (req, res)=>{
    console.log("Hello from Server");
    res.send("Hello from server")
})

app.listen(8000,()=>{
    console.log("listening over the port 8000");
})