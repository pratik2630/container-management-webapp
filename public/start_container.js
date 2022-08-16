const express = require("express")

const { exec } = require("child_process");

function start_container(req, res) {
    
    var c_name=req.query.container_name;
	
    cname = "docker start " + c_name ;
    console.log("c_name:"+c_name)
    console.log("cname:"+cname)

	exec(cname , (err , stdout , stderr)=>{
		res.write("<br /><pre>"+stdout+"</pre>");
       
        
       res.send();
        
	})
}

module.exports = {
    start_container,
}
