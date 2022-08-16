const express = require("express")

const { exec } = require("child_process");

function drun_code(req, res) {

    var c_name=req.query.container_name;
	var c_image=req.query.container_image;
    var c_port=req.query.container_port;
    var cname;
	res.write("Cname: "+ c_name +" Cimage:"+ c_image + " cport: "+ c_port);
    console.log("Cname: "+ c_name +" Cimage:"+ c_image + " cport: "+ c_port);
	// cname = "docker run -dit --name "+ c_name + " " + c_image;
	
    if (c_port.length == 0){
        console.log("port not defined")
        cname = "docker run -dit --name "+ c_name + " " + c_image;
    }
    else{
        console.log("port defined  ")
        cname = "docker run  -p "+c_port+" -dit --name "+ c_name + " " + c_image ;
    }

	exec(cname , (err , stdout , stderr)=>{
		res.write("<br /><pre>"+stdout+"</pre>");
        console.log("err: "+ err)
        console.log("stdout: "+ stdout)
        console.log("stderr: "+ stderr)
        console.log("c_port "+ c_port)
       // setTimeout(ps_code(),5000)
//       setTimeout(ps_code,5000)
       res.send();
        
	})
}

module.exports = {
    drun_code,
}
