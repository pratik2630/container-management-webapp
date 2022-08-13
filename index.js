const express = require("express")
//to run sys cmd
const {exec} =require("child_process")
//ps

const { ps_code } = require("./public/ps")
const { psall_code } = require("./public/ps_all")
const { dimage_code } = require("./public/dimage")
const { drun_code } = require("./public/docker-run")
const { delete_container } = require("./public/delete_container")
const { delete_all_container } = require("./public/delete_all_container")
const { start_container } = require("./public/start_container")
const { stop_container } = require("./public/stop_container")
const { download_img } = require("./public/download")
const { delete_image } = require("./public/delete_image")
const { search_img } = require("./public/search_img")



const app = express()
app.use(express.static("public"));

app.listen(3000, ()=>{
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

//for ps -a command
app.get("/ps_all" ,(req,res)=>{
	psall_code(req , res)
})

//display docker images
app.get("/dimage" ,(req,res)=>{
	dimage_code(req , res)
})





//get the data from 
//run page for container
app.get("/docker_run", (req , res)=>{
    drun_code(req,res)
})


//start container
app.get("/start", (req , res)=>{
    start_container(req,res)
})

//stop container
app.get("/stop", (req , res)=>{
    stop_container(req,res)
})

//delete specified container
app.get("/cdelete", (req , res)=>{
    delete_container(req,res)
})

//delete all container
app.get("/cdelete_all", (req , res)=>{
    delete_all_container(req,res)
})

//download image
app.get("/download_image", (req , res)=>{
    download_img(req,res)
})


//delete image
app.get("/delete_image", (req , res)=>{
    delete_image(req,res)
})

// search image
app.get("/search_image", (req , res)=>{
    search_img(req,res)
})



