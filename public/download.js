const express = require("express")

const { exec } = require("child_process");

function download_img(req, res) {

    var i_name=req.query.imageNameToDownload;
	console.log("image name :"+i_name)
        cname = "docker pull "+ i_name;
        console.log("command name :"+cname)
	exec(cname , (err , stdout , stderr)=>{
		res.write("<br /><pre>Downloaded "+stdout+"</pre>");

       res.send();
        
	})
}

module.exports = {
    download_img,
}
