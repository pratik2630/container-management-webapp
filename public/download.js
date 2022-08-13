const express = require("express")

const { exec } = require("child_process");

function download_img(req, res) {

    var i_name=req.query.image_name;
	
        cname = "docker pull "+ i_name;
    
	exec(cname , (err , stdout , stderr)=>{
		res.write("<br /><pre>Downloaded "+stdout+"</pre>");

       res.send();
        
	})
}

module.exports = {
    download_img,
}
