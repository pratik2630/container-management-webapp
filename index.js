const express = require("express")
//to run sys cmd
const {exec} =require("child_process")
//ps

const { ps_code } = require("./public/ps")
const { dimage_code } = require("./public/dimage")



const app = express()
app.use(express.static("public"));

app.listen(3001, ()=>{
    console.log("Server Started !!")    
} )


//  it is a main page
app.get("/" , (req , res) =>{
    res.sendFile(__dirname + "/public/Home.html")
})

//for ps command
app.get("/ps" ,(req,res)=>{
	ps_code(req , res)
})

app.get("/dimage" ,(req,res)=>{
	dimage_code(req , res)
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

