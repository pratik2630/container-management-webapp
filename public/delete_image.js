const express = require("express")

const { exec } = require("child_process");

function delete_image(req, res) {

    var i_name=req.query.image_name;
	
        cname = "docker rmi "+ i_name;
    
	exec(cname , (err , stdout , stderr)=>{
		res.write("<br /><pre>Deleted image "+stdout+"</pre>");

       res.send();
        
	})
}

module.exports = {
    delete_image,
}
