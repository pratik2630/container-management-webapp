const express = require("express")
//to run sys cmd
const {exec} =require("child_process")
//ps

//const { ps_code } = require("./public/ps")



const app = express()
app.use(express.static("public"));

app.listen(3000, ()=>{

    console.log("Server Started !!")

} )
//  it is a main page
app.get("/" , (req , res) =>{
    
    //Home.html file 
    res.sendFile(__dirname + "/public/Home.html")
})

//get the data from 
//run page for container
app.get("/run", (req , res)=>{
    const cname = req.query.cname;
    const cimage = req.query.cimage;

    exec('cal' , (err , stdout , stderr)=>{


        res.send("<pre>"+stdout + "</pre>")
    })
})

