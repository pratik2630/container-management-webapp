const express = require("express")

const { exec } = require("child_process");

function delete_container(req, res) {

    var c_name=req.query.container_name;
	
        cname = "docker rm "+ c_name;
    
	exec(cname , (err , stdout , stderr)=>{
		res.write("<br /><pre>Deleted "+stdout+"</pre>");

       res.send();
        
	})
}

module.exports = {
    delete_container,
}
