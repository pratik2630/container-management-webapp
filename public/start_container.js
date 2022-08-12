const express = require("express")

const { exec } = require("child_process");

function start_container(req, res) {

    var c_name=req.query.container_name;
	
    cname = "docker start " + c_name ;
    

	exec(cname , (err , stdout , stderr)=>{
		res.write("<br /><pre>"+stdout+"</pre>");
       
        
       res.send();
        
	})
}

module.exports = {
    start_container,
}
