const express = require("express")

const { exec } = require("child_process");

function search_img(req, res) {

    var i_name=req.query.image_name;
	
        cname = "docker search "+ i_name;
    
	exec(cname , (err , stdout , stderr)=>{
		res.write("<br /><pre>available images "+stdout+"</pre>");

       res.send();
        
	})
}

module.exports = {
    search_img,
}
