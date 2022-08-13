const express = require("express")

const { exec } = require("child_process");

function stop_container(req, res) {
   
    // document.getElementById("stopContainerMainBox").style.display = "block";
    var c_name=req.query.container_name;
	
    cname = "docker stop " + c_name ;
    

	exec(cname , (err , stdout , stderr)=>{
		res.write("<br /><pre>"+stdout+"</pre>");
        
        
       res.send();
        
	})
}

module.exports = {
    stop_container,
}
